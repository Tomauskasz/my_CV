const translations = {
  LT: {
    title: "Dirbtinio intelekto studentas",
    aboutTitle: "Apie mane",
    skillsTitle: "Techniniai įgūdžiai",
    projectsTitle: "Projektai",
    contactsTitle: "Kontaktai",
    educationTitle: "Išsilavinimas",
    languagesTitle: "Kalbos",
    about:
      "Esu ketvirto kurso dirbtinio intelekto studentas Vilnius TECH universitete, labai besidomintis programavimu, dirbtiniu intelektu ir praktiniu problemų sprendimu. Mane motyvuoja iššūkiai, nuolatinis tobulėjimas ir noras kurti sistemas, kurios žmonėms kuria tikrą vertę.",
    skills: [
      "Programavimas: Python, C++, JavaScript, HTML/CSS",
      "DI / ML: PyTorch, TensorFlow, natūralios kalbos apdorojimas, kompiuterinė rega, stiprinamasis mokymas, klasifikavimas, klasterizavimas, modelių tobulinimas",
      "Internetinės svetainės / aplikacijos: FastAPI, Node.js, React, Tailwind CSS, MongoDB, Oracle",
      "Įrankiai / platformos: OpenCV, ROS, Gazebo, n8n",
    ],
    education: [
      {
        title: "Dirbtinio intelekto studijos",
        institution: "Vilnius TECH",
        date: "2022-dabar",
        gpa: "Vidurkis: 9,2",
      },
    ],
    languages: ["Lietuvių - gimtoji", "Anglų - laisvai"],
    experienceTitle: "Patirtis",
    experience: {
      place: "NNCODE",
      role: "DI inžinierius",
      duration: "Taikomieji DI sprendimai | kompiuterinė rega ir robotika",
    },
    experienceBullets: [
      "Kūriau DI prototipus, serverinės dalies funkcijas ir jungiau skirtingus įrankius bei paslaugas, kad padėčiau įgyvendinti praktinius klientų projektus.",
    ],
    projects: [
      {
        title: "BeamNG autonominis vairuotojas - vairavimo sistemos mokymas",
        bullets: [
          "Sukūriau pilną BeamNG.tech autonominio automobilio mokymo procesą: nuo duomenų rinkimo iki modelio mokymo ir veikimo testavimo.",
          "Tobulinau, kaip sistema mokosi ir elgiasi, gerindamas naudojamus duomenis, vertinimo būdus ir vairavimo sprendimų logiką.",
        ],
      },
      {
        title: "CareerCopilot - DI gyvenimo aprašymo asistentas",
        bullets: [
          "Sukūriau įrankį, kuris lygina gyvenimo aprašymus su darbo aprašymais, parodo atitikimus ir trūkumus bei pateikia pritaikytus pasiūlymus, motyvacinius laiškus ir pasiruošimą pokalbiams.",
        ],
      },
      {
        title: "Visual Search - panašių vaizdų paieška",
        bullets: [
          "Sukūriau sistemą, kuri leidžia įkelti vaizdą ir greitai rasti panašius vaizdus, naudojant FastAPI serverinę dalį ir React vartotojo sąsają.",
        ],
      },
      {
        title: "Studentų lankomumo sistema su veidų atpažinimu",
        bullets: [
          "Sukūriau lankomumo sistemos prototipą, kuri atpažįsta veidus, tvarko studentų įrašus ir turi lengvai naudojamą vartotojo sąsają.",
        ],
      },
      {
        title: "Etsy kainodaros asistentas - DI automatizavimo sistema",
        bullets: [
          "Sukūriau kainų peržiūros procesą n8n aplinkoje, kuris sujungia Google Sheets, Telegram ir OpenAI bei padeda kasdien priimti sprendimus dėl Etsy skelbimų.",
          "Įdiegiau saugumo taisykles, DI peržiūrą ir patvirtinimų registravimą, kad kainų pakeitimai būtų aiškūs, peržiūrimi ir liktų žmogaus kontrolėje.",
        ],
      },
      {
        title: "Geležinkelio pervažų saugos sistema - stebėsena kompiuterine rega",
        bullets: [
          "Sukūriau kompiuterine rega paremtą geležinkelio pervažų saugos sistemą, kuri stebi judėjimą, aptinka įspėjamuosius signalus ir registruoja rizikingas situacijas peržiūrai.",
        ],
      },
    ],
  },
  EN: {
    title: "Artificial Intelligence Student",
    aboutTitle: "About Me",
    skillsTitle: "Technical Skills",
    projectsTitle: "Projects",
    contactsTitle: "Contacts",
    educationTitle: "Education",
    languagesTitle: "Languages",
    about:
      "I am a fourth-year Artificial Intelligence student at Vilnius TECH university with a strong interest in programming, AI, and practical problem-solving. I am driven by challenge, continuous learning, and building systems that create real value and meaningful impact.",
    skills: [
      "Programming: Python, C++, JavaScript, HTML/CSS",
      "AI / ML: PyTorch, TensorFlow, NLP, computer vision, reinforcement learning, classification, clustering, model fine-tuning",
      "Backend / Web: FastAPI, Node.js, React, Tailwind CSS, MongoDB, Oracle",
      "Tools / Platforms: OpenCV, ROS, Gazebo, n8n",
    ],
    education: [
      {
        title: "Artificial Intelligence studies",
        institution: "Vilnius TECH",
        date: "2022-Present",
        gpa: "GPA: 9.2",
      },
    ],
    languages: ["Lithuanian - Native", "English - Fluent"],
    experienceTitle: "Experience",
    experience: {
      place: "NNCODE",
      role: "AI Engineer",
      duration: "Applied AI solutions | computer vision and robotics",
    },
    experienceBullets: [
      "Built AI prototypes, backend features, and connected different tools and services to support practical client projects.",
    ],
    projects: [
      {
        title: "BeamNG autonomous driver - Driving Policy Training",
        bullets: [
          "Built a full training pipeline for a self-driving BeamNG.tech car, covering data collection, model training, and performance testing.",
          "Improved how the system learned and behaved by refining what data it used, how it was evaluated, and how its driving decisions were guided.",
        ],
      },
      {
        title: "CareerCopilot - AI CV Assistant",
        bullets: [
          "Built a tool that reviews CVs against job descriptions, highlights fit and gaps, and creates tailored CV suggestions, cover letters, and interview prep.",
        ],
      },
      {
        title: "Visual Search - Image Similarity Search",
        bullets: [
          "Built a system that lets users upload an image and quickly find similar images, with a FastAPI backend and React frontend.",
        ],
      },
      {
        title: "Student Face Check-in System",
        bullets: [
          "Built a full attendance system that verifies faces, manages student records, and provides an easy-to-use web interface.",
        ],
      },
      {
        title: "Etsy Pricing Assistant - AI Automation System",
        bullets: [
          "Built a pricing review workflow in n8n that brings together Google Sheets, Telegram, and OpenAI to support daily Etsy listing decisions.",
          "Added safety rules, AI review, and approval logging so price changes stayed clear, reviewable, and under human control.",
        ],
      },
      {
        title: "Railroad Safety System - Computer Vision Monitoring",
        bullets: [
          "Built a computer-vision safety system for railroad crossings that tracks activity, detects warning signals, and records risky situations for review.",
        ],
      },
    ],
  },
};

