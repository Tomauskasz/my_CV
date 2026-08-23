// ==========================================================================
// TOMAS BITVINSKAS — CV APPLICATION & LOCALIZATION ENGINE
// Bilingual Dictionary, Theme State & Proof Constellation Graph
// ==========================================================================

const translations = {
  EN: {
    name: "Tomas Bitvinskas",
    roleTitle: "Applied AI & Automation Engineer",
    academicStatus: "4th-Year AI Student @ Vilnius TECH | GPA: 9.2 (Incoming Master's)",
    contractPitch: "Open to direct-contract applied AI engineering, autonomous decision systems, computer vision pipelines, and robust LLM automations.",
    contacts: {
      email: "tomas.bitvinskas@gmail.com",
      phone: "+37064655290",
      linkedin: "https://www.linkedin.com/in/tomas-bitvinskas-ab4689253/",
      github: "https://github.com/Tomauskasz"
    },
    sections: {
      constellationTitle: "Proof Constellation",
      constellationSubtitle: "Interactive evidence graph — select any node to inspect connected experience, research, or deployed systems.",
      experienceTitle: "Commercial Experience @ NNCODE",
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
        period: "Applied AI Solutions | Computer Vision & Robotics",
        context: "Client-facing commercial AI solutions, computer vision pipelines, and robotics integrations.",
        contribution: "Engineered production AI prototypes, resilient backend integration microservices, and connected multi-modal robotics and computer vision tooling for practical industrial client deployments.",
        metrics: ["Production AI Microservices", "Multi-modal CV Integration", "Client-validated Prototypes"],
        tags: ["Python", "FastAPI", "OpenCV", "ROS", "PyTorch"]
      }
    ],
    research: [
      {
        id: "res-beamng",
        nodeId: "node-beamng",
        title: "BeamNG Autonomous Driver — End-to-End Driving Policy Training",
        institution: "Vilnius TECH (Bachelor's Thesis, Grade: 10/10)",
        context: "Autonomous vehicle decision-making in high-fidelity physics simulator (BeamNG.tech).",
        contribution: "Architected complete simulation-to-policy pipeline: telemetry harvesting, dataset curation, reinforcement learning policy training, and automated regression evaluation loops.",
        metrics: ["100% End-to-end Pipeline", "Closed-loop Driving Policy", "BeamNG.tech Simulation"],
        tags: ["Reinforcement Learning", "PyTorch", "BeamNG.tech", "Telemetry Processing", "Python"]
      }
    ],
    projects: [
      {
        id: "proj-etsy",
        nodeId: "node-etsy",
        title: "Etsy Pricing Assistant — AI Automation Workflow",
        context: "Daily pricing optimization across high-volume e-commerce inventory.",
        contribution: "Built an autonomous n8n orchestration workflow integrating Google Sheets, Telegram interactive bots, and OpenAI API with strict human-in-the-loop audit logs and safety bounds.",
        metrics: ["Zero unreviewed pricing mistakes", "Daily autonomous sync", "Audited audit trail"],
        tags: ["n8n", "OpenAI API", "Telegram Bot API", "Google Sheets", "Python"]
      },
      {
        id: "proj-career",
        nodeId: "node-career",
        title: "CareerCopilot — Intelligent CV & Career Strategy Assistant",
        context: "Automated candidate-job description semantic matching and gap analysis.",
        contribution: "Developed an LLM-powered engine that analyzes candidate credentials against job requirements, generates gap matrices, and creates tailored cover letters and interview preparation packs.",
        metrics: ["Semantic gap matrix", "Automated cover generation", "NLP evaluation"],
        tags: ["FastAPI", "React", "NLP", "LLM Fine-tuning", "Tailwind CSS"]
      },
      {
        id: "proj-visual",
        nodeId: "node-visual",
        title: "Visual Search — High-Dimensional Image Similarity Engine",
        context: "Fast vector-based visual discovery across large image databases.",
        contribution: "Implemented a fullstack image similarity search engine using deep feature extraction embeddings with a FastAPI backend and interactive React UI.",
        metrics: ["Sub-second vector lookup", "Deep feature embeddings", "React UI"],
        tags: ["PyTorch", "FastAPI", "React", "Computer Vision", "Embeddings"]
      },
      {
        id: "proj-face",
        nodeId: "node-face",
        title: "Student Face Check-in & Attendance Verification",
        context: "Automated biometric classroom attendance tracking.",
        contribution: "Engineered a computer vision attendance system verifying student identities via facial recognition, managing persistent logs, and providing a clean administrative portal.",
        metrics: ["Real-time facial verification", "Automated attendance logging", "Admin portal"],
        tags: ["OpenCV", "Face Recognition", "Python", "SQLite", "HTML/CSS"]
      },
      {
        id: "proj-rail",
        nodeId: "node-rail",
        title: "Railroad Crossing Safety Monitor",
        context: "Real-time safety hazard detection at critical infrastructure points.",
        contribution: "Created a computer vision pipeline that tracks rail crossing traffic, detects optical warning signals, and automatically flags hazardous near-miss incidents for operator review.",
        metrics: ["Real-time optical hazard detection", "Automated incident flagging", "Video analytics"],
        tags: ["Computer Vision", "OpenCV", "Object Detection", "Python"]
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
        period: "2022 – Present",
        gpa: "GPA: 9.2 / 10",
        notes: "Incoming Master's Student. Focus on autonomous robotics, computer vision, and machine learning."
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
    academicStatus: "Vilnius TECH 4 kurso DI studentas | Vidurkis: 9,2 (būsimas magistrantas)",
    contractPitch: "Pasiruošęs tiesioginiams taikomojo DI, autonominių sistemų, kompiuterinės regos ir LLM automatizavimo projektams.",
    contacts: {
      email: "tomas.bitvinskas@gmail.com",
      phone: "+37064655290",
      linkedin: "https://www.linkedin.com/in/tomas-bitvinskas-ab4689253/",
      github: "https://github.com/Tomauskasz"
    },
    sections: {
      constellationTitle: "Įrodymų žvaigždynas",
      constellationSubtitle: "Interaktyvus patirties žemėlapis — paspauskite ant mazgo, kad pamatytumėte susijusią patirtį, tyrimus ir projektus.",
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
        period: "Taikomieji DI sprendimai | Kompiuterinė rega ir robotika",
        context: "Taikomieji DI projektai klientų verslo procesams ir robotikos sprendimams.",
        contribution: "Kūriau gamybinius DI prototipus, patikimas serverinės integracijos mikropaslaugas ir jungiau kompiuterinės regos bei robotikos įrankius praktiniams klientų užsakymams.",
        metrics: ["Gamybinės DI mikropaslaugos", "Kompiuterinės regos integracija", "Klientų patvirtinti sprendimai"],
        tags: ["Python", "FastAPI", "OpenCV", "ROS", "PyTorch"]
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
        title: "Etsy kainodaros asistentas — DI automatizavimo sistema",
        context: "Kasdienis prekių kainų optimizavimas didelės apimties e-komercijos sąrašuose.",
        contribution: "Sukūriau n8n automatizavimo procesą, apjungiantį Google Sheets, Telegram botus ir OpenAI API su griežtomis saugumo taisyklėmis ir žmogaus patvirtinimu.",
        metrics: ["Nulinis klaidų skaičius", "Kasdienė automatinė sinchronizacija", "Žmogaus patvirtinimo auditas"],
        tags: ["n8n", "OpenAI API", "Telegram Bot API", "Google Sheets", "Python"]
      },
      {
        id: "proj-career",
        nodeId: "node-career",
        title: "CareerCopilot — DI gyvenimo aprašymo asistentas",
        context: "Kandidatų CV ir darbo skelbimų atitikimo analizė.",
        contribution: "Sukūriau sistemą, kuri lygina kandidato įgūdžius su reikalavimais, parodo trūkumus ir generuoja pritaikytus motyvacinius laiškus bei pasiruošimo pokalbiams klausimus.",
        metrics: ["Semantinė atitikimo matrica", "Automatinis laiškų kūrimas", "NLP vertinimas"],
        tags: ["FastAPI", "React", "NLP", "LLM Modeliai", "Tailwind CSS"]
      },
      {
        id: "proj-visual",
        nodeId: "node-visual",
        title: "Visual Search — Panašių vaizdų paieškos sistema",
        context: "Greita vektorinė vaizdų paieška didelėse duomenų bazėse.",
        contribution: "Įdiegiau vaizdų panašumo paieškos variklį su giliųjų bruožų išskyrimu, FastAPI serverine dalimi ir React naudotojo sąsaja.",
        metrics: ["Greita vektorinė paieška", "Giliųjų bruožų vektoriai", "React sąsaja"],
        tags: ["PyTorch", "FastAPI", "React", "Kompiuterinė rega", "Vektoriai"]
      },
      {
        id: "proj-face",
        nodeId: "node-face",
        title: "Studentų lankomumo sistema su veidų atpažinimu",
        context: "Automatizuotas studentų lankomumo fiksavimas pagal veidus.",
        contribution: "Sukūriau lankomumo sistemą, atpažįstančią veidus, registruojančią įrašus duomenų bazėje su aiškia administratoriaus sąsaja.",
        metrics: ["Realaus laiko veidų atpažinimas", "Automatinis lankomumo žurnalas", "Valdymo pultas"],
        tags: ["OpenCV", "Face Recognition", "Python", "SQLite", "HTML/CSS"]
      },
      {
        id: "proj-rail",
        nodeId: "node-rail",
        title: "Geležinkelio pervažų saugos stebėsena",
        context: "Realaus laiko saugumo stebėjimas geležinkelio pervažose.",
        contribution: "Sukūriau kompiuterinės regos sistemą, kuri stebi judėjimą pervažoje, atpažįsta šviesoforo signalus ir registruoja incidentus operatoriaus peržiūrai.",
        metrics: ["Realaus laiko pavojaus aptikimas", "Incidentų registravimas", "Vaizdo analizė"],
        tags: ["Kompiuterinė rega", "OpenCV", "Objektų aptikimas", "Python"]
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
        period: "2022 – Dabar",
        gpa: "Vidurkis: 9,2 / 10",
        notes: "Būsimas magistrantas. Specializacija: autonominė robotika, kompiuterinė rega ir mašininis mokymas."
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
  check: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`
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
    const color = node.type === "commercial" ? "#1d4ed8" : (node.type === "research" ? "#0284c7" : "#475569");
    const radius = isSelected ? 16 : 12;
    return `
      <g class="node-group ${isSelected ? "active" : ""}" 
         data-node-id="${node.id}" 
         data-target-id="${node.targetId}" 
         onclick="CVApp.selectNode('${node.id}')" 
         onkeydown="if(event.key==='Enter'||event.key===' '){CVApp.selectNode('${node.id}'); event.preventDefault();}"
         tabindex="0" 
         role="button" 
         aria-label="Evidence node: ${node.label}">
        <circle cx="${node.x}" cy="${node.y}" r="${radius}" class="node-circle" fill="${color}" stroke="#ffffff" stroke-width="2.5" />
        <text x="${node.x}" y="${node.y + 24}" text-anchor="middle" class="node-text">${node.label}</text>
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
    // Detect theme preference
    const savedTheme = localStorage.getItem("cv_theme") || "system";
    this.setTheme(savedTheme, false);

    // Watch system theme changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (AppState.theme === "system") {
        this.applyTheme();
      }
    });

    // Detect language preference
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

    // Static text mappings
    const heroName = document.getElementById("heroName");
    if (heroName) heroName.textContent = data.name;

    const heroRole = document.getElementById("heroRole");
    if (heroRole) heroRole.textContent = data.roleTitle;

    const heroPitch = document.getElementById("heroPitch");
    if (heroPitch) heroPitch.textContent = data.contractPitch;

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

    // Render Experience List
    const expList = document.getElementById("experienceList");
    if (expList) {
      expList.innerHTML = data.experience.map(exp => `
        <article id="${exp.id}" class="evidence-card ${AppState.activeNode === exp.nodeId ? "is-targeted" : ""}">
          <div class="flex-between" style="margin-bottom:0.5rem;">
            <h4 class="text-xl font-extrabold">${exp.role} — ${exp.place}</h4>
            <span class="tag tag-highlight">${exp.period}</span>
          </div>
          <p class="text-base text-secondary" style="margin-bottom:0.85rem;">${exp.contribution}</p>
          <div class="flex-wrap-gap">
            ${exp.metrics.map(m => `<span class="tag tag-success">${ICONS.check} ${m}</span>`).join("")}
            ${exp.tags.map(t => `<span class="tag">${t}</span>`).join("")}
          </div>
        </article>
      `).join("");
    }

    // Render Research List
    const resList = document.getElementById("researchList");
    if (resList) {
      resList.innerHTML = data.research.map(res => `
        <article id="${res.id}" class="evidence-card ${AppState.activeNode === res.nodeId ? "is-targeted" : ""}">
          <h4 class="text-xl font-extrabold text-brand" style="margin-bottom:0.4rem;">${res.title}</h4>
          <p class="text-sm text-muted" style="margin-bottom:0.75rem;">${res.institution}</p>
          <p class="text-base text-secondary" style="margin-bottom:0.85rem;">${res.contribution}</p>
          <div class="flex-wrap-gap">
            ${res.metrics.map(m => `<span class="tag tag-highlight">${ICONS.check} ${m}</span>`).join("")}
            ${res.tags.map(t => `<span class="tag">${t}</span>`).join("")}
          </div>
        </article>
      `).join("");
    }

    // Render Projects List
    const projList = document.getElementById("projectsList");
    if (projList) {
      projList.innerHTML = data.projects.map(proj => `
        <article id="${proj.id}" class="evidence-card ${AppState.activeNode === proj.nodeId ? "is-targeted" : ""}">
          <h4 class="text-lg font-bold" style="margin-bottom:0.4rem;">${proj.title}</h4>
          <p class="text-sm text-secondary" style="margin-bottom:0.75rem;">${proj.contribution}</p>
          <div class="flex-wrap-gap">
            ${proj.tags.map(t => `<span class="tag">${t}</span>`).join("")}
          </div>
        </article>
      `).join("");
    }

    // Render Competencies Grid
    const compGrid = document.getElementById("competenciesGrid");
    if (compGrid) {
      compGrid.innerHTML = `
        <div class="evidence-card">
          <h4 class="text-base font-bold" style="margin-bottom:0.5rem;">${data.sections.academicBaselineTitle}</h4>
          <p class="text-base font-bold">${data.education[0].institution}</p>
          <p class="text-sm text-brand font-medium" style="margin:0.35rem 0;">${data.education[0].degree} (${data.education[0].gpa})</p>
          <p class="text-xs text-muted" style="margin-bottom:0.75rem;">${data.education[0].notes}</p>
          
          <h4 class="text-base font-bold" style="margin-bottom:0.35rem; border-top:1px solid var(--border-subtle); padding-top:0.75rem;">${data.sections.languagesTitle}</h4>
          <div style="display:flex; flex-direction:column; gap:0.25rem;">
            ${data.languages.map(l => `<p class="text-xs"><strong>${l.name}:</strong> ${l.level}</p>`).join("")}
          </div>
        </div>

        <div class="evidence-card">
          <h4 class="text-base font-bold" style="margin-bottom:0.75rem;">${data.sections.stackTitle}</h4>
          <div style="display:flex; flex-direction:column; gap:0.75rem;">
            ${data.skills.map(s => `
              <div>
                <h5 class="text-xs font-bold text-muted" style="margin-bottom:0.35rem;">${s.category}</h5>
                <div class="flex-wrap-gap">
                  ${s.items.map(i => `<span class="tag">${i}</span>`).join("")}
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
