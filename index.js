const modeToggle = document.getElementById("modeToggle");
const body = document.querySelector("body");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});