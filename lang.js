const translations = {
  LT: {
    role: "DIRBTINIO INTELEKTO INŽINIERIUS",
    specialization: "DI AUTOMATIZAVIMAS, LLM AGENTAI IR KOMPIUTERINĖ REGA",
    title:
      "DIRBTINIO INTELEKTO INŽINIERIUS | DI AUTOMATIZAVIMAS, LLM AGENTAI IR KOMPIUTERINĖ REGA",
    docTitle: "Tomas Bitvinskas — DI inžinierius",
    location: "Vilnius, Lietuva",
    aboutTitle: "Profilis",
    skillsTitle: "Techniniai įgūdžiai",
    projectsTitle: "Asmeniniai projektai",
    contactsTitle: "Kontaktai",
    educationTitle: "Išsilavinimas",
    languagesTitle: "Kalbos",
    experienceTitle: "Darbo patirtis",
    researchTitle: "Mokslinė veikla",
    about:
      "DI inžinierius, lėtus rankinius procesus paverčiantis praktiškais DI sprendimais. Copla produkto vidinio turinio kūrimą sutrumpinau nuo **1–2 dienų iki maždaug 5–10 min.**, sukūriau apie **6,3 tūkst. ekspertų sprendimų** pagrįstą kibernetinio saugumo įrodymų vertinimą ir Slack–Jira integracija automatizavau Copla produkto klaidų registravimą. NNCODE kūriau kompiuterinės regos ir robotikos sistemas; 3D namų spausdinimo stebėseną paspartinau maždaug **4 kartus – nuo 3–4 iki 15 kadrų/s**.",
    skills: [
      "Programavimas: Python, JavaScript/TypeScript, C++, SQL",
      "DI / mašininis mokymasis: PyTorch, OpenCV, Ultralytics, kompiuterinė rega, didieji kalbos modeliai (LLM), RAG, vektorinės reprezentacijos, vektorinė paieška, stiprinamasis mokymasis, TensorRT, ROS, Gazebo",
      "Automatizavimas / serverio pusė: n8n, OpenAI API, FastAPI, REST API, webhooks, PostgreSQL, MongoDB, Oracle, Docker, Git/GitHub, CI/CD, ArgoCD",
      "Programavimas su DI: Codex, Claude Code, MCP serveriai, SKILL.md / agentų instrukcijos, subagentų konfigūracijos, automatizuotas testavimas, kodo peržiūra, naršyklės automatizavimas",
      "Integracijos: Slack, Jira, Telegram, WhatsApp, Discord",
    ],
    eduLabels: {
      field: "Kryptis:",
      gpa: "Vidurkis:",
      thesis: "Baigiamasis:",
      start: "Pradžia:",
    },
    education: [
      {
        title: "Informatikos bakalauras",
        institution: "Vilnius TECH",
        date: "2022–2026 m.",
        field: "Dirbtinio intelekto sistemos",
        gpa: "9/10",
        thesis: "10/10",
      },
      {
        title: "DI inžinerijos magistrantūra",
        institution: "Vilnius TECH",
        date: "2026–2028 m.",
        status: "2026 m. rugsėjis",
      },
    ],
    languages: ["Lietuvių - gimtoji", "Anglų - laisvai"],
    experience: [
      {
        place: "COPLA",
        role: "Jaunesnysis DI automatizavimo specialistas",
        employment: "Visas etatas · Hibridinis darbas · Vilnius, Lietuva",
        date: "2026 m. gegužė – dabar",
        bullets: [
          "**Copla turinio kūrimą sutrumpinau nuo 1–2 dienų iki ~5–10 min.** Sukūriau Slack DI asistentą, kuris iš natūralios kalbos instrukcijų parengia kibernetinio saugumo užduočių eigas, leidžia jas taisyti pokalbiu ir eksportuoja į produktui tinkamą formatą.",
          "**DI įrodymų vertinimo sistemą** sukūriau remdamasis apie **6,3 tūkst. ekspertų įvertintų atvejų**. Ji randa panašius sprendimus, cituoja pagrindžiančias ištraukas ir neaiškius atvejus perduoda žmogui.",
          "**Automatizavau Slack–Jira klaidų registravimą.** Sistema surenka informaciją ir priedus, suformuoja ataskaitą, sinchronizuoja Jira būseną su Slack, informuoja pranešėją ir skelbia savaitines suvestines.",
          "Apdorojau apie **2 200 debesijos įrašų iš 14 AWS paskyrų**. Pritaikiau DI duomenų importą taip, kad juos konsoliduotų į apie **500 tinkamų įrašų** ir sėkmingai importuotų į vidinį Copla produktą.",
          "**Pagerinau DI procesų patikimumą ir sąnaudų matomumą.** Įdiegiau paketinį apdorojimą ir klientų naudojimo apskaitą, stebėjau gedimus, juos taisiau ir kūriau naujus DI agentus.",
          "**Padėjau komandai pritaikyti naujas DI priemones.** Reguliariai išbandžiau naujus įrankius ir darbo būdus, vertingiausius standartizavau ir mokiau jais naudotis kolegas.",
        ],
      },
      {
        place: "NNCODE",
        role: "DI inžinierius",
        employment: "Visas etatas · Hibridinis darbas",
        date: "2025 m. balandis – rugsėjis",
        bullets: [
          "**Sukūriau veikiantį autonominio šakinio krautuvo prototipą simuliacijoje.** Naudodamas Python, ROS, Gazebo ir YOLO vaizdo analizę, jis savarankiškai aptikdavo padėklus, išsilygiuodavo, pakeldavo ir padėdavo juos į numatytą vietą.",
          "**Sukūriau robotinio 3D namo spausdinimo kokybės stebėseną.** Ji aptikdavo betoną, purkštuką ir defektus, matuodavo sluoksnio plotį, o apdorojimo spartą padidinau **nuo 3–4 iki maždaug 15 kadrų/s (4×)**.",
          "**Sukūriau kompiuterinės regos saugos stebėseną geležinkelio pervažoms.** YOLO modelis su objektų sekimu stebėjo pavojaus ir pervažos zonas, atpažino užkardų ir šviesoforo būseną, fiksavo atvejus, kai pervaža kertama nuleidus užkardas, ir kiekvieną pažeidimą įrašė nurodydamas vaizdo įrašo laiko žymą.",
          "**Kompiuterinės regos modelių diegimas ir optimizavimas.** Mokiau modelius, žymėjau duomenis, bandžiau architektūras ir optimizavau realiojo laiko veikimą su **TensorRT, FP16/INT8**, paketiniu apdorojimu ir modelio dydžio parinkimu pagal GPU galimybes.",
          "**Kūriau dokumentų vertimo ir inžinerinių brėžinių analizės procesus.** DI naudojau pilniems dokumentams versti ir ryšiams tarp techninių brėžinių komponentų nustatyti.",
        ],
      },
    ],
    research: [
      {
        title: "Autonominio vairavimo agentas",
        context: "Bakalauro baigiamasis darbas, VILNIUS TECH",
        date: "2026",
        bullets: [
          "Mokiau autonominio vairavimo agentą savo paties įrašytais važiavimais ir korekcijomis. Sukūriau **BeamNG.tech** mokymo ir vertinimo sistemą, išbandžiau elgsenos klonavimą, HG-DAgger, modelių ansamblius ir stiprinamojo mokymosi variantus.",
          "Galutinis **7 modelių ansamblis įveikė 98 iš 100 ratų**. **139,4s mediana** beveik prilygo mano maždaug 139s rekordui, o greičiausi **138s ratai** jį pagerino – DI įveikė savo mokytoją. Darbą pristačiau tarptautinėje „eStream 2026“ konferencijoje.",
        ],
      },
    ],
    projects: [
      {
        title: "Etsy kainodaros asistentas",
        description:
          "n8n darbo eiga kasdienei Etsy skelbimų kainų peržiūrai. Ji sujungia Google Sheets, Telegram ir OpenAI, o saugos taisyklės, DI vertinimas ir patvirtinimų žurnalas užtikrina, kad kiekvieną kainos pakeitimą patvirtintų žmogus.",
        tags: ["n8n", "Telegram", "OpenAI API", "Google Sheets"],
      },
      {
        title: "Visual Similarity Search",
        description:
          "Vaizdų paieškos sistema, pagal įkeltą vaizdą randanti panašius katalogo įrašus.",
        tags: ["CLIP/OpenCLIP", "FAISS", "FastAPI", "React", "Docker"],
      },
      {
        title: "CareerCopilot",
        description:
          "Kelių DI agentų darbo paieškos asistentas, lyginantis CV su darbo skelbimu ir pateikiantis spragas, tikslinius CV pakeitimus, motyvacinio laiško juodraštį ir pasiruošimą pokalbiui.",
        tags: ["LLM Agents", "RAG", "FastAPI", "Python"],
      },
      {
        title: "Studentų lankomumo sistema su veido atpažinimu",
        description:
          "Sistemos prototipas, kuriame studentas užregistruojamas pateikęs nuotrauką, o atvykęs pažymimas tada, kai jo veidas atpažįstamas pagal tą nuotrauką (DeepFace, VGG-Face). React sąsaja skirta įrašams peržiūrėti ir tvarkyti.",
        tags: ["DeepFace", "FastAPI", "React", "MongoDB", "Docker"],
      },
      {
        title: "Rekomendacijų sistema",
        description:
          "Filmų rekomendavimo sistema MovieLens 1M duomenų rinkiniui, lyginanti du metodus pagal kokybę, aprėptį, įvairovę ir naujumą.",
        tags: ["PyTorch", "Collaborative Filtering", "Python", "Evaluation"],
      },
      {
        title: "Naudotojų valdymo sistema",
        description:
          "Naudotojų katalogas, sukurtas nuo sąsajos iki duomenų bazės: įrašus galima kurti, peržiūrėti, redaguoti ir ištrinti. Serverio dalį sudaro asinchroninė FastAPI su MongoDB, o sąsają – React ir MUI su įvestų duomenų tikrinimu bei aiškiais klaidų pranešimais.",
        tags: ["React", "TypeScript", "FastAPI", "MongoDB"],
      },
    ],
  },
  EN: {
    role: "AI ENGINEER",
    specialization: "AI AUTOMATION, LLM AGENTS & COMPUTER VISION",
    title: "AI ENGINEER | AI AUTOMATION, LLM AGENTS & COMPUTER VISION",
    docTitle: "Tomas Bitvinskas — AI Engineer",
    location: "Vilnius, Lithuania",
    aboutTitle: "Profile",
    skillsTitle: "Technical Skills",
    projectsTitle: "Personal Projects",
    contactsTitle: "Contacts",
    educationTitle: "Education",
    languagesTitle: "Languages",
    experienceTitle: "Experience",
    researchTitle: "Research",
    about:
      "AI engineer who turns slow manual work into practical AI tools. At Copla, cut compliance-workflow creation from **1–2 days to just ~5–10 minutes**, built evidence review around **~6.3K expert decisions**, and automated Slack–Jira bug reporting. At NNCODE, built computer-vision and robotics systems, including a 3D printing monitor whose processing speed improved roughly **4×, from 3–4 FPS to ~15 FPS**.",
    skills: [
      "Programming: Python, JavaScript/TypeScript, C++, SQL",
      "AI / ML: PyTorch, OpenCV, Ultralytics, computer vision, LLMs, RAG, embeddings, vector search, reinforcement learning, TensorRT, ROS, Gazebo",
      "Automation / Backend: n8n, OpenAI API, FastAPI, REST APIs, webhooks, PostgreSQL, MongoDB, Oracle, Docker, Git/GitHub, CI/CD, ArgoCD",
      "AI-assisted Development: Codex, Claude Code, MCP servers, custom skills/instructions, custom sub-agents, automated testing, code review, browser automation, brainstorming, research",
      "Integrations: Slack, Jira, Telegram, WhatsApp, Discord",
    ],
    eduLabels: {
      field: "Field:",
      gpa: "GPA:",
      thesis: "Thesis:",
      start: "Start:",
    },
    education: [
      {
        title: "Bachelor's in Informatics",
        institution: "Vilnius TECH",
        date: "2022 – 2026",
        field: "Artificial Intelligence Systems",
        gpa: "9/10",
        thesis: "10/10",
      },
      {
        title: "Master's in AI Engineering",
        institution: "Vilnius TECH",
        date: "2026 – 2028",
        status: "September 2026",
      },
    ],
    languages: ["Lithuanian - Native", "English - Fluent"],
    experience: [
      {
        place: "COPLA",
        role: "Junior AI Automations Specialist",
        employment: "Full-time · Hybrid · Vilnius, Lithuania",
        date: "May 2026 – Present",
        bullets: [
          "**Cut compliance workflow creation from 1–2 days to ~5–10 minutes.** Built a Slack AI assistant that drafts workflows from plain language, supports conversational edits, and exports them into the product.",
          "**Built an AI evidence-review system around ~6.3K past expert-reviewed cases.** Compares new evidence with similar past specialist decisions, quotes supporting passages, and sends uncertain cases to human review.",
          "**Turned inconsistent bug reports into a guided Slack-to-Jira process.** The bot collects required details and media, creates a structured report, syncs Jira status to Slack, notifies reporters, and posts weekly summaries.",
          "Processed **~2,200 cloud assets from 14 AWS accounts.** Adapted the AI import flow to consolidate all the assets into just **~500 usable records** and import them successfully into the internal product.",
          "**Improved production reliability and AI cost visibility.** Added batching and per-client AI tokens usage tracking. Monitored production AI workflow failures, fixed issues, and built new AI agents on top.",
          "**Kept the team current with fast-moving AI development tooling.** Tested new agentic tools, adopted what improved the workflow, and shared reusable setups and hands-on guidance with teammates.",
        ],
      },
      {
        place: "NNCODE",
        role: "AI Engineer",
        employment: "Full-time · Hybrid",
        date: "Apr 2025 – Sep 2025",
        bullets: [
          "**Built an autonomous forklift prototype that worked end to end in simulation.** With Python, ROS, Gazebo, and YOLO-based perception, it found, aligned to, picked up, and placed pallets autonomously.",
          "**Built a camera-based quality monitor for robotic 3D house printing.** Detected print material, nozzle, and defects, measured bead width, and improved throughput from **3–4 FPS to ~15 FPS (4×)**.",
          "**Built a computer-vision safety monitor for railway level crossings.** A YOLO detector with multi-object tracking watched the danger and crossing zones, read gate and signal state, flagged crossings made while the gates were down, and logged every violation with video timestamps for review.",
          "**Computer vision models deployment & inference optimization.** Trained models and labeled data, tested architectures, and optimized real-time inference with **TensorRT, FP16/INT8**, batching, and GPU-aware model selection.",
          "**Built document translation and engineering-drawing analysis workflows.** Used AI for full document translation workflows as well as for extracting component relationships from complex engineering drawings.",
        ],
      },
    ],
    research: [
      {
        title: "Autonomous Driving Agent",
        context: "Bachelor's Thesis, Vilnius TECH",
        date: "2026",
        bullets: [
          "Trained an autonomous driving agent using my own driving laps and corrections as the teaching data. Built the **BeamNG.tech** training/evaluation pipeline and tested behavioral cloning, HG-DAgger, ensembles, and RL variants.",
          "The final **7-model ensemble completed 98/100 laps.** Its **139.4s median** nearly matched my ~139s personal best; fastest laps reached **~138s**, beating its human teacher. Presented at \"eStream 2026\".",
        ],
      },
    ],
    projects: [
      {
        title: "Etsy Pricing Assistant",
        description:
          "n8n pricing-review workflow joining Google Sheets, Telegram, and OpenAI for daily Etsy listing decisions. Safety rules, AI review, and approval logging keep every price change reviewable and human-approved.",
        tags: ["n8n", "Telegram", "OpenAI API", "Google Sheets"],
      },
      {
        title: "Visual Similarity Search",
        description:
          "Full-stack image search for visually similar catalog items based on uploaded reference images.",
        tags: ["CLIP/OpenCLIP", "FAISS", "FastAPI", "React", "Docker"],
      },
      {
        title: "CareerCopilot",
        description:
          "Multi-agent job-search assistant that compares CVs with job descriptions and returns fit gaps, tailored edits, cover letters, and interview prep.",
        tags: ["LLM Agents", "RAG", "FastAPI", "Python"],
      },
      {
        title: "Student Face Check-in System",
        description:
          "Attendance prototype that registers students with a photo and marks them present by verifying their face against it (DeepFace / VGG-Face), with a React interface for managing records.",
        tags: ["DeepFace", "FastAPI", "React", "MongoDB", "Docker"],
      },
      {
        title: "Recommendation System",
        description:
          "MovieLens 1M recommender system comparing two approaches across quality, coverage, diversity, and novelty.",
        tags: ["PyTorch", "Collaborative Filtering", "Python", "Evaluation"],
      },
      {
        title: "User Management System",
        description:
          "Full-stack user directory with complete CRUD: an async FastAPI and MongoDB backend behind a typed React/MUI frontend with form validation and error states.",
        tags: ["React", "TypeScript", "FastAPI", "MongoDB"],
      },
    ],
  },
};

