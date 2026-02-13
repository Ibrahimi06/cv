const projects = [
  {
    title: "ETHO",
    description: {
      en: "A modern web application built with HTML/CSS/JavaScript. Features a responsive design and interactive user interface.",
      sq: "Një aplikacion web modern i ndërtuar me HTML/CSS/JavaScript. Ka dizajn të përgjegjshëm dhe ndërfaqe interaktive.",
      de: "Eine moderne Webanwendung mit HTML/CSS/JavaScript. Verfügt über ein responsives Design und eine interaktive Benutzeroberfläche."
    },
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Ibrahimi06/ETHO",
    demo: "https://etho-pr.vercel.app"
  },
  {
    title: "ECommerceBackend",
    description: {
      en: "A robust e-commerce backend system built with C#. Provides complete API functionality for online shopping platforms.",
      sq: "Një sistem i fortë backendit e-commerce i ndërtuar me C#. Ofron funksionalitetin e plotë të API për platforma të tregtisë elektronike.",
      de: "Ein robustes E-Commerce-Backend-System, gebaut mit C#. Bietet vollständige API-Funktionalität für Online-Shopping-Plattformen."
    },
    tech: ["C#", ".NET", "API"],
    github: "https://github.com/Ibrahimi06/ECommerceBackend",
    demo: ""
  },
  {
    title: "Travel Agency Database System",
    description: {
      en: "A comprehensive database system for travel agencies. Manages bookings, customer information, and travel packages efficiently.",
      sq: "Një sistem i plotë bazodati për agjenci udhëtimi. Menaxhon rezervimet, informacionin e klientit dhe pakete udhëtimi.",
      de: "Ein umfassendes Datenbanksystem für Reisebüros. Verwaltet Buchungen, Kundeninformationen und Reisepakete effizient."
    },
    tech: ["Database", "Management System", "SQL"],
    github: "https://github.com/Ibrahimi06/Travel-Agency-Database-System",
    demo: ""
  },
  {
    title: "UMIB Repo",
    description: {
      en: "University management information system repository. Provides web-based solutions for academic institutions.",
      sq: "Ruajtje sistemi të menaxhimit të informacionit të universitetit. Ofron zgjidhje të bazuara në web për institucionet akademike.",
      de: "Repository für das Universitätsverwaltungsinformationssystem. Bietet webbasierte Lösungen für akademische Institutionen."
    },
    tech: ["HTML", "Web Development", "Information Systems"],
    github: "https://github.com/Ibrahimi06/umib-repo",
    demo: ""
  }
];

function loadProjects() {
  const container = document.getElementById("projectsContainer");
  const lang = localStorage.getItem("lang") || "en";
  container.innerHTML = "";

  projects.forEach(p => {
    const techBadges = p.tech.map(t => `<span class="tech-badge">${t}</span>`).join("");
    const card = document.createElement("div");
    card.classList.add("col-md-6", "col-lg-4");
    card.innerHTML = `
      <div class="project-card h-100 d-flex flex-column">
        <div>
          <h5 class="fw-bold">${p.title}</h5>
          <p class="flex-grow-1">${p.description[lang]}</p>
          <div class="tech-container">${techBadges}</div>
        </div>
        <div class="project-links">
          <a href="${p.github}" target="_blank" class="btn btn-sm btn-outline-primary me-2">
            <i class="bi bi-github"></i> GitHub
          </a>
          ${p.demo && p.demo.trim() ? `<a href="${p.demo}" target="_blank" class="btn btn-sm btn-primary"><i class="bi bi-link-45deg"></i> Live</a>` : ""}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Run after page load
document.addEventListener("DOMContentLoaded", loadProjects);
