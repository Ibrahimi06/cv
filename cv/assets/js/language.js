const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",

    hero_title: "Hi, I'm Xhafer Ibrahimi",
    hero_subtitle: "Computer Science & Engineering Student – Web Developer",
    btn_projects: "View Projects",
    btn_contact: "Contact Me",

    featured_projects: "Featured Projects",
    featured_desc: "Showcase of my best work across different technologies",

    skills_preview: "Core Competencies",
    skills_desc: "A diverse skill set spanning frontend, backend, and database technologies",

    about_title: "About Me",
    about_text:
      "I am a Computer Science and Engineering student with a strong passion for web development and modern technologies. I specialize in building responsive, user-friendly web applications and continuously improve my skills through learning and practice.",

    education_title: "Education",
    edu_uni: "Computer Science & Engineering – Isa Boletini University",
    edu_high: "Natural Sciences – Xhevdet Doda High School",

    cert_title: "Certifications",

    skills_title: "Skills",
    skills_subtitle: "Technologies and tools I work with",
    skills_frontend: "Frontend",
    skills_backend: "Backend",
    skills_database: "Databases",
    skills_tools: "Tools & Technologies",

    projects_title: "Projects",
    projects_subtitle: "Some of the projects I built and published on GitHub.",

    contact_title: "Contact Me",
    contact_subtitle: "Have a question or want to work together? Send me a message!",
    contact_name: "Your Name",
    contact_email: "Your Email",
    contact_message: "Message",
    contact_send: "Send Message",

    highlight_web: "Web Development",
    highlight_web_desc: "Frontend & Backend",

    highlight_db: "Databases",
    highlight_db_desc: "PostgreSQL / SQL",

    highlight_student: "CS Student",
    highlight_student_desc: "Software & Systems",

    footer_text: "© 2026 Xhafer Ibrahimi"
  },

  sq: {
    nav_home: "Kreu",
    nav_about: "Rreth Meje",
    nav_projects: "Projektet",
    nav_skills: "Aftësitë",
    nav_contact: "Kontakt",

    hero_title: "Përshëndetje, jam Xhafer Ibrahimi",
    hero_subtitle: "Student i Shkencave Kompjuterike – Web Developer",
    btn_projects: "Shiko Projektet",
    btn_contact: "Më Kontakto",

    featured_projects: "Projektet e Zgjedhura",
    featured_desc: "Shfaqje e punës më të mirë nëpër teknologji të ndryshme",

    skills_preview: "Kompetencat Themelore",
    skills_desc: "Një seri e larmishme aftësish që përfshijnë frontend, backend dhe teknologji databaze",

    about_title: "Rreth Meje",
    about_text:
      "Jam student i Shkencave Kompjuterike dhe Inxhinierisë me pasion të madh për zhvillimin e uebit dhe teknologjitë moderne. Specializohem në krijimin e aplikacioneve ueb të përgjegjshme dhe miqësore për përdoruesit.",

    education_title: "Arsimi",
    edu_uni: "Shkenca Kompjuterike & Inxhinieri – Universiteti Isa Boletini",
    edu_high: "Shkenca Natyrore – Gjimnazi Xhevdet Doda",

    cert_title: "Certifikime",

    skills_title: "Aftësitë",
    skills_subtitle: "Teknologjitë dhe mjetet që përdor",
    skills_frontend: "Frontend",
    skills_backend: "Backend",
    skills_database: "Databaza",
    skills_tools: "Mjete & Teknologji",

    projects_title: "Projektet",
    projects_subtitle: "Disa nga projektet që kam ndërtuar dhe publikuar në GitHub.",

    contact_title: "Kontakt",
    contact_subtitle: "Keni një pyetje apo dëshironi të bashkëpunoni? Dërgoni një mesazh!",
    contact_name: "Emri Juaj",
    contact_email: "Email-i Juaj",
    contact_message: "Mesazhi",
    contact_send: "Dërgo Mesazhin",

    highlight_web: "Zhvillim Uebi",
    highlight_web_desc: "Frontend & Backend",

    highlight_db: "Databaza",
    highlight_db_desc: "PostgreSQL / SQL",

    highlight_student: "Student i SHK",
    highlight_student_desc: "Softuer & Sisteme",

    footer_text: "© 2026 Xhafer Ibrahimi"
  },

  de: {
    nav_home: "Start",
    nav_about: "Über mich",
    nav_projects: "Projekte",
    nav_skills: "Fähigkeiten",
    nav_contact: "Kontakt",

    hero_title: "Hallo, ich bin Xhafer Ibrahimi",
    hero_subtitle: "Student der Informatik – Webentwickler",
    btn_projects: "Projekte ansehen",
    btn_contact: "Kontakt aufnehmen",

    featured_projects: "Ausgewählte Projekte",
    featured_desc: "Meine beste Arbeit aus verschiedenen Technologien",

    skills_preview: "Kernkompetenzen",
    skills_desc: "Ein vielfältiges Skillset über Frontend, Backend und Datenbanktechnologien",

    about_title: "Über mich",
    about_text:
      "Ich bin Student der Informatik und Ingenieurwissenschaften mit einer großen Leidenschaft für Webentwicklung und moderne Technologien. Ich entwickle benutzerfreundliche und responsive Webanwendungen.",

    education_title: "Ausbildung",
    edu_uni: "Informatik & Ingenieurwesen – Universität Isa Boletini",
    edu_high: "Naturwissenschaften – Xhevdet Doda Gymnasium",

    cert_title: "Zertifikate",

    skills_title: "Fähigkeiten",
    skills_subtitle: "Technologien und Werkzeuge, mit denen ich arbeite",
    skills_frontend: "Frontend",
    skills_backend: "Backend",
    skills_database: "Datenbanken",
    skills_tools: "Tools & Technologien",

    projects_title: "Projekte",
    projects_subtitle: "Einige der Projekte, die ich gebaut und auf GitHub veröffentlicht habe.",

    contact_title: "Kontakt",
    contact_subtitle: "Haben Sie eine Frage oder möchten Sie zusammenarbeiten? Senden Sie mir eine Nachricht!",
    contact_name: "Ihr Name",
    contact_email: "Ihre E-Mail",
    contact_message: "Nachricht",
    contact_send: "Nachricht senden",

    highlight_web: "Webentwicklung",
    highlight_web_desc: "Frontend & Backend",

    highlight_db: "Datenbanken",
    highlight_db_desc: "PostgreSQL / SQL",

    highlight_student: "Informatikstudent",
    highlight_student_desc: "Software & Systeme",

    footer_text: "© 2026 Xhafer Ibrahimi"
  }
};


const langLabel = document.getElementById("langLabel");

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
  if (langLabel) langLabel.textContent = lang.toUpperCase();
  localStorage.setItem("lang", lang);
}

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

setLanguage(localStorage.getItem("lang") || "en");





