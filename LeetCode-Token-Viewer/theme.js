const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.getElementById("themeLabel");

// Load saved theme or default to dark
document.body.classList.add(localStorage.getItem("theme") || "dark");
themeToggle.checked = document.body.classList.contains("light");
themeLabel.textContent = themeToggle.checked ? "Light" : "Dark";

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    themeLabel.textContent = "Light";
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    themeLabel.textContent = "Dark";
    localStorage.setItem("theme", "dark");
  }
});
