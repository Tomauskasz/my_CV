/* ==========================================================================
   numbers.js — how a figure on this CV is read, counted and printed.

   Split out of motion.js because it is the one part of the live layer that
   is pure: no DOM, no GL, no clock. That makes it the only part with an
   invariant worth asserting rather than watching — every frame of a count
   shows a value the figure actually holds, and the printed string never
   changes width. `test/numbers.test.mjs` runs those assertions in Node.

   Loaded as a plain script before motion.js, which is the page's only
   consumer.
   ========================================================================== */

(() => {
  "use strict";

  /* A digit run, allowing separators only between digits, so "5–10 min."
     yields 5 and 10 while "2 200" and "6,3" stay whole. */
  const NUMBER_PATTERN = /\d+(?:[.,  ]\d+)*/g;

  const COUNT_DURATION = 2287;

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

  function countExponent(spec) {
    const states = Math.max(1, Math.round(spec.value * Math.pow(10, spec.decimals)));
    const k = Math.log(0.5 / states) / Math.log(1 - COUNT_SETTLE_FRACTION);
    return Math.min(5, Math.max(1, k));
  }

  /** The displayed value at `progress` through a count. Pure: the same
   *  progress always prints the same string, and every string it can print is
   *  a value the figure passes through on the way to its own. */
  function frameValue(spec, exponent, progress) {
    const eased = 1 - Math.pow(1 - progress, exponent);
    return formatNumber(spec.value * eased, spec);
  }

  /* Exactly what motion.js consumes, and nothing widened for the test —
     `formatNumber` and `COUNT_SETTLE_FRACTION` stay private because the page
     reaches them only through `frameValue` and `countExponent`, so that is
     where the assertions have to reach them too. */
  const api = {
    NUMBER_PATTERN,
    COUNT_DURATION,
    describeNumber,
    countExponent,
    frameValue,
  };

  /* Frozen, so the one global this page adds is a table of constants rather
     than shared mutable state. `globalThis` rather than `window` because the
     test runs this same file, unmodified, in Node. */
  globalThis.CVNumbers = Object.freeze(api);
})();
