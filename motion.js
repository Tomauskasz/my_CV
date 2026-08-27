/* ==========================================================================
   motion.js — the live layer.

   Everything here is decoration. lang.js owns the content and renders a
   complete, legible page on its own; this file makes that page boot, stay
   alive, answer the pointer and re-decode when the language changes.

   Two structural rules:
     - It bails out entirely under reduced motion, before a GL context is
       ever created. There is no degraded mode to maintain.
     - One requestAnimationFrame loop drives the shader, the pointer field,
       the counters and the scramble. Five loops would each schedule their
       own frame and fight for the same 16ms.
   ========================================================================== */

(() => {
  "use strict";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------- the name ---------------------------------------------------- */

  /** Splits the h1 into per-character spans so the weight axis can roll
   *  through it. Words stay whole: inline-blocks are breakable at every
   *  boundary, so without a word wrapper "Bitvinskas" splits across lines on
   *  a narrow column. */
  function splitHeroName() {
    const heading = document.querySelector(".hero-section h1");
    if (!heading || heading.childElementCount) {
      return;
    }

    const name = heading.textContent.trim();
    if (!name) {
      return;
    }

    // One element per character would otherwise be spelled out letter by
    // letter; the label is what assistive technology reads instead.
    heading.setAttribute("aria-label", name);

    const fragment = document.createDocumentFragment();
    let index = 0;

    name.split(" ").forEach((word, wordIndex, words) => {
      const wordNode = document.createElement("span");
      wordNode.className = "hero-word";

      for (const character of word) {
        const charNode = document.createElement("span");
        charNode.className = "hero-char";
        charNode.setAttribute("aria-hidden", "true");
        charNode.style.setProperty("--i", index);
        charNode.textContent = character;
        wordNode.appendChild(charNode);
        index += 1;
      }

      fragment.appendChild(wordNode);
      if (wordIndex < words.length - 1) {
        fragment.appendChild(document.createTextNode(" "));
        index += 1;
      }
    });

    heading.replaceChildren(fragment);
  }

  /* ---------- the rail shader --------------------------------------------- */

  const VERTEX_SOURCE = `
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  /* Domain-warped value noise. Two fbm samples steer a third, which is what
     gives the flow its folded, liquid structure rather than clouds.

     The final min() is the contrast guarantee: no pixel this shader can
     produce is brighter than rgb(54, 71, 133), which holds `--sidebar-muted`
     — the lightest ink on this surface — at 5.4:1. The green channel is
     capped hardest because luminance is 71% green: the same headroom bought
     out of blue would cost most of the colour. The rail's lightest-frame
     rule is enforced here by construction, not by eye. */
  const FRAGMENT_SOURCE = `
    precision mediump float;

    uniform vec2 u_resolution;
    uniform float u_time;
    uniform vec2 u_pointer;
    uniform float u_pulse;
    uniform float u_scroll;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
        u.y
      );
    }

    float fbm(vec2 p) {
      float total = 0.0;
      float amplitude = 0.5;
      for (int i = 0; i < 4; i++) {
        total += amplitude * noise(p);
        p *= 2.03;
        amplitude *= 0.5;
      }
      return total;
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution;
      vec2 p = vec2(uv.x, uv.y * (u_resolution.y / max(u_resolution.x, 1.0))) * 3.0;
      float t = u_time * 0.045;

      float distanceToPointer = distance(uv, u_pointer);
      float ripple = exp(-distanceToPointer * 4.0) * (0.28 + u_pulse);
      p += (uv - u_pointer) * ripple * 1.1;

      vec2 warp = vec2(fbm(p + t), fbm(p + vec2(4.7, 1.3) - t));
      float flow = fbm(p + 3.2 * warp);

      vec3 deep = vec3(0.106, 0.145, 0.243);
      vec3 mid = vec3(0.145, 0.204, 0.345);
      vec3 high = vec3(0.196, 0.298, 0.502);

      vec3 colour = mix(deep, mid, clamp(flow * 1.7, 0.0, 1.0));
      colour = mix(colour, high, clamp(pow(warp.x, 1.6) * 1.5, 0.0, 1.0));
      colour += high * ripple * 0.35;

      // Light at the head, deep at the foot, as the flat gradient it replaces
      // was. gl_FragCoord.y is zero at the bottom.
      colour *= mix(0.78, 1.1, uv.y);

      // Descending the page takes the rail down with it. The flat gradient
      // this replaced did that for free, because it spanned the whole column
      // and the viewport slid down it; a canvas pinned to the viewport paints
      // the same frame at every scroll position unless it is told otherwise.
      // Darkening only ever raises contrast, so the clamp above still holds.
      colour *= mix(1.0, 0.6, u_scroll);

      colour = min(colour, vec3(0.21, 0.28, 0.52));
      gl_FragColor = vec4(colour, 1.0);
    }
  `;

  function compile(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  /** Returns null whenever WebGL is unavailable, refused, or fails to
   *  compile. The CSS aurora on `.page-sidebar::before` is already painted
   *  underneath, so a null here is a complete surface, not a blank one. */
  function createRail() {
    const canvas = document.getElementById("railCanvas");
    const rail = document.querySelector(".page-sidebar");
    if (!canvas || !rail) {
      return null;
    }

    const options = {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
    };
    const gl = canvas.getContext("webgl2", options) || canvas.getContext("webgl", options);
    if (!gl) {
      return null;
    }

    const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX_SOURCE);
    const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT_SOURCE);
    if (!vertex || !fragment) {
      return null;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      return null;
    }
    gl.useProgram(program);

    // One oversized triangle covers the viewport with three vertices instead
    // of a quad's six, and without a seam down the diagonal.
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uniforms = {
      resolution: gl.getUniformLocation(program, "u_resolution"),
      time: gl.getUniformLocation(program, "u_time"),
      pointer: gl.getUniformLocation(program, "u_pointer"),
      pulse: gl.getUniformLocation(program, "u_pulse"),
      scroll: gl.getUniformLocation(program, "u_scroll"),
    };

    let width = 0;
    let height = 0;
    let onScreen = true;
    let lost = false;
    let lastDraw = 0;
    let pulse = 0;
    let scrollMax = 1;
    const pointer = { x: 0.5, y: 0.6 };

    // A rail this size gains nothing from a 3x buffer, and the cost is
    // quadratic in the device ratio.
    const ratio = Math.min(window.devicePixelRatio || 1, 1.25);

    // A backstop on very large viewports. The shader is a soft noise field,
    // so resampling it costs nothing visible where fill rate is real.
    const PIXEL_BUDGET = 640000;

    function resize() {
      // The canvas box, not the rail's: the canvas is sticky and viewport
      // tall, while the rail is the whole column.
      const box = canvas.getBoundingClientRect();
      if (box.width < 2 || box.height < 2) {
        return;
      }

      const scale = Math.min(ratio, Math.sqrt(PIXEL_BUDGET / (box.width * box.height)));
      const nextWidth = Math.max(1, Math.round(box.width * scale));
      const nextHeight = Math.max(1, Math.round(box.height * scale));
      if (nextWidth === width && nextHeight === height) {
        return;
      }
      width = nextWidth;
      height = nextHeight;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      gl.uniform2f(uniforms.resolution, width, height);
    }

    canvas.addEventListener("webglcontextlost", (event) => {
      // Without preventDefault the context can never be restored; dropping
      // `.is-live` uncovers the CSS aurora in the meantime.
      event.preventDefault();
      lost = true;
      canvas.classList.remove("is-live");
    });

    canvas.addEventListener("webglcontextrestored", () => {
      lost = false;
    });

    function remeasureScroll() {
      scrollMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    }

    new ResizeObserver(() => {
      resize();
      remeasureScroll();
    }).observe(canvas);
    new IntersectionObserver((entries) => {
      onScreen = entries[0].isIntersecting;
    }).observe(rail);

    return {
      // The rail is empty until lang.js renders into it, so its size only
      // means anything from the first render onward. ResizeObserver carries
      // it from there.
      measure() {
        resize();
        remeasureScroll();
      },
      /** Pointer position in canvas-local space. GL's origin is bottom-left,
       *  so y is flipped on the way in. */
      track(clientX, clientY) {
        const box = canvas.getBoundingClientRect();
        pointer.x = (clientX - box.left) / Math.max(box.width, 1);
        pointer.y = 1 - (clientY - box.top) / Math.max(box.height, 1);
      },
      pulse() {
        pulse = 1;
      },
      draw(now) {
        if (lost || !onScreen || width === 0) {
          return;
        }
        // 30fps. The flow drifts slowly enough that the halved rate is not
        // visible, and it halves the fill cost on integrated graphics.
        if (now - lastDraw < 32) {
          return;
        }
        lastDraw = now;
        pulse *= 0.94;
        gl.uniform1f(uniforms.time, now / 1000);
        gl.uniform1f(uniforms.pulse, pulse);
        // scrollY is a cheap read; scrollHeight is not, so it stays cached.
        gl.uniform1f(uniforms.scroll, Math.min(1, window.scrollY / scrollMax));
        gl.uniform2f(uniforms.pointer, pointer.x, pointer.y);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        if (!canvas.classList.contains("is-live")) {
          canvas.classList.add("is-live");
        }
      },
    };
  }

  /* ---------- the pointer field ------------------------------------------- */

  /* Attraction is positive, repulsion negative. The skill tags push apart
     because they are a field of small parallel objects: pulling them
     together would collapse the gaps that make them scannable. */
  const MAGNET_GROUPS = [
    { selector: ".contact-link", radius: 96, pull: 9 },
    /* Weakest of the four, and deliberately. The two options sit side by side
       in one ~90px pill, so any radius wide enough to reach one reaches both,
       and each slides toward the pointer independently — the pair visibly
       swims against itself while the cursor crosses. Contact links are a
       column of isolated targets and take the full pull; these do not. */
    { selector: ".lang-option", radius: 54, pull: 3 },
    { selector: ".profile-image-btn", radius: 130, pull: 13 },
    { selector: ".skill-tag", radius: 108, pull: -13 },
  ];

  const TILT_SELECTOR = ".compact-project-card, .research-card";

  /* A tilt is specified as the distance its far edge travels, not as an angle.
     One angle applied to every card is a bug disguised as a constant: at 12deg
     a 236px project card swings 25px, while the 736px research panel swings
     78px — and the panel is the one surface carrying prose to read. Deriving
     the angle from the element's own size holds the movement constant instead,
     and keeps holding it at every breakpoint. */
  const TILT_EDGE = 14;
  const TILT_CEILING = 11;

  function createPointer(rail) {
    if (!finePointer) {
      return null;
    }

    const halo = document.getElementById("cursorHalo");
    const stage = document.querySelector(".page-main");
    const sidebar = document.querySelector(".page-sidebar");

    let x = -9999;
    let y = -9999;
    let active = false;
    let stale = true;

    let magnets = [];
    let tilts = [];
    let stageBox = null;
    let sidebarBox = null;

    /** Rects are viewport-relative, so they go stale on scroll as well as on
     *  resize and on every re-render. Every read happens here, in one batch,
     *  before any style is written — otherwise each write would invalidate
     *  layout for the next read. */
    function measure() {
      magnets = [];
      for (const group of MAGNET_GROUPS) {
        for (const element of document.querySelectorAll(group.selector)) {
          const box = element.getBoundingClientRect();
          if (box.width === 0) {
            continue;
          }
          magnets.push({
            element,
            radius: group.radius,
            pull: group.pull,
            centreX: box.left + box.width / 2,
            centreY: box.top + box.height / 2,
            offsetX: 0,
            offsetY: 0,
          });
        }
      }

      tilts = [];
      for (const element of document.querySelectorAll(TILT_SELECTOR)) {
        const box = element.getBoundingClientRect();
        if (box.width === 0) {
          continue;
        }
        // The longer half-dimension governs the worst-case displacement.
        const half = Math.max(box.width, box.height) / 2;
        const limit = Math.min(
          TILT_CEILING,
          (Math.asin(Math.min(1, TILT_EDGE / half)) * 180) / Math.PI,
        );
        tilts.push({ element, box, limit, tilting: false });
      }

      stageBox = stage ? stage.getBoundingClientRect() : null;
      sidebarBox = sidebar ? sidebar.getBoundingClientRect() : null;
      stale = false;
    }

    window.addEventListener("pointermove", (event) => {
      if (event.pointerType !== "mouse") {
        return;
      }
      x = event.clientX;
      y = event.clientY;
      if (!active) {
        active = true;
        halo?.classList.add("is-live");
        stage?.classList.add("is-lit");
      }
    }, { passive: true });

    window.addEventListener("pointerleave", () => {
      active = false;
      halo?.classList.remove("is-live");
      stage?.classList.remove("is-lit");
    });

    window.addEventListener("scroll", () => { stale = true; }, { passive: true });
    window.addEventListener("resize", () => { stale = true; });

    return {
      refresh() {
        stale = true;
      },
      update() {
        if (!active) {
          return;
        }
        if (stale) {
          measure();
        }

        if (halo) {
          halo.style.translate = `${x}px ${y}px`;
          // The halo hands the rail back to the shader; see the note on
          // `.on-rail` in the stylesheet.
          const overRail =
            sidebarBox &&
            x >= sidebarBox.left && x <= sidebarBox.right &&
            y >= sidebarBox.top && y <= sidebarBox.bottom;
          halo.classList.toggle("on-rail", Boolean(overRail));
        }

        if (stage && stageBox) {
          stage.style.setProperty("--px", `${x - stageBox.left}px`);
          stage.style.setProperty("--py", `${y - stageBox.top}px`);
        }

        if (rail) {
          rail.track(x, y);
        }

        for (const magnet of magnets) {
          const dx = x - magnet.centreX;
          const dy = y - magnet.centreY;
          const distance = Math.hypot(dx, dy);
          let targetX = 0;
          let targetY = 0;

          if (distance < magnet.radius) {
            const falloff = (1 - distance / magnet.radius) * magnet.pull;
            const safe = Math.max(distance, 1);
            targetX = (dx / safe) * falloff;
            targetY = (dy / safe) * falloff;
          }

          // Sub-pixel churn would restyle every element on every frame for
          // nothing.
          if (Math.abs(targetX - magnet.offsetX) > 0.15 || Math.abs(targetY - magnet.offsetY) > 0.15) {
            magnet.offsetX = targetX;
            magnet.offsetY = targetY;
            magnet.element.style.setProperty("--push-x", `${targetX.toFixed(1)}px`);
            magnet.element.style.setProperty("--push-y", `${targetY.toFixed(1)}px`);
          }
        }

        for (const tilt of tilts) {
          const box = tilt.box;
          const inside = x >= box.left && x <= box.right && y >= box.top && y <= box.bottom;

          if (inside) {
            const nx = (x - box.left) / box.width - 0.5;
            const ny = (y - box.top) / box.height - 0.5;
            tilt.element.style.setProperty("--tilt-y", `${(nx * tilt.limit).toFixed(2)}deg`);
            tilt.element.style.setProperty("--tilt-x", `${(-ny * tilt.limit).toFixed(2)}deg`);
            tilt.element.style.setProperty("--sheen-x", `${((nx + 0.5) * 100).toFixed(1)}%`);
            tilt.element.style.setProperty("--sheen-y", `${((ny + 0.5) * 100).toFixed(1)}%`);
            if (!tilt.tilting) {
              tilt.tilting = true;
              tilt.element.classList.add("is-tilting");
            }
          } else if (tilt.tilting) {
            tilt.tilting = false;
            tilt.element.classList.remove("is-tilting");
            tilt.element.style.removeProperty("--tilt-x");
            tilt.element.style.removeProperty("--tilt-y");
          }
        }
      },
    };
  }

  /* ---------- the evidence counters --------------------------------------- */

  /* A digit run, allowing separators only between digits, so "5–10 min."
     yields 5 and 10 while "2 200" and "6,3" stay whole. */
  const NUMBER_PATTERN = /\d+(?:[.,  ]\d+)*/g;
  const COUNT_DURATION = 2287;

  /** Reads the separator convention out of the string itself. The page is
   *  bilingual and renders "6,3" in Lithuanian against "6.3" in English, so
   *  taking the convention from the runtime locale would eventually print
   *  one language's number in the other's format. */
  function describeNumber(text) {
    const parts = text.split(/[.,  ]/);
    const separators = text.match(/[.,  ]/g) || [];
    const tail = parts[parts.length - 1];

    // A single separator with one or two digits after it is a decimal point.
    // Three digits after it is a thousands group.
    const isDecimal = separators.length === 1 && tail.length <= 2;

    const decimals = isDecimal ? tail.length : 0;
    const groupSeparator = isDecimal ? "" : separators[0] || "";
    const decimalSeparator = isDecimal ? separators[0] : "";
    const digits = isDecimal ? parts.slice(0, -1).join("") : parts.join("");

    return {
      value: Number(`${digits}.${isDecimal ? tail : "0"}`),
      integerDigits: digits.length,
      decimals,
      groupSeparator,
      decimalSeparator,
    };
  }

  /** Pads to the target's digit count so the string never changes width
   *  mid-count. Combined with `font-variant-numeric: tabular-nums` on
   *  `.metric-highlight`, a number counting up inside a sentence cannot
   *  reflow the prose around it. */
  function formatNumber(value, spec) {
    const fixed = value.toFixed(spec.decimals);
    const [whole, fraction] = fixed.split(".");
    let integer = whole.padStart(spec.integerDigits, "0");
    if (spec.groupSeparator) {
      integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, spec.groupSeparator);
    }
    return fraction ? integer + spec.decimalSeparator + fraction : integer;
  }

  /* Every counter runs for the same COUNT_DURATION, but how long one appears
     to move is set by how many values it can display: `2 200` passes through
     thousands, `1` through two. On a single shared curve the small ones are
     finished while the large ones are still climbing.

     So the curve is per counter. Each gets the ease-out exponent that lands
     its LAST visible change near the same fraction of the duration —
     `1 - (1 - t)^k` reaches the final displayed value when it passes
     `(states - 0.5) / states`, which solves for k directly.

     Clamped to [1, 5]: below 1 the curve becomes an ease-IN, which would make
     a number sit on a wrong value and then lurch. A one-step counter is
     therefore still the earliest to settle — at half the duration rather than
     an eighth — and that is arithmetic, not a tuning choice. */
  const COUNT_SETTLE_FRACTION = 0.8;

  function countExponent(spec) {
    const states = Math.max(1, Math.round(spec.value * Math.pow(10, spec.decimals)));
    const k = Math.log(0.5 / states) / Math.log(1 - COUNT_SETTLE_FRACTION);
    return Math.min(5, Math.max(1, k));
  }

  function createCounters() {
    const running = [];

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }
        observer.unobserve(entry.target);
        const spec = describeNumber(entry.target.dataset.count || "");
        if (!Number.isFinite(spec.value)) {
          continue;
        }
        running.push({ element: entry.target, spec, start: -1, exponent: countExponent(spec) });
      }
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.2 });

    return {
      /** Splits each metric's digit runs into their own spans. Runs after
       *  every render, because the prose is rebuilt on a language change. */
      refresh() {
        running.length = 0;
        for (const host of document.querySelectorAll(".metric-highlight")) {
          const text = host.textContent;
          if (!text || !text.match(NUMBER_PATTERN)) {
            continue;
          }

          const fragment = document.createDocumentFragment();
          let cursor = 0;
          NUMBER_PATTERN.lastIndex = 0;
          let match;

          while ((match = NUMBER_PATTERN.exec(text)) !== null) {
            if (match.index > cursor) {
              fragment.appendChild(document.createTextNode(text.slice(cursor, match.index)));
            }
            const span = document.createElement("span");
            span.dataset.count = match[0];
            span.textContent = match[0];
            fragment.appendChild(span);
            cursor = match.index + match[0].length;
          }

          if (cursor < text.length) {
            fragment.appendChild(document.createTextNode(text.slice(cursor)));
          }

          host.replaceChildren(fragment);
          for (const span of host.children) {
            observer.observe(span);
          }
        }
      },
      update(now) {
        if (now < quietUntil) {
          return;
        }

        for (let i = running.length - 1; i >= 0; i -= 1) {
          const counter = running[i];
          if (counter.start < 0) {
            counter.start = now;
          }

          const progress = Math.min(1, (now - counter.start) / COUNT_DURATION);
          // Ease-out, exponent chosen per counter — see `countExponent`. Every
          // frame shows a real interpolated value; nothing is ever invented.
          const eased = 1 - Math.pow(1 - progress, counter.exponent);
          counter.element.textContent = formatNumber(counter.spec.value * eased, counter.spec);

          if (progress === 1) {
            // The authored string is restored verbatim rather than
            // reformatted, so no rounding can alter a published figure.
            counter.element.textContent = counter.element.dataset.count;
            running.splice(i, 1);
          }
        }
      },
    };
  }

  /* ---------- the reveals --------------------------------------------------- */

  /* These were scroll-driven `view()` timelines. They are not any more, and the
     reason is structural rather than a tuning problem: a view timeline takes
     its progress from scroll position, so anything sitting in the document's
     LAST viewport can never finish — there is no scroll left to drive it. The
     final row of project cards held partway through its reveal and stayed
     dimmed and blurred for good. An observer fires once and the animation runs
     on the clock, which also gives Firefox the reveals it had no timeline for. */

  /* While a language change is resolving, nothing else on the page starts.
     The counters are the main thing this holds back: numbers ticking up
     underneath text that is still gibberish is two effects competing for the
     same glance. Zero outside a language change, so the boot is unaffected. */
  let quietUntil = 0;

  const REVEAL_SELECTOR = [
    "#about-content",
    ".skill-item",
    ".experience-card",
    ".project-list li",
    ".research-card",
    ".compact-project-card",
    ".section-heading",
    ".metric-highlight",
  ].join(",");

  /* The observer fires BEFORE the element reaches the viewport — that is what
     `rootMargin`'s positive bottom edge buys. It matters for more than timing:
     nothing is ever hidden waiting for a callback. An element carries no class
     until the observer reaches it, and no class means the finished state, so a
     dead observer degrades to "no animation" rather than to a blank CV. The
     animation's own `backwards` fill supplies the hidden start, and it does so
     while the element is still off screen, so there is no flash to cover. */
  const REVEAL_LEAD = "0px 0px 140px 0px";

  function createReveals() {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }
        observer.unobserve(entry.target);
        entry.target.classList.add("reveal-run");
      }
    }, { rootMargin: REVEAL_LEAD });

    return {
      refresh(initial) {
        const fold = window.innerHeight;
        for (const element of document.querySelectorAll(REVEAL_SELECTOR)) {
          element.classList.remove("reveal-run", "on-boot");

          if (element.getBoundingClientRect().top < fold) {
            // Already on screen. On the first render it arrives with the boot,
            // held back to the stage's phase by `.on-boot`; on a language
            // switch it stays put, because taking something the visitor is
            // looking at and playing it back in is a blink, not an entrance.
            if (initial) {
              element.classList.add("reveal-run", "on-boot");
            }
            continue;
          }

          observer.observe(element);
        }
      },
    };
  }

  /* ---------- the decode ---------------------------------------------------- */

  /* An element either RE-ARRIVES or it DECODES, never both. The rail's blocks
     replay their entrance on a language change, which means anything inside
     them would decode behind `opacity: 0` — invisible work, and the reason the
     rail read as inconsistent with itself. So the rail is absent from this list
     and the reading stage fills it, because the stage does not re-arrive.

     Section headings stay: they are not inside a re-arriving block.

     The viewport filter is what keeps this affordable — nothing off screen is
     ever touched. */
  const DECODE_SELECTOR = [
    ".section-heading h2",
    ".hero-role",
    ".hero-specialization",
    ".card-role-title",
    ".company-badge",
    ".card-date-badge",
    ".card-meta-detail",
    ".project-title",
    ".skill-label",
    ".skill-tag",
    ".project-tag",
    // Prose. Metric spans inside these are excluded — see `decodableNodes`.
    "#about-content",
    ".project-desc",
    ".project-list li",
  ].join(",");

  const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZĄČĘĖĮŠŲŪŽ0123456789#%*/<>";
  const DECODE_MAX_CHARS = 320;
  const DECODE_DURATION = 900;
  const KEEP = new Set([" ", "·", "-", "—", "–", ",", "."]);

  /* If the transition never settles, the decode starts anyway after this long.
     Text left scrambled is unreadable content on a CV, so the resolve is not
     allowed to depend on a promise arriving. */
  const DECODE_FALLBACK = 1400;

  function scrambled(final, progress) {
    const settled = Math.floor(final.length * progress * 1.3);
    let output = "";
    for (let c = 0; c < final.length; c += 1) {
      const character = final[c];
      output += c < settled || KEEP.has(character)
        ? character
        : GLYPHS[(Math.random() * GLYPHS.length) | 0];
    }
    return output;
  }

  /** Jobs target text NODES, not elements, so a paragraph carrying inline
   *  `<strong>` decodes without its markup being rebuilt. Metric spans are
   *  rejected: they are already being written every frame by the counters,
   *  and two writers on one text node fight. */
  function decodableNodes(element) {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) =>
        node.parentElement?.closest(".metric-highlight")
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT,
    });

    const nodes = [];
    let node;
    while ((node = walker.nextNode())) {
      const value = node.nodeValue;
      if (value.trim() && value.length <= DECODE_MAX_CHARS) {
        nodes.push(node);
      }
    }
    return nodes;
  }

  function createScrambler() {
    let jobs = [];
    let startAt = Infinity;
    let lastDelay = 0;

    return {
      /** Called inside the view transition's own callback, before the browser
       *  captures the new state. That ordering is the whole point: the
       *  transition then cross-fades the old language into GLYPHS, and the
       *  decode is what reveals the new one. Priming after the transition
       *  meant the visitor read the answer first and then watched it scramble
       *  and re-spell itself. */
      prime() {
        jobs = [];
        // Per-prime, like `jobs`. Left to accumulate it only ever grew toward
        // the 460ms cap, holding the counters quiet after a switch that never
        // needed the wait.
        lastDelay = 0;
        const viewportHeight = window.innerHeight;

        for (const element of document.querySelectorAll(DECODE_SELECTOR)) {
          const box = element.getBoundingClientRect();
          if (box.bottom < -100 || box.top > viewportHeight + 200) {
            continue;
          }
          // The wave runs down the page, so the delay comes from where the
          // element actually sits rather than from its position in the DOM.
          const delay = Math.max(0, Math.min(460, (box.top / viewportHeight) * 430));

          for (const node of decodableNodes(element)) {
            const final = node.nodeValue;
            jobs.push({ node, final, delay });
            node.nodeValue = scrambled(final, 0);
            lastDelay = Math.max(lastDelay, delay);
          }
        }

        startAt = performance.now() + DECODE_FALLBACK;
        quietUntil = startAt + lastDelay + DECODE_DURATION;
      },
      /** The transition has settled and the live DOM is on screen again. */
      release() {
        if (jobs.length) {
          startAt = performance.now();
          quietUntil = startAt + lastDelay + DECODE_DURATION;
        }
      },
      update(now) {
        if (!jobs.length || now < startAt) {
          return;
        }

        for (let i = jobs.length - 1; i >= 0; i -= 1) {
          const job = jobs[i];
          if (now < startAt + job.delay) {
            continue;
          }

          const progress = (now - startAt - job.delay) / DECODE_DURATION;
          if (progress >= 1) {
            job.node.nodeValue = job.final;
            jobs.splice(i, 1);
            continue;
          }

          job.node.nodeValue = scrambled(job.final, progress);
        }
      },
    };
  }

  /* `updateContent` rebuilds the education and language blocks, so their
     entrance animation restarts by itself on the fresh elements. The contact
     rows are static markup in index.html and are never rebuilt, which left
     them the one part of the rail that did not re-arrive. Restarting their
     animation by hand puts them back in step — same keyframes, same delays,
     same moment, because this runs in the render that creates the others. */
  function replayContactRows() {
    const rows = [...document.querySelectorAll("#contacts-section li")];
    if (!rows.length) {
      return;
    }
    rows.forEach((row) => { row.style.animation = "none"; });
    void document.body.offsetWidth;  // one reflow for the batch, not one each
    rows.forEach((row) => { row.style.removeProperty("animation"); });
  }

  /* ---------- wiring ------------------------------------------------------- */

  splitHeroName();

  const rail = createRail();
  const pointer = createPointer(rail);
  const counters = createCounters();
  const reveals = createReveals();
  const scrambler = createScrambler();

  // Fired inside the render, when the DOM has just been rebuilt: every
  // cached rect and every counter span now refers to elements that no longer
  // exist.
  document.addEventListener("cv:render", (event) => {
    const initial = Boolean(event.detail?.initial);

    counters.refresh();
    reveals.refresh(initial);
    pointer?.refresh();
    rail?.measure();

    // The evidence is the last thing to arrive, on the first paint as much as
    // on a language change. Numbers ticking up beside a name that has not
    // finished assembling reads as two pages loading at once.
    if (initial) {
      // Read from the stylesheet so the timeline keeps one home; a copy here
      // would drift the first time either is retuned. ponytail: assumes ms,
      // as every --boot-* token is authored. Authoring one in seconds would
      // need a unit check here.
      const delay = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--boot-numbers"),
      );
      quietUntil = performance.now() + (Number.isFinite(delay) ? delay : 3700);
    }
    // Synchronous, inside the transition callback: the scrambled text has to
    // be in the DOM before the browser captures the new state.
    if (!event.detail?.initial) {
      scrambler.prime();
      replayContactRows();
    }
  });

  // Fired once the view transition has settled. Scrambling any earlier would
  // put half-decoded text into the transition's own snapshot.
  document.addEventListener("cv:swapped", () => {
    scrambler.release();
    rail?.pulse();
  });

  // The next frame is scheduled BEFORE any work. Scheduling it last means a
  // single throw anywhere below kills the loop for good — and since the decode
  // resolves on this loop, that would strand the page in glyphs. Losing one
  // frame's work is recoverable; losing the loop is not.
  function frame(now) {
    requestAnimationFrame(frame);
    rail?.draw(now);
    pointer?.update();
    counters.update(now);
    scrambler.update(now);
  }

  requestAnimationFrame(frame);
})();