const elements = {};
let lastFocusedElement = null;
let modalCloseTimer = null;

function getModalFocusableElements() {
  if (!elements.profileModal) {
    return [];
  }

  return Array.from(
    elements.profileModal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hasAttribute("disabled"));
}

function getLanguageOptions() {
  return Array.from(document.querySelectorAll(".lang-option"));
}

function isLanguageMenuOpen() {
  return elements.langMenu?.classList.contains("is-open");
}

function focusLanguageOption(index) {
  const options = getLanguageOptions();
  if (!options.length) {
    return;
  }

  const normalizedIndex = (index + options.length) % options.length;
  options[normalizedIndex].focus();
}

function openLanguageMenu({ focusIndex } = {}) {
  if (!elements.langMenu || !elements.langBtn) {
    return;
  }

  elements.langMenu.classList.add("is-open");
  elements.langBtn.setAttribute("aria-expanded", "true");

  if (typeof focusIndex === "number") {
    requestAnimationFrame(() => focusLanguageOption(focusIndex));
  }
}

function closeLanguageMenu({ restoreFocus = false } = {}) {
  if (!elements.langMenu || !elements.langBtn) {
    return;
  }

  elements.langMenu.classList.remove("is-open");
  elements.langBtn.setAttribute("aria-expanded", "false");

  if (restoreFocus) {
    elements.langBtn.focus();
  }
}

function toggleLanguageMenu() {
  if (isLanguageMenuOpen()) {
    closeLanguageMenu();
  } else {
    openLanguageMenu();
  }
}

function createBulletList(items, className) {
  const list = document.createElement("ul");
  list.className = className;

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  return list;
}

