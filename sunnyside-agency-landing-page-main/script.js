const ham_icon = document.querySelector(".ham_icon");
const nav = document.querySelector(".nav");

ham_icon.addEventListener("click", function () {
  nav.classList.toggle("negative");
});
