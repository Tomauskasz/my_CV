// ==========================================================================
// TOMAS BITVINSKAS — BESPOKE EXECUTIVE DOSSIER ENGINE
// Anti-Slop Bilingual Dictionary, Radar Telemetry & Proof Constellation Graph
// ==========================================================================

const translations = {
  EN: {
    name: "Tomas Bitvinskas",
    roleTitle: "Applied AI & Automation Engineer",
    academicStatus: "Vilnius TECH AI Systems (GPA: 9.2/10) | Incoming Master's",
    statusBadge: "AVAILABLE FOR DIRECT CONTRACT",
    locationBadge: "Vilnius, LT / Remote",
    contractPitch: "Engineering autonomous decision systems, multi-modal computer vision pipelines, and resilient LLM agent automations with production-grade reliability.",
    radarTitle: "SYSTEM CAPABILITY TELEMETRY",
    radarMetrics: [
      { label: "ACADEMIC BASELINE", val: "GPA 9.2 / Thesis 10/10" },
      { label: "CORE DOMAIN FOCUS", val: "Autonomous Policy & CV" },
      { label: "COMMERCIAL PRACTICE", val: "NNCODE AI Engineer" },
      { label: "PRODUCTION SYSTEMS", val: "5 Deployed Architectures" },
      { label: "AVAILABILITY", val: "Direct Contract (Q3–Q4)" }
    ],
    sections: {
      constellationTitle: "PROOF CONSTELLATION",
      constellationSubtitle: "Interactive topological network — select any node to inspect connected commercial practice, thesis research, or production systems.",
      experienceTitle: "Commercial Practice @ NNCODE",
      researchTitle: "Signature Research & Thesis",
      projectsTitle: "Production Systems Portfolio",
      credentialsTitle: "Credentials & Technical Capabilities",
      academicBaselineTitle: "Academic Foundation",
      stackTitle: "Core AI & Systems Stack",
      languagesTitle: "Language Proficiency"
    },
    experience: [
      {
        id: "exp-nncode",
        nodeId: "node-nncode",
        place: "NNCODE",
        role: "AI Engineer",
        period: "Apr 2025 – Sep 2025",
        context: "Applied Industrial AI Solutions | Multi-Modal CV & Robotics",
        contribution: "Engineered production AI microservices, resilient backend integration pipelines, and integrated multi-modal computer vision and robotics tooling for practical industrial deployments.",
        metrics: ["Production AI Microservices", "Multi-modal CV Integration", "Client-validated Prototypes"],
        tags: ["Python", "FastAPI", "OpenCV", "ROS", "PyTorch", "Docker"]
      }
    ],
    research: [
      {
        id: "res-beamng",
        nodeId: "node-beamng",
        title: "BeamNG Autonomous Driver — End-to-End Driving Policy Training",
        institution: "Vilnius TECH (Bachelor's Thesis, Grade: 10/10)",
        context: "Closed-loop autonomous vehicle decision-making in BeamNG.tech physics simulator.",
        contribution: "Architected complete simulation-to-policy pipeline: real-time telemetry harvesting, dataset curation, reinforcement learning policy training, and automated regression evaluation loops.",
        metrics: ["100% End-to-end Pipeline", "Closed-loop Driving Policy", "BeamNG.tech Simulation"],
        tags: ["Reinforcement Learning", "PyTorch", "BeamNG.tech", "Telemetry Processing", "Python"]
      }
    ],
    projects: [
      {
        id: "proj-etsy",
        nodeId: "node-etsy",
        title: "Etsy Pricing Assistant — Autonomous n8n Workflow",
        context: "Daily pricing optimization across high-volume e-commerce inventory.",
        contribution: "Built an autonomous n8n orchestration workflow integrating Google Sheets, Telegram interactive bots, and OpenAI API with strict human-in-the-loop audit logs and safety bounds.",
        metrics: ["Zero unreviewed pricing mistakes", "Daily autonomous sync", "Audited audit trail"],
        tags: ["n8n", "OpenAI API", "Telegram Bot API", "Google Sheets", "Python"],
        featured: true
      },
      {
        id: "proj-career",
        nodeId: "node-career",
        title: "CareerCopilot — Intelligent CV & Career Strategy Engine",
        context: "Candidate-job semantic matching and structural gap analysis.",
        contribution: "Developed an LLM-powered engine that analyzes candidate credentials against job requirements, generates gap matrices, and creates tailored cover letters and interview preparation packs.",
        metrics: ["Semantic gap matrix", "Automated cover generation", "NLP evaluation"],
        tags: ["FastAPI", "React", "NLP", "LLM Fine-tuning", "Tailwind CSS"],
        featured: false
      },
      {
        id: "proj-visual",
        nodeId: "node-visual",
        title: "Visual Search — High-Dimensional Vector Similarity Engine",
        context: "Fast vector-based visual discovery across large image databases.",
        contribution: "Implemented a fullstack image similarity search engine using deep feature extraction embeddings with a FastAPI backend and interactive React UI.",
        metrics: ["Sub-second vector lookup", "Deep feature embeddings", "React UI"],
        tags: ["PyTorch", "FastAPI", "React", "Computer Vision", "Embeddings"],
        featured: false
      },
      {
        id: "proj-face",
        nodeId: "node-face",
        title: "Student Face Check-in & Biometric Attendance System",
        context: "Automated biometric classroom attendance verification.",
        contribution: "Engineered a computer vision attendance system verifying student identities via facial recognition, managing persistent logs, and providing an administrative portal.",
        metrics: ["Real-time facial verification", "Automated attendance logging", "Admin portal"],
        tags: ["OpenCV", "Face Recognition", "Python", "SQLite", "HTML/CSS"],
        featured: false
      },
      {
        id: "proj-rail",
        nodeId: "node-rail",
        title: "Railroad Crossing Real-Time Safety Monitor",
        context: "Real-time safety hazard detection at critical transport infrastructure points.",
        contribution: "Created a computer vision pipeline that tracks rail crossing traffic, detects optical warning signals, and automatically flags hazardous near-miss incidents for operator review.",
        metrics: ["Real-time optical hazard detection", "Automated incident flagging", "Video analytics"],
        tags: ["Computer Vision", "OpenCV", "Object Detection", "Python"],
        featured: false
      }
    ],
    skills: [
      {
        category: "Artificial Intelligence & Machine Learning",
        items: ["PyTorch", "TensorFlow", "Reinforcement Learning", "Computer Vision", "NLP", "Model Fine-tuning", "Classification & Clustering"]
      },
      {
        category: "Backend & Distributed Systems",
        items: ["Python", "FastAPI", "Node.js", "C++", "JavaScript", "MongoDB", "Oracle", "Tailwind CSS"]
      },
      {
        category: "Robotics, Simulation & Automation",
        items: ["ROS", "Gazebo", "OpenCV", "BeamNG.tech", "n8n Workflow Automation", "Telegram Bots"]
      }
    ],
    education: [
      {
        degree: "B.Sc. in Artificial Intelligence Systems",
        institution: "Vilnius TECH (Vilnius Gediminas Technical University)",
        period: "2022 – 2026",
        gpa: "GPA: 9.2 / 10 | Thesis: 10/10",
        notes: "Incoming Master's Student in AI Engineering. Focus on autonomous robotics, computer vision, and machine learning."
      }
    ],
    languages: [
      { name: "Lithuanian", level: "Native proficiency" },
      { name: "English", level: "Fluent / Professional working proficiency" }
    ],
    constellationGraph: {
      nodes: [
        { id: "node-nncode", label: "NNCODE (AI Role)", x: 260, y: 160, type: "commercial", targetId: "exp-nncode" },
        { id: "node-beamng", label: "BeamNG Thesis", x: 420, y: 80, type: "research", targetId: "res-beamng" },
        { id: "node-etsy", label: "Etsy AI Automation", x: 120, y: 90, type: "project", targetId: "proj-etsy" },
        { id: "node-career", label: "CareerCopilot", x: 100, y: 230, type: "project", targetId: "proj-career" },
        { id: "node-visual", label: "Visual Search", x: 440, y: 230, type: "project", targetId: "proj-visual" },
        { id: "node-rail", label: "Rail Safety CV", x: 320, y: 270, type: "project", targetId: "proj-rail" }
      ],
      links: [
        { source: "node-nncode", target: "node-beamng" },
        { source: "node-nncode", target: "node-visual" },
        { source: "node-nncode", target: "node-rail" },
        { source: "node-nncode", target: "node-etsy" },
        { source: "node-etsy", target: "node-career" },
        { source: "node-beamng", target: "node-rail" },
        { source: "node-visual", target: "node-rail" }
      ]
    }
  },
  LT: {
    name: "Tomas Bitvinskas",
    roleTitle: "Taikomojo DI ir automatizavimo inžinierius",
    academicStatus: "Vilnius TECH DI sistemos (Vidurkis: 9,2/10) | Būsimas magistrantas",
    statusBadge: "PASIRUOŠĘS TIESIOGINIAMS PROJEKTAMS",
    locationBadge: "Vilnius, LT / Nuotoliniu",
    contractPitch: "Kuriu autonominių sprendimų priėmimo sistemas, kompiuterinės regos procesus ir patikimus LLM automatizavimo sprendimus verslui.",
    radarTitle: "SISTEMOS TELEMETRIJA IR ĮGŪDŽIAI",
    radarMetrics: [
      { label: "IŠSILAVINIMO BAZĖ", val: "Vidurkis 9,2 / Darbas 10/10" },
      { label: "PAGRINDINĖ SRITIS", val: "Autonominis valdymas ir CV" },
      { label: "KOMERCINĖ PATIRTIS", val: "NNCODE DI inžinierius" },
      { label: "GAMYBINIAI PROJEKTAI", val: "5 veikiančios sistemos" },
      { label: "PASIEKIAMUMAS", val: "Tiesioginiai projektai (2026)" }
    ],
    sections: {
      constellationTitle: "ĮRODYMŲ ŽVAIGŽDYNAS",
      constellationSubtitle: "Interaktyvus topologinis žemėlapis — pasirinkite mazgą, kad pamatytumėte susijusią komercinę patirtį, tyrimus ir projektus.",
      experienceTitle: "Komercinė patirtis @ NNCODE",
      researchTitle: "Pagrindinis tyrimas ir baigiamasis darbas",
      projectsTitle: "Taikomieji gamybiniai projektai",
      credentialsTitle: "Kvalifikacija ir techniniai įgūdžiai",
      academicBaselineTitle: "Išsilavinimo pagrindas",
      stackTitle: "DI ir technologijų rinkinys",
      languagesTitle: "Kalbų mokėjimas"
    },
    experience: [
      {
        id: "exp-nncode",
        nodeId: "node-nncode",
        place: "NNCODE",
        role: "DI inžinierius",
        period: "2025 bal. – 2025 rugs.",
        context: "Taikomieji pramoniniai DI sprendimai | Kompiuterinė rega ir robotika",
        contribution: "Kūriau gamybines DI mikropaslaugas, patikimas serverinės integracijos grandines ir jungiau kompiuterinės regos bei robotikos įrankius pramoniniams klientų užsakymams.",
        metrics: ["Gamybinės DI mikropaslaugos", "Kompiuterinės regos integracija", "Klientų patvirtinti sprendimai"],
        tags: ["Python", "FastAPI", "OpenCV", "ROS", "PyTorch", "Docker"]
      }
    ],
    research: [
      {
        id: "res-beamng",
        nodeId: "node-beamng",
        title: "BeamNG autonominis vairuotojas — Vairavimo politikos mokymas",
        institution: "Vilnius TECH (Bakalauro baigiamasis darbas, įvertinimas: 10/10)",
        context: "Autonominio automobilio sprendimų priėmimas didelio tikslumo fizikos simuliatoriuje (BeamNG.tech).",
        contribution: "Sukūriau pilną procesą nuo simuliacijos iki valdymo modelio: telemetrijos rinkimą, duomenų paruošimą, stiprinamojo mokymo modelio treniravimą ir automatinį testavimą.",
        metrics: ["100% pilnas procesas", "Uždaro ciklo vairavimo modelis", "BeamNG.tech simuliacija"],
        tags: ["Stiprinamasis mokymas", "PyTorch", "BeamNG.tech", "Telemetrijos apdorojimas", "Python"]
      }
    ],
    projects: [
      {
        id: "proj-etsy",
        nodeId: "node-etsy",
        title: "Etsy kainodaros asistentas — Autonominė n8n sistema",
        context: "Kasdienis prekių kainų optimizavimas didelės apimties e-komercijos sąrašuose.",
        contribution: "Sukūriau n8n automatizavimo procesą, apjungiantį Google Sheets, Telegram botus ir OpenAI API su griežtomis saugumo taisyklėmis ir žmogaus patvirtinimu.",
        metrics: ["Nulinis klaidų skaičius", "Kasdienė automatinė sinchronizacija", "Žmogaus patvirtinimo auditas"],
        tags: ["n8n", "OpenAI API", "Telegram Bot API", "Google Sheets", "Python"],
        featured: true
      },
      {
        id: "proj-career",
        nodeId: "node-career",
        title: "CareerCopilot — DI gyvenimo aprašymo asistentas",
        context: "Kandidatų CV ir darbo skelbimų atitikimo analizė.",
        contribution: "Sukūriau sistemą, kuri lygina kandidato įgūdžius su reikalavimais, parodo trūkumus ir generuoja pritaikytus motyvacinius laiškus bei pasiruošimo pokalbiams klausimus.",
        metrics: ["Semantinė atitikimo matrica", "Automatinis laiškų kūrimas", "NLP vertinimas"],
        tags: ["FastAPI", "React", "NLP", "LLM Modeliai", "Tailwind CSS"],
        featured: false
      },
      {
        id: "proj-visual",
        nodeId: "node-visual",
        title: "Visual Search — Panašių vaizdų paieškos sistema",
        context: "Greita vektorinė vaizdų paieška didelėse duomenų bazėse.",
        contribution: "Įdiegiau vaizdų panašumo paieškos variklį su giliųjų bruožų išskyrimu, FastAPI serverine dalimi ir React naudotojo sąsaja.",
        metrics: ["Greita vektorinė paieška", "Giliųjų bruožų vektoriai", "React sąsaja"],
        tags: ["PyTorch", "FastAPI", "React", "Kompiuterinė rega", "Vektoriai"],
        featured: false
      },
      {
        id: "proj-face",
        nodeId: "node-face",
        title: "Studentų lankomumo sistema su veidų atpažinimu",
        context: "Automatizuotas biometrinis studentų lankomumo fiksavimas pagal veidus.",
        contribution: "Sukūriau lankomumo sistemą, atpažįstančią veidus, registruojančią įrašus duomenų bazėje su aiškia administratoriaus sąsaja.",
        metrics: ["Realaus laiko veidų atpažinimas", "Automatinis lankomumo žurnalas", "Valdymo pultas"],
        tags: ["OpenCV", "Face Recognition", "Python", "SQLite", "HTML/CSS"],
        featured: false
      },
      {
        id: "proj-rail",
        nodeId: "node-rail",
        title: "Geležinkelio pervažų saugos stebėsena",
        context: "Realaus laiko saugumo stebėjimas geležinkelio pervažose.",
        contribution: "Sukūriau kompiuterinės regos sistemą, kuri stebi judėjimą pervažoje, atpažįsta šviesoforo signalus ir registruoja incidentus operatoriaus peržiūrai.",
        metrics: ["Realaus laiko pavojaus aptikimas", "Incidentų registravimas", "Vaizdo analizė"],
        tags: ["Kompiuterinė rega", "OpenCV", "Objektų aptikimas", "Python"],
        featured: false
      }
    ],
    skills: [
      {
        category: "Dirbtinis intelektas ir mašininis mokymas",
        items: ["PyTorch", "TensorFlow", "Stiprinamasis mokymas", "Kompiuterinė rega", "NLP", "Modelių tobulinimas", "Klasifikavimas"]
      },
      {
        category: "Serverinė dalis ir programavimas",
        items: ["Python", "FastAPI", "Node.js", "C++", "JavaScript", "MongoDB", "Oracle", "Tailwind CSS"]
      },
      {
        category: "Robotika, simuliacija ir automatizavimas",
        items: ["ROS", "Gazebo", "OpenCV", "BeamNG.tech", "n8n procesų automatizavimas", "Telegram botai"]
      }
    ],
    education: [
      {
        degree: "Dirbtinio intelekto sistemų bakalauras",
        institution: "Vilnius TECH (Vilniaus Gedimino technikos universitetas)",
        period: "2022 – 2026",
        gpa: "Vidurkis: 9,2 / 10 | Darbas: 10/10",
        notes: "Būsimas DI inžinerijos magistrantas. Specializacija: autonominė robotika, kompiuterinė rega ir mašininis mokymas."
      }
    ],
    languages: [
      { name: "Lietuvių kalba", level: "Gimtoji" },
      { name: "Anglų kalba", level: "Laisvai / Profesinis lygis" }
    ],
    constellationGraph: {
      nodes: [
        { id: "node-nncode", label: "NNCODE (DI Inž.)", x: 260, y: 160, type: "commercial", targetId: "exp-nncode" },
        { id: "node-beamng", label: "BeamNG Darbas", x: 420, y: 80, type: "research", targetId: "res-beamng" },
        { id: "node-etsy", label: "Etsy DI n8n", x: 120, y: 90, type: "project", targetId: "proj-etsy" },
        { id: "node-career", label: "CareerCopilot", x: 100, y: 230, type: "project", targetId: "proj-career" },
        { id: "node-visual", label: "Visual Search", x: 440, y: 230, type: "project", targetId: "proj-visual" },
        { id: "node-rail", label: "Pervažų sauga CV", x: 320, y: 270, type: "project", targetId: "proj-rail" }
      ],
      links: [
        { source: "node-nncode", target: "node-beamng" },
        { source: "node-nncode", target: "node-visual" },
        { source: "node-nncode", target: "node-rail" },
        { source: "node-nncode", target: "node-etsy" },
        { source: "node-etsy", target: "node-career" },
        { source: "node-beamng", target: "node-rail" },
        { source: "node-visual", target: "node-rail" }
      ]
    }
  }
};

