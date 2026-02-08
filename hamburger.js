// Slide-out menu for mobile
const hamburgerBtn = document.querySelector(".hamburger-btn");
const sideMenu = document.getElementById("sideMenu");
const body = document.body;

hamburgerBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("open");   // slides menu in/out
  body.classList.toggle("menu-open");  // disables body scroll when menu is open
});
