const toggleBtn = document.getElementById("themeToggle");
const icon = toggleBtn.querySelector("i");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);

toggleBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);

  icon.className = next === "dark" ? "bi bi-sun" : "bi bi-moon";
});
