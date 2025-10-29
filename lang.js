document.addEventListener("DOMContentLoaded", () => {
  // Initialize language button and menu after DOM is loaded
  const langBtn = document.getElementById("langBtn");
  const langMenu = document.getElementById("langMenu");
  const selectedLang = document.getElementById("selectedLang");

  // Initialize with the default language
  updateContent("LT");
});

// Translations object
const translations = {
  LT: {
    title: "Dirbtinio intelekto studentas",
    aboutTitle: "Apie",
    skillsTitle: "Įgūdžiai",
    contactsTitle: "Kontaktai",
    educationTitle: "Išsilavinimas",
    languagesTitle: "Kalbos",
    attributesTitle: "Savybės",
    attributesTableHeaders: ["Savybė", "Aprašymas"],
    about:
      "Esu 22-ų metų, ketvirto kurso DI (dirbtinio intelekto) studentas Vilnius TECH. Mokausi programavimo: DI, tinklapių kūrimas (web-dev) bei pats domiuosi kompiuterinių žaidimų kūrimu (game-dev). Esu motyvuotas ir siekiu įgauti daug įvairių žinių, kad tapčiau geru specialistu.",
  skills: [
      'Su Python universitete esu dirbęs ties natūralios kalbos bei vaizdų apdorojimu ir atpažinimu, "Reinforcement learning", regresine analize, klasifikacija, klasterizacija, DI modelių "finetuning", didžiųjų duomenų apdorojimu.',
      "Dirbau ir su C++, kuriant kursinį objektinio programavimo darbą bei realizuojant įvairias duomenų struktūras (binary tree, stack, array ir pan.), jų algoritmus.",
      "Turiu HTML&CSS bei Tailwind patirties, kuriant paprastus tinklapius.",
      "Esu dirbęs su Javascript, Oracle ir Node.js, kuriant registracijos bei prisijungimo tinklapį.",
      "Dirbau su Gazebo&ROS, OpenCV, FastAPI ir Python kompanijoje NNCODE, kuriant dirbtinio intelekto sistemas pagal klientų poreikius."
    ],
    education: [
      {
        title: "Vidurinis",
        institution: "Vilniaus Gabijos gimnazija",
        date: "2010-2022",
        gpa: null,
      },
      {
        title: "Aukštasis (Studentas)",
        institution: "Vilnius TECH",
        date: "2022-dabar",
        gpa: "9.3 vidurkis",
      },
    ],
    languages: ["Lietuvių", "Anglų"],
    experienceTitle: "Patirtis",
    experience: {
      role: "DI sistemų programuotojas",
      duration: "7 mėnesiai",
      place: "NNCODE"
    },
    attributes: [
      {
        name: "Atkaklumas",
        description:
          "Turiu užbaigti, ką pradėjau, nes lengvai ir giliai pasineriu į darbą.",
      },
      {
        name: "Sąmoningumas",
        description:
          'Neturiu jokių žalingų įpročių. Sveikas protas ir kūnas - būtini optimaliam darbui. "Rūpinkis savo kūnu. Tai vienintelė vieta, kurioje privalai gyventi." – Jim Rohn',
      },
      {
        name: "Darbštumas ir ambicija",
        description:
          "Nebijau įdėti darbo siekiant savo tikslų ir tikiu, kad žmogus privalo nuolat kelti sau naujus iššūkius, nes tik taip galima tobulėti.",
      },
      {
        name: "Atsakingumas ir kruopštumas",
        description:
          "Atlieku darbus laiku ir kokybiškai. Visad stengsiuosi dėl to, kas man svarbu. „Jei verta ką nors daryti, verta tai daryti gerai.“ - Philip Stanhope.",
      },
    ],
  },
  EN: {
    title: "Artificial Intelligence Student",
    aboutTitle: "About",
    skillsTitle: "Skills",
    contactsTitle: "Contacts",
    educationTitle: "Education",
    languagesTitle: "Languages",
    attributesTitle: "Attributes",
    attributesTableHeaders: ["Attribute", "Description"],
    about:
      "I am a 22-year-old fourth-year AI (Artificial Intelligence) student at Vilnius TECH. I study programming: AI, web development, and I am also interested in game development. I am motivated to acquire a wide range of knowledge to become a skilled specialist.",
  skills: [
      "I have worked on university projects with Python in natural language and image processing, image recognition, segmentation, object detection, reinforcement learning, regression analysis, classification, clustering, AI model fine-tuning, and big data processing.",
      "I have experience with C++ from object-oriented programming and data structures (binary trees, stacks, arrays, etc.) courses",
      "I have experience with HTML & CSS and Tailwind by building simple websites.",
      "I have worked with JavaScript, Oracle, and Node.js to create a login and registration system.",
      "I worked with Gazebo&ROS, OpenCV, FastAPI and Python at NNCODE developing artificial intelligence systems tailored to client needs."
    ],
    education: [
      {
        title: "Secondary Education",
        institution: "Vilnius Gabija Gymnasium",
        date: "2010-2022",
        gpa: null,
      },
      {
        title: "Bachelor's (Student)",
        institution: "Vilnius TECH",
        date: "2022-Present",
        gpa: "GPA: 9.3",
      },
    ],
    languages: ["Lithuanian", "English"],
    experienceTitle: "Experience",
    experience: {
      role: "AI software engineer",
      duration: "7 months",
      place: "NNCODE"
    },
    attributes: [
      {
        name: "Perseverance",
        description:
          "I strive to finish what I start, as I seamlessly immerse myself in work and don't give up easily.",
      },
      {
        name: "Mindfulness",
        description:
          'I have no harmful habits. A healthy mind and body are essential for optimal work. "Take care of your body. It\'s the only place you have to live." - Jim Rohn',
      },
      {
        name: "Ambition",
        description:
          "I am not afraid to put in the effort to achieve my goals and believe that a person must always set new challenges in order to grow.",
      },
      {
        name: "Diligence",
        description:
          'I complete tasks on time and with quality. I give my all for things that matter. "If something is worth doing, it\'s worth doing well." - Philip Stanhope.',
      },
    ],
  },
};

