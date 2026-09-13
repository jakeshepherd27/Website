const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  menuButton.classList.toggle("open");
  menu.classList.toggle("open");
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    menuButton.classList.remove("open");
    menu.classList.remove("open");
  }
});
