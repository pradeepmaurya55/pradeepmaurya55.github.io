import { skillsData, projectsData, experienceData } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  setupMenu();
  renderSkills();
  renderProjects();
  renderExperience();
  lucide.createIcons();
});

// Handle the mobile menu
function setupMenu() {
  const menuBtn = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  if (!menuBtn || !navLinks) return;

  const updateIcon = () => {
    let menuIcon = menuBtn.querySelector("svg");
    if (menuIcon) {
      menuIcon.setAttribute(
        "data-lucide",
        navLinks.classList.contains("active") ? "x" : "menu"
      );
      lucide.createIcons();
    }
  };

  const closeMenu = () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      updateIcon();
    }
  };

  menuBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    navLinks.classList.toggle("active");
    updateIcon();
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener("scroll", closeMenu);
}

// Render skills
function renderSkills() {
  const skillsContainer = document.querySelector(".skills-grid");
  if (!skillsContainer) return;

  skillsContainer.innerHTML = skillsData
    .map(
      (skill) => `
      <div class="skill-card">
        <i data-lucide="${skill.icon}" class="skill-icon green"></i>
        <h3>${skill.title}</h3>
        <p>${skill.description}</p>
      </div>
    `
    )
    .join("");
}

// Render projects
function renderProjects() {
  const projectsContainer = document.querySelector(".projects-grid");
  if (!projectsContainer) return;

  projectsContainer.innerHTML = projectsData
    .map(
      (project) => `
      <div class="project-card">
        <i data-lucide="${project.icon}" class="project-icon green"></i>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech-tags">
          ${project.tech
            .map((tag) => `<span class="tag green">${tag}</span>`)
            .join("")}
        </div>
        <a href="${project.link}" target="_blank" class="project-link">
          <i data-lucide="github"></i> View on GitHub
        </a>
      </div>
    `
    )
    .join("");
}

// Render experience timeline
function renderExperience() {
  const experienceContainer = document.querySelector(".timeline");
  if (!experienceContainer) return;

  experienceContainer.innerHTML = experienceData
    .map(
      (exp, index) => `
      <div class="timeline-item ${index % 2 === 0 ? "left" : "right"}">
        <div class="timeline-content">
          <h3>${exp.title}</h3>
          <p class="company">${exp.company}</p>
          <p class="duration">${exp.duration}</p>
        </div>
        <div class="timeline-icon">
          <i data-lucide="briefcase"></i>
        </div>
      </div>
    `
    )
    .join("");
}