// Update page content based on selected language
function updateContent(language) {
  const content = translations[language];

  // Update section titles
  document.getElementById("job-title").textContent = content.title;
  document.getElementById("about-title").textContent = content.aboutTitle;
  document.getElementById("skills-title").textContent = content.skillsTitle;
  document.getElementById("contacts-title").textContent = content.contactsTitle;
  document.getElementById("education-title").textContent =
    content.educationTitle;
  document.getElementById("languages-title").textContent =
    content.languagesTitle;
  document.getElementById("attributes-title").textContent =
    content.attributesTitle;

  // Update about section
  const aboutContent = document.getElementById("about-content");
  if (aboutContent) {
    aboutContent.textContent = content.about;
  }

  // Update skills section
  const skillsList = document.getElementById("skills-list");
  if (skillsList) {
    skillsList.innerHTML = ""; // Clear existing skills
    content.skills.forEach((skill) => {
      // Add each skill to the list
      const li = document.createElement("li");
      li.textContent = skill;
      skillsList.appendChild(li);
    });
  }

  // Update education
  const educationContent = document.getElementById("education-content");
  if (educationContent) {
    educationContent.innerHTML = ""; // Clear existing content
    content.education.forEach((edu) => {
      const div = document.createElement("div"); // Create a new div for each education entry
      div.innerHTML = `
        <h3 class="text-xl">${edu.title}</h3>
        <p class="text-sm text-gray-600">
          ${edu.institution}, ${edu.date} <br />
          ${edu.gpa ? edu.gpa : ""}
        </p>`; // Populate the div with education details
      educationContent.appendChild(div);
    });
  }

  // Update languages section
  const languagesContent = document.getElementById("languages-content");
  if (languagesContent) {
    languagesContent.innerHTML = "";
    content.languages.forEach((lang) => {
      const h3 = document.createElement("h3"); // Create a new h3 for each language
      h3.className = "text-xl";
      h3.textContent = lang;
      languagesContent.appendChild(h3);
    });
  }

  // Update experience section
  const experienceTitle = document.getElementById("experience-title");
  if (experienceTitle) experienceTitle.textContent = content.experienceTitle;
  const experienceRole = document.getElementById("experience-role");
  if (experienceRole) experienceRole.textContent = content.experience.role;
  const experienceDuration = document.getElementById("experience-duration");
  if (experienceDuration) experienceDuration.textContent = content.experience.duration;
  const experiencePlace = document.getElementById("experience-place");
  if (experiencePlace) experiencePlace.textContent = content.experience.place;

  // Update attributes table
  const attributesThead = document.getElementById("attributes-thead");
  if (attributesThead) {
    attributesThead.innerHTML = `
      <tr>
        <th class="border px-4 py-2 text-left font-semibold w-1/5">
          ${content.attributesTableHeaders[0]}
        </th>
        <th class="border px-4 py-2 text-center font-semibold">
          ${content.attributesTableHeaders[1]}
        </th>
      </tr>`; // Populate the table header with attribute names
  }

  const attributesTable = document.getElementById("attributes-table");
  if (attributesTable) {
    attributesTable.innerHTML = ""; // Clear existing rows
    content.attributes.forEach((attr) => {
      // For each attribute, create a new row
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="border px-4 py-2">${attr.name}</td>
        <td class="border px-4 py-2 text-center">${attr.description}</td>`;
      // Populate the row with attribute details
      attributesTable.appendChild(tr);
    });
  }
}

// Handle language selection
document.querySelectorAll(".lang-option").forEach((option) => {
  option.addEventListener("click", (e) => {
    const selectedLanguage = e.target.dataset.lang; // Get the selected language data from the clicked element
    selectedLang.textContent = selectedLanguage; // Update the displayed selected language
    langMenu.classList.add("hidden"); // Hide the language menu with tailwind class
    updateContent(selectedLanguage);
  });
});

// Handle dropdown toggle and close
document.addEventListener("click", (e) => {
  if (langBtn.contains(e.target)) {
    // If the language button is clicked, toggle the dropdown
    langMenu.classList.toggle("hidden");
  } else if (!langMenu.contains(e.target)) {
    // If clicked outside the dropdown, close it
    langMenu.classList.add("hidden");
  }
});

// Modal functionality for profile picture
function openModal() {
  const modal = document.getElementById("profileModal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }
}

function closeModal() {
  const modal = document.getElementById("profileModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.style.display = "none";
    document.body.style.overflow = ""; // Restore scrolling
  }
}

// Close modal when clicking outside the image
document.addEventListener("click", (e) => {
  const modal = document.getElementById("profileModal");
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
