// Get theme toggle button
const themeToggle = document.getElementById("themeToggle");

// Load saved theme from localStorage or default to light
let currentTheme = localStorage.getItem("theme") || "light";
setTheme(currentTheme);

// Function to apply theme
function setTheme(theme) {
  const body = document.body;
  if (theme === "dark") {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    if (themeToggle) themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
  } else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    if (themeToggle) themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
  }
  localStorage.setItem("theme", theme);
  currentTheme = theme;
}

// Toggle theme on button click
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    if (currentTheme === "light") setTheme("dark");
    else setTheme("light");
  });
}

// Optional: auto-detect system theme on first visit
if (!localStorage.getItem("theme")) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
}