const STORAGE_KEY = "cv-lang";
const THEME_KEY = "cv-theme";
const elements = {};

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** motion.js is optional. Nothing here waits on it, checks for it, or
 *  behaves differently when it is absent — these events go out either way. */
const emit = (name, detail) => document.dispatchEvent(new CustomEvent(name, { detail }));

/* ---------- theme ---------- */

/* The opening state is chosen by the inline script in <head>, because it has
   to be settled before the first paint. Everything from the first click on
   lives here. */

const currentTheme = () =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

function rememberTheme(theme) {
  try {
    window.localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Private mode or blocked storage: the switch still works for this visit.
  }
}

/** Swaps the palette under an expanding circle struck from the control that
 *  was pressed.
 *
 *  A cross-fade is the obvious move and the wrong one: a theme change moves
 *  every surface at once, so fading the whole document into the whole
 *  document is a dip through grey with no direction in it. A circle has an
 *  origin, and the origin is the button, which is what makes the change read
 *  as something the visitor did rather than something that happened to them.
 *
 *  The radius has to reach the furthest corner from that origin, and neither
 *  the origin nor the corner is knowable in CSS — which is why this one
 *  animation is scripted while its staging stays in the stylesheet. */
function setTheme(theme, origin) {
  const apply = () => {
    document.documentElement.dataset.theme = theme;
    elements.themeToggle?.setAttribute("aria-pressed", String(theme === "dark"));
  };

  rememberTheme(theme);

  // The rail's shader reads its own dimming from the stylesheet, so it is
  // told immediately rather than on settle: the flow should already be
  // travelling as the circle passes over it, not step down afterwards.
  const announce = () => emit("cv:theme", { theme });

  if (!document.startViewTransition || prefersReducedMotion() || document.hidden) {
    apply();
    announce();
    return;
  }

  document.documentElement.classList.add("is-theming");
  const transition = document.startViewTransition(apply);

  transition.ready
    .then(() => {
      const reach = Math.hypot(
        Math.max(origin.x, window.innerWidth - origin.x),
        Math.max(origin.y, window.innerHeight - origin.y),
      );
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${origin.x}px ${origin.y}px)`,
            `circle(${reach}px at ${origin.x}px ${origin.y}px)`,
          ],
        },
        {
          duration: 620,
          // Matches `--ease-arrive`. The wipe is an arrival like any other:
          // most of the distance immediately, then a long settle.
          easing: "cubic-bezier(0.06, 0.94, 0.13, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
      announce();
    })
    .catch(() => {
      // Superseded by a second click, or the tab went hidden mid-flight. The
      // palette has still swapped, so there is nothing to recover — but the
      // rail has not been told yet, and an uncaught rejection is a console
      // error on a page whose baseline is zero.
      announce();
    });

  const settle = () => document.documentElement.classList.remove("is-theming");
  transition.finished.then(settle, settle);
}

/* ---------- language ---------- */

/** URL param wins (so an English link can be shared), then the last explicit
 *  choice, then the browser's own locale. Landing every visitor in Lithuanian
 *  regardless of locale was the largest drop-off on the page. */
function initialLanguage() {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl && translations[fromUrl.toUpperCase()]) {
    return fromUrl.toUpperCase();
  }

  let stored = null;
  try {
    stored = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    // Private mode or blocked storage: fall through to locale detection.
  }
  if (stored && translations[stored]) {
    return stored;
  }

  return navigator.language?.toLowerCase().startsWith("lt") ? "LT" : "EN";
}

function rememberLanguage(language) {
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Non-fatal: the URL param and the visible switch still work.
  }

  const url = new URL(window.location.href);
  url.searchParams.set("lang", language.toLowerCase());
  window.history.replaceState(null, "", url);
}

/** `initial` is the first paint, `persist` is whether to remember the choice.
 *  They coincide at the only two call sites today, but they are not the same
 *  question — motion.js holds the whole boot on `initial` — so neither is
 *  derived from the other. */
function setLanguage(language, { persist = true, initial = false } = {}) {
  const content = translations[language];
  if (!content) {
    return;
  }

  if (persist) {
    rememberLanguage(language);
  }

  const apply = () => {
    document.documentElement.lang = language === "LT" ? "lt" : "en";
    document.title = content.docTitle;

    document.querySelectorAll(".lang-option").forEach((option) => {
      option.setAttribute("aria-pressed", String(option.dataset.lang === language));
    });

    // The sliding fill follows this attribute. `aria-pressed` above remains
    // the state of record; this is only what the eye tracks.
    document.getElementById("langSwitch")?.setAttribute("data-active", language);

    updateContent(content);

    // The stage has just been rebuilt, so every rect and counter the motion
    // layer cached now points at an element that no longer exists.
    emit("cv:render", { language, initial });
  };

  // The swap is the only real state change on this page. A view transition is
  // what makes it read as the document translating rather than teleporting;
  // without support the callback simply runs, which is today's behaviour.
  // The first render is excluded: it has nothing to transition from, it must
  // stay synchronous, and there is no prior state to cross-fade from.
  if (persist && document.startViewTransition && !prefersReducedMotion() && !document.hidden) {
    // A transition that is skipped or superseded — a fast double-click on the
    // switch, or a tab hidden mid-flight — rejects `ready`. The DOM update
    // still runs, so there is nothing to recover from; it just must not be
    // left unhandled, because that surfaces as a console error.
    // The nine region names exist only under this class, so only the language
    // swap gets the staggered wave. Without it the photo morph inherited the
    // same nine snapshots and their delays.
    document.documentElement.classList.add("is-translating");

    const transition = document.startViewTransition(apply);
    transition.ready.catch(() => {});
    // Both arms, deliberately. The scrambled text is already in the DOM by
    // this point — it was written inside `apply` so the transition could
    // capture it — so a rejected `finished` that skipped this would leave the
    // page in glyphs with nothing scheduled to resolve them.
    const settle = () => {
      document.documentElement.classList.remove("is-translating");
      emit("cv:swapped", { language });
    };
    transition.finished.then(settle, settle);
  } else {
    apply();
    if (persist) {
      emit("cv:swapped", { language });
    }
  }
}

/* ---------- rendering ---------- */

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function parseFormattedText(text, container) {
  text.split(/(\*\*.*?\*\*)/g).forEach((part) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      container.appendChild(el("strong", "metric-highlight", part.slice(2, -2)));
    } else if (part) {
      container.appendChild(document.createTextNode(part));
    }
  });
}

function createBulletList(items) {
  const list = el("ul", "project-list");

  items.forEach((item) => {
    const li = document.createElement("li");
    parseFormattedText(item, li);
    list.appendChild(li);
  });

  return list;
}

/* ---------- entrance ---------- */

/** Entrance motion plays once per load: `is-armed` goes on the body and stays
 *  there, so a language switch re-renders under an arming that has already
 *  fired rather than replaying the arrival as a tic. */
function playEntrance() {
  if (prefersReducedMotion()) {
    return;
  }

  // A background tab never advances the animation clock, so arming now would
  // hold the page at opacity 0 behind a fill-mode the visitor never sees.
  if (document.hidden) {
    document.addEventListener("visibilitychange", playEntrance, { once: true });
    return;
  }

  document.body.classList.add("is-armed");
}

function renderSkills(container, skills) {
  container.replaceChildren();

  skills.forEach((skill) => {
    const item = el("li", "skill-item");
    const separator = skill.indexOf(":");

    if (separator < 0) {
      item.textContent = skill;
      container.appendChild(item);
      return;
    }

    item.appendChild(el("span", "skill-label", skill.slice(0, separator + 1)));

    // One chip per technology: recruiters scan for keywords, and a chip is a
    // target where a comma-run is a sentence.
    const tags = el("ul", "skill-tags");
    skill
      .slice(separator + 1)
      .split(",")
      .map((entry) => entry.trim())
      .filter(Boolean)
      .forEach((entry) => tags.appendChild(el("li", "skill-tag", entry)));

    item.appendChild(tags);
    container.appendChild(item);
  });
}

function renderExperience(container, jobs) {
  container.replaceChildren();

  jobs.forEach((job) => {
    const article = el("article", "experience-card");

    const header = el("div", "card-header-row");
    header.append(el("h3", "card-role-title", job.role), el("span", "company-badge", job.place));

    const meta = el("div", "card-meta-row");
    meta.append(
      el("span", "card-meta-detail", job.employment),
      el("span", "card-date-badge", job.date),
    );

    article.append(header, meta, createBulletList(job.bullets));
    container.appendChild(article);
  });
}

function renderResearch(container, entries) {
  container.replaceChildren();

  entries.forEach((entry) => {
    const article = el("article", "research-card");

    const header = el("div", "card-header-row");
    header.append(
      el("h3", "card-role-title", entry.title),
      el("span", "card-date-badge", entry.date),
    );

    const meta = el("div", "card-meta-row");
    meta.appendChild(el("span", "card-meta-detail", entry.context));

    article.append(header, meta, createBulletList(entry.bullets));
    container.appendChild(article);
  });
}

function renderProjects(container, projects) {
  container.replaceChildren();

  projects.forEach((project, index) => {
    const article = el("article", "compact-project-card");
    article.style.setProperty("--i", index);
    article.append(
      el("h3", "project-title", project.title),
      el("p", "project-desc", project.description),
    );

    if (project.tags?.length) {
      const row = el("div", "project-tags-row");
      project.tags.forEach((tag) => row.appendChild(el("span", "project-tag", tag)));
      article.appendChild(row);
    }

    container.appendChild(article);
  });
}

function renderEducation(container, education, labels) {
  container.replaceChildren();

  const addRow = (rows, label, value, valueClass) => {
    const row = el("div", "edu-row");
    row.append(el("span", "edu-label", label), el("span", valueClass, value));
    rows.appendChild(row);
    return row;
  };

  education.forEach((entry) => {
    const card = el("div", "info-card");

    const header = el("div", "card-header-row");
    header.append(
      el("span", "card-institution", entry.institution),
      el("span", "card-years", entry.date),
    );

    const rows = el("div", "edu-detail-rows");

    if (entry.field) {
      addRow(rows, labels.field, entry.field, "edu-value");
    }

    if (entry.gpa) {
      const row = addRow(rows, labels.gpa, entry.gpa, "edu-score-pill");
      if (entry.thesis) {
        row.append(
          el("span", "edu-label", labels.thesis),
          el("span", "edu-score-pill", entry.thesis),
        );
      }
    } else if (entry.thesis) {
      addRow(rows, labels.thesis, entry.thesis, "edu-score-pill");
    }

    if (entry.status) {
      addRow(rows, labels.start, entry.status, "edu-value");
    }

    card.append(header, el("h3", "card-title", entry.title), rows);
    container.appendChild(card);
  });
}

function renderLanguages(container, languages) {
  container.replaceChildren();

  languages.forEach((entry) => {
    const [name, level = ""] = entry.split(" - ");
    const item = el("div", "lang-item");
    item.append(el("span", "name", name), el("span", "level", level));
    container.appendChild(item);
  });
}

function updateContent(content) {
  const setText = (id, text) => {
    const node = document.getElementById(id);
    if (node) node.textContent = text;
  };

  setText("job-title", content.role || content.title);
  setText("job-subtitle", content.specialization || "");
  setText("about-title", content.aboutTitle);
  setText("skills-title", content.skillsTitle);
  setText("projects-title", content.projectsTitle);
  setText("contacts-title", content.contactsTitle);
  setText("education-title", content.educationTitle);
  setText("languages-title", content.languagesTitle);
  setText("experience-title", content.experienceTitle);
  setText("research-title", content.researchTitle);
  setText("contacts-location", content.location);

  const about = document.getElementById("about-content");
  if (about) {
    about.replaceChildren();
    parseFormattedText(content.about, about);
  }

  const skills = document.getElementById("skills-list");
  if (skills) renderSkills(skills, content.skills);

  const experience = document.getElementById("experience-content");
  if (experience) renderExperience(experience, content.experience);

  const research = document.getElementById("research-content");
  if (research) renderResearch(research, content.research);

  const projects = document.getElementById("projects-content");
  if (projects) renderProjects(projects, content.projects);

  const education = document.getElementById("education-content");
  if (education) renderEducation(education, content.education, content.eduLabels);

  const languages = document.getElementById("languages-content");
  if (languages) renderLanguages(languages, content.languages);
}

/* ---------- photo modal ---------- */
/* <dialog>.showModal() provides the focus trap, Escape-to-close, page
   inerting and focus restoration natively, and CSS `allow-discrete` runs the
   fade. Nothing here duplicates any of it. */

const PHOTO_NAME = "profile-photo";

/** Hands one `view-transition-name` from the thumbnail to the modal image
 *  and back. It cannot be declared in CSS on both, because a name live on
 *  two elements at once makes the transition invalid — so it is assigned
 *  immediately before each capture and cleared immediately after. */
function morphPhoto(from, to, mutate) {
  const canMorph =
    document.startViewTransition && !prefersReducedMotion() && !document.hidden && from && to;

  if (!canMorph) {
    mutate();
    return;
  }

  from.style.viewTransitionName = PHOTO_NAME;
  elements.profileModal?.classList.add("is-morphing");
  document.documentElement.classList.add("is-zooming");

  const transition = document.startViewTransition(() => {
    from.style.viewTransitionName = "";
    to.style.viewTransitionName = PHOTO_NAME;
    mutate();
  });

  transition.ready.catch(() => {});
  transition.finished
    .finally(() => {
      from.style.viewTransitionName = "";
      to.style.viewTransitionName = "";
      elements.profileModal?.classList.remove("is-morphing");
      document.documentElement.classList.remove("is-zooming");
    })
    .catch(() => {});
}

function openModal() {
  const dialog = elements.profileModal;
  if (!dialog) {
    return;
  }

  morphPhoto(
    document.getElementById("profileImage"),
    document.getElementById("modalProfileImg"),
    () => dialog.showModal(),
  );
}

function closeModal() {
  const dialog = elements.profileModal;
  if (!dialog?.open) {
    return;
  }

  morphPhoto(
    document.getElementById("modalProfileImg"),
    document.getElementById("profileImage"),
    () => dialog.close(),
  );
}

/* ---------- wiring ---------- */

document.addEventListener("DOMContentLoaded", () => {
  elements.profileModal = document.getElementById("profileModal");

  setLanguage(initialLanguage(), { persist: false, initial: true });
  playEntrance();

  document.querySelectorAll(".lang-option").forEach((option) => {
    option.addEventListener("click", () => setLanguage(option.dataset.lang));
  });

  elements.themeToggle = document.getElementById("themeToggle");
  elements.themeToggle?.setAttribute("aria-pressed", String(currentTheme() === "dark"));
  elements.themeToggle?.addEventListener("click", (event) => {
    // The circle is struck from the middle of the button that was pressed, so
    // a keyboard activation and a click open from the same point.
    const box = event.currentTarget.getBoundingClientRect();
    setTheme(currentTheme() === "dark" ? "light" : "dark", {
      x: box.left + box.width / 2,
      y: box.top + box.height / 2,
    });
  });

  document.getElementById("profileImageBtn")?.addEventListener("click", openModal);

  elements.profileModal?.querySelector(".modal-close-btn")?.addEventListener("click", closeModal);

  // A click that lands on the dialog element itself is a click on the
  // backdrop; anything inside the photo or the button stops here.
  elements.profileModal?.addEventListener("click", (event) => {
    if (event.target === elements.profileModal) {
      closeModal();
    }
  });

  // Escape closes a <dialog> natively, which would skip the morph and leave
  // Escape looking like a different control from the close button. The
  // dialog still closes — it just takes the same route.
  elements.profileModal?.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeModal();
  });
});