const ICONS = {
  check: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`
};

const AppState = {
  locale: "EN",
  theme: "system",
  activeNode: null
};

// ==========================================================================
// PROOF CONSTELLATION GRAPH RENDERER
// ==========================================================================
function renderConstellationSVG(data, activeNodeId) {
  const { nodes, links } = data.constellationGraph;
  const nodeMap = new Map(nodes.map(n => [n.id, n]));

  const linesHtml = links.map(link => {
    const s = nodeMap.get(link.source);
    const t = nodeMap.get(link.target);
    if (!s || !t) return "";
    const isActive = activeNodeId && (link.source === activeNodeId || link.target === activeNodeId);
    return `<line x1="${s.x}" y1="${s.y}" x2="${t.x}" y2="${t.y}" class="link-line ${isActive ? "active" : ""}" />`;
  }).join("");

  const nodesHtml = nodes.map(node => {
    const isSelected = node.id === activeNodeId;
    const color = node.type === "commercial" ? "#2563eb" : (node.type === "research" ? "#0284c7" : "#475569");
    const radius = isSelected ? 16 : 11;
    return `
      <g class="node-group ${isSelected ? "active" : ""}" 
         data-node-id="${node.id}" 
         data-target-id="${node.targetId}" 
         onclick="CVApp.selectNode('${node.id}')" 
         onkeydown="if(event.key==='Enter'||event.key===' '){CVApp.selectNode('${node.id}'); event.preventDefault();}"
         tabindex="0" 
         role="button" 
         aria-label="Evidence node: ${node.label}">
        <circle cx="${node.x}" cy="${node.y}" r="${radius}" class="node-circle" fill="${color}" stroke="#ffffff" stroke-width="2" />
        <text x="${node.x}" y="${node.y + 22}" text-anchor="middle" class="node-text">${node.label}</text>
      </g>
    `;
  }).join("");

  return `
    <svg viewBox="0 0 540 320" class="svg-constellation" role="img" aria-label="Proof Constellation evidence network">
      ${linesHtml}
      ${nodesHtml}
    </svg>
  `;
}

// ==========================================================================
// APPLICATION CONTROLLER
// ==========================================================================
const CVApp = {
  init() {
    const savedTheme = localStorage.getItem("cv_theme") || "system";
    this.setTheme(savedTheme, false);

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (AppState.theme === "system") {
        this.applyTheme();
      }
    });

    const savedLang = localStorage.getItem("cv_lang") || "EN";
    this.setLanguage(savedLang, false);

    this.render();
  },

  setTheme(theme, save = true) {
    AppState.theme = theme;
    if (save) localStorage.setItem("cv_theme", theme);
    this.applyTheme();
    this.updateThemeButtons();
  },

  applyTheme() {
    let effectiveTheme = AppState.theme;
    if (effectiveTheme === "system") {
      effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    document.documentElement.setAttribute("data-theme", effectiveTheme);
  },

  updateThemeButtons() {
    document.querySelectorAll("[data-theme-btn]").forEach(btn => {
      const btnTheme = btn.getAttribute("data-theme-btn");
      btn.classList.toggle("active", btnTheme === AppState.theme);
    });
  },

  setLanguage(lang, save = true) {
    if (!translations[lang]) return;
    AppState.locale = lang;
    if (save) localStorage.setItem("cv_lang", lang);

    document.documentElement.lang = lang.toLowerCase();
    document.title = `${translations[lang].name} | ${translations[lang].roleTitle}`;

    this.updateLangButtons();
    this.render();
  },

  updateLangButtons() {
    document.querySelectorAll("[data-lang-btn]").forEach(btn => {
      const btnLang = btn.getAttribute("data-lang-btn");
      btn.classList.toggle("active", btnLang === AppState.locale);
    });
  },

  selectNode(nodeId) {
    AppState.activeNode = nodeId;
    const data = translations[AppState.locale];
    const node = data.constellationGraph.nodes.find(n => n.id === nodeId);
    this.renderConstellation();

    if (node && node.targetId) {
      document.querySelectorAll(".evidence-card").forEach(el => el.classList.remove("is-targeted"));
      const targetEl = document.getElementById(node.targetId);
      if (targetEl) {
        targetEl.classList.add("is-targeted");
        targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  },

  renderConstellation() {
    const container = document.getElementById("constellationContainer");
    if (!container) return;
    const data = translations[AppState.locale];
    container.innerHTML = renderConstellationSVG(data, AppState.activeNode);
  },

  render() {
    const data = translations[AppState.locale];

    // Static text bindings
    const heroName = document.getElementById("heroName");
    if (heroName) heroName.textContent = data.name;

    const heroRole = document.getElementById("heroRole");
    if (heroRole) heroRole.textContent = data.roleTitle;

    const heroPitch = document.getElementById("heroPitch");
    if (heroPitch) heroPitch.textContent = data.contractPitch;

    const statusBadge = document.getElementById("statusBadge");
    if (statusBadge) statusBadge.textContent = data.statusBadge;

    const radarTitle = document.getElementById("radarTitle");
    if (radarTitle) radarTitle.textContent = data.radarTitle;

    const constellationTitle = document.getElementById("constellationTitle");
    if (constellationTitle) constellationTitle.textContent = data.sections.constellationTitle;

    const constellationSubtitle = document.getElementById("constellationSubtitle");
    if (constellationSubtitle) constellationSubtitle.textContent = data.sections.constellationSubtitle;

    const chapter1Title = document.getElementById("chapter1Title");
    if (chapter1Title) chapter1Title.textContent = data.sections.experienceTitle;

    const chapter2Title = document.getElementById("chapter2Title");
    if (chapter2Title) chapter2Title.textContent = data.sections.researchTitle;

    const chapter3Title = document.getElementById("chapter3Title");
    if (chapter3Title) chapter3Title.textContent = data.sections.projectsTitle;

    const chapter4Title = document.getElementById("chapter4Title");
    if (chapter4Title) chapter4Title.textContent = data.sections.credentialsTitle;

    // Render Radar Metrics
    const radarList = document.getElementById("radarMetricsList");
    if (radarList) {
      radarList.innerHTML = data.radarMetrics.map(m => `
        <div class="radar-metric-item">
          <span class="radar-metric-label">${m.label}</span>
          <span class="radar-metric-val">${m.val}</span>
        </div>
      `).join("");
    }

    // Render Experience List
    const expList = document.getElementById("experienceList");
    if (expList) {
      expList.innerHTML = data.experience.map(exp => `
        <article id="${exp.id}" class="evidence-card ${AppState.activeNode === exp.nodeId ? "is-targeted" : ""}">
          <div class="card-header-bar">
            <h4 class="card-title">${exp.role} — ${exp.place}</h4>
            <span class="card-meta-badge">${exp.period}</span>
          </div>
          <p class="card-context-row">${exp.context}</p>
          <p class="card-body">${exp.contribution}</p>
          <div class="tech-tag-row">
            ${exp.metrics.map(m => `<span class="metric-pill">${ICONS.check} ${m}</span>`).join("")}
            ${exp.tags.map(t => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
        </article>
      `).join("");
    }

    // Render Research List
    const resList = document.getElementById("researchList");
    if (resList) {
      resList.innerHTML = data.research.map(res => `
        <article id="${res.id}" class="evidence-card ${AppState.activeNode === res.nodeId ? "is-targeted" : ""}">
          <div class="card-header-bar">
            <h4 class="card-title text-brand">${res.title}</h4>
            <span class="card-meta-badge">${res.institution}</span>
          </div>
          <p class="card-context-row">${res.context}</p>
          <p class="card-body">${res.contribution}</p>
          <div class="tech-tag-row">
            ${res.metrics.map(m => `<span class="metric-pill">${ICONS.check} ${m}</span>`).join("")}
            ${res.tags.map(t => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
        </article>
      `).join("");
    }

    // Render Projects Bento Grid
    const projList = document.getElementById("projectsList");
    if (projList) {
      projList.innerHTML = data.projects.map((proj, idx) => `
        <article id="${proj.id}" class="evidence-card ${proj.featured ? "featured-wide" : ""} ${AppState.activeNode === proj.nodeId ? "is-targeted" : ""}">
          <div class="card-header-bar">
            <h4 class="card-title">${proj.title}</h4>
            <span class="card-meta-badge">0${idx + 1} // SYS</span>
          </div>
          <p class="card-context-row">${proj.context}</p>
          <p class="card-body">${proj.contribution}</p>
          <div class="tech-tag-row">
            ${proj.metrics.map(m => `<span class="metric-pill">${ICONS.check} ${m}</span>`).join("")}
            ${proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
        </article>
      `).join("");
    }

    // Render Competencies Grid
    const compGrid = document.getElementById("competenciesGrid");
    if (compGrid) {
      compGrid.innerHTML = `
        <div class="evidence-card">
          <div class="card-header-bar">
            <h4 class="card-title">${data.sections.academicBaselineTitle}</h4>
            <span class="card-meta-badge">Vilnius TECH</span>
          </div>
          <p class="text-base font-bold" style="margin-top:0.35rem;">${data.education[0].institution}</p>
          <p class="text-sm text-brand font-bold" style="margin:0.25rem 0;">${data.education[0].degree}</p>
          <p class="card-context-row" style="margin-bottom:0.75rem;">${data.education[0].gpa}</p>
          <p class="text-xs text-muted" style="margin-bottom:1.25rem;">${data.education[0].notes}</p>
          
          <h4 class="card-title" style="border-top:1px solid var(--border-subtle); padding-top:1rem; margin-bottom:0.6rem; font-size:var(--text-lg);">${data.sections.languagesTitle}</h4>
          <div style="display:flex; flex-direction:column; gap:0.35rem;">
            ${data.languages.map(l => `<p class="text-xs font-mono"><strong>${l.name}:</strong> <span class="text-muted">${l.level}</span></p>`).join("")}
          </div>
        </div>

        <div class="evidence-card">
          <div class="card-header-bar">
            <h4 class="card-title">${data.sections.stackTitle}</h4>
            <span class="card-meta-badge">PRODUCTION STACK</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:1rem; margin-top:0.5rem;">
            ${data.skills.map(s => `
              <div>
                <h5 class="text-xs font-bold text-muted font-mono" style="margin-bottom:0.4rem; text-transform:uppercase;">${s.category}</h5>
                <div class="tech-tag-row">
                  ${s.items.map(i => `<span class="tech-tag">${i}</span>`).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    this.renderConstellation();
  }
};

window.CVApp = CVApp;
document.addEventListener("DOMContentLoaded", () => CVApp.init());