function createMetaLine(text, emphasis = false) {
  const paragraph = document.createElement("p");
  paragraph.className = emphasis ? "meta-line meta-emphasis" : "meta-line";
  paragraph.textContent = text;
  return paragraph;
}

function setLanguage(language) {
  if (!translations[language]) {
    return;
  }

  const shouldRestoreFocus = isLanguageMenuOpen();

  document.documentElement.lang = language === "LT" ? "lt" : "en";

  if (elements.selectedLang) {
    elements.selectedLang.textContent = language;
  }

  closeLanguageMenu({ restoreFocus: shouldRestoreFocus });
  updateContent(language);
}

function updateContent(language) {
  const content = translations[language];
  if (!content) {
    return;
  }

  document.getElementById("job-title").textContent = content.title;
  document.getElementById("about-title").textContent = content.aboutTitle;
  document.getElementById("skills-title").textContent = content.skillsTitle;
  document.getElementById("projects-title").textContent = content.projectsTitle;
  document.getElementById("contacts-title").textContent = content.contactsTitle;
  document.getElementById("education-title").textContent =
    content.educationTitle;
  document.getElementById("languages-title").textContent =
    content.languagesTitle;

  const aboutContent = document.getElementById("about-content");
  if (aboutContent) {
    aboutContent.textContent = content.about;
  }

  const skillsList = document.getElementById("skills-list");
  if (skillsList) {
    skillsList.innerHTML = "";
    content.skills.forEach((skill) => {
      const li = document.createElement("li");
      li.className = "skill-item";

      const separatorIndex = skill.indexOf(":");
      if (separatorIndex >= 0) {
        const label = document.createElement("strong");
        label.className = "skill-label";
        label.textContent = skill.slice(0, separatorIndex + 1);

        const copy = document.createElement("span");
        copy.className = "skill-copy";
        copy.textContent = ` ${skill.slice(separatorIndex + 1).trim()}`;

        li.append(label, copy);
      } else {
        li.textContent = skill;
      }

      skillsList.appendChild(li);
    });
  }

  const projectsContent = document.getElementById("projects-content");
  if (projectsContent) {
    projectsContent.innerHTML = "";
    content.projects.forEach((project) => {
      const article = document.createElement("article");
      article.className = "project-card";

      const heading = document.createElement("h3");
      heading.className = "project-title";
      heading.textContent = project.title;

      article.appendChild(heading);
      article.appendChild(createBulletList(project.bullets, "project-list"));
      projectsContent.appendChild(article);
    });
  }

  const educationContent = document.getElementById("education-content");
  if (educationContent) {
    educationContent.innerHTML = "";

    content.education.forEach((education) => {
      const card = document.createElement("div");
      card.className = "info-card";

      const title = document.createElement("h3");
      title.className = "card-title";
      title.textContent = education.title;

      const metaStack = document.createElement("div");
      metaStack.className = "meta-stack";
      metaStack.appendChild(
        createMetaLine(`${education.institution} | ${education.date}`),
      );

      if (education.gpa) {
        metaStack.appendChild(createMetaLine(education.gpa, true));
      }

      card.append(title, metaStack);
      educationContent.appendChild(card);
    });
  }

  const languagesContent = document.getElementById("languages-content");
  if (languagesContent) {
    languagesContent.innerHTML = "";
    content.languages.forEach((languageItem) => {
      const chip = document.createElement("p");
      chip.className = "language-chip";
      chip.textContent = languageItem;
      languagesContent.appendChild(chip);
    });
  }

  const experienceTitle = document.getElementById("experience-title");
  if (experienceTitle) {
    experienceTitle.textContent = content.experienceTitle;
  }

  const experienceContent = document.getElementById("experience-content");
  if (experienceContent) {
    experienceContent.innerHTML = "";

    const summaryCard = document.createElement("div");
    summaryCard.className = "info-card";

    const role = document.createElement("h3");
    role.className = "experience-inline-title";
    role.textContent = content.experience.role;

    const place = document.createElement("span");
    place.className = "experience-inline-title";
    place.textContent = content.experience.place;

    const roleLine = document.createElement("div");
    roleLine.className = "experience-role-line";

    const roleSeparator = document.createElement("span");
    roleSeparator.className = "experience-role-separator";
    roleSeparator.setAttribute("aria-hidden", "true");
    roleSeparator.textContent = "|";

    const metaStack = document.createElement("div");
    metaStack.className = "meta-stack";

    const duration = createMetaLine(content.experience.duration);
    duration.id = "experience-duration";

    roleLine.append(role, roleSeparator, place);
    metaStack.append(duration);
    summaryCard.append(roleLine, metaStack);
    experienceContent.appendChild(summaryCard);

    if (content.experienceBullets.length) {
      experienceContent.appendChild(
        createBulletList(content.experienceBullets, "experience-list"),
      );
    }
  }
}

function finishClosingModal() {
  if (!elements.profileModal) {
    return;
  }

  elements.profileModal.classList.add("hidden");
  elements.profileModal.classList.remove("is-open", "is-closing");
  document.body.classList.remove("modal-open");

  if (elements.pageContent) {
    elements.pageContent.inert = false;
  }

  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }

  modalCloseTimer = null;
}

function openModal() {
  const modal = elements.profileModal;
  const closeButton = modal?.querySelector(".modal-close-btn");
  if (!modal || modal.classList.contains("is-open")) {
    return;
  }

  if (modalCloseTimer) {
    window.clearTimeout(modalCloseTimer);
    modalCloseTimer = null;
  }

  lastFocusedElement = document.activeElement;
  modal.classList.remove("hidden", "is-closing");

  requestAnimationFrame(() => {
    modal.classList.add("is-open");
  });

  document.body.classList.add("modal-open");

  if (elements.pageContent) {
    elements.pageContent.inert = true;
  }

  closeButton?.focus();
}

function closeModal() {
  const modal = elements.profileModal;
  if (
    !modal ||
    modal.classList.contains("hidden") ||
    modal.classList.contains("is-closing")
  ) {
    return;
  }

  modal.classList.remove("is-open");
  modal.classList.add("is-closing");
  modalCloseTimer = window.setTimeout(finishClosingModal, 260);
}

document.addEventListener("DOMContentLoaded", () => {
  elements.langBtn = document.getElementById("langBtn");
  elements.langMenu = document.getElementById("langMenu");
  elements.selectedLang = document.getElementById("selectedLang");
  elements.profileModal = document.getElementById("profileModal");
  elements.pageContent = document.getElementById("pageContent");
  elements.profileImage = document.getElementById("profileImage");

  setLanguage("LT");

  if (elements.profileImage) {
    const markLoaded = () => elements.profileImage.classList.add("loaded");

    elements.profileImage.addEventListener("click", openModal);
    elements.profileImage.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal();
      }
    });

    if (elements.profileImage.complete) {
      markLoaded();
    } else {
      elements.profileImage.addEventListener("load", markLoaded, { once: true });
    }
  }

  elements.profileModal
    ?.querySelector(".modal-close-btn")
    ?.addEventListener("click", closeModal);

  getLanguageOptions().forEach((option) => {
    option.addEventListener("click", (event) => {
      const selectedLanguage = event.currentTarget.dataset.lang;
      setLanguage(selectedLanguage);
    });
  });
});

document.addEventListener("click", (event) => {
  if (!elements.langBtn || !elements.langMenu) {
    return;
  }

  if (elements.langBtn.contains(event.target)) {
    toggleLanguageMenu();
    return;
  }

  if (!elements.langMenu.contains(event.target)) {
    closeLanguageMenu();
  }

  if (event.target === elements.profileModal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Tab" &&
    elements.profileModal &&
    !elements.profileModal.classList.contains("hidden")
  ) {
    const focusableElements = getModalFocusableElements();
    if (!focusableElements.length) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  if (event.key === "Escape") {
    if (isLanguageMenuOpen()) {
      event.preventDefault();
      closeLanguageMenu({ restoreFocus: true });
    }

    closeModal();
    return;
  }

  if (document.activeElement === elements.langBtn) {
    const optionCount = getLanguageOptions().length;
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLanguageMenu({ focusIndex: 0 });
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      openLanguageMenu({ focusIndex: optionCount - 1 });
    }

    return;
  }

  const languageOptions = getLanguageOptions();
  const activeOptionIndex = languageOptions.findIndex(
    (option) => option === document.activeElement,
  );

  if (activeOptionIndex === -1) {
    return;
  }

  switch (event.key) {
    case "ArrowDown":
      event.preventDefault();
      focusLanguageOption(activeOptionIndex + 1);
      break;
    case "ArrowUp":
      event.preventDefault();
      focusLanguageOption(activeOptionIndex - 1);
      break;
    case "Home":
      event.preventDefault();
      focusLanguageOption(0);
      break;
    case "End":
      event.preventDefault();
      focusLanguageOption(languageOptions.length - 1);
      break;
    case "Tab":
      closeLanguageMenu();
      break;
    default:
      break;
  }
});
