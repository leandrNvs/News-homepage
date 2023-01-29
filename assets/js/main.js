const openButton = document.querySelector(".header__open-navbar");
const closeButton = document.querySelector(".navbar__close");
const navbar = document.querySelector(".navbar");

openButton.addEventListener("click", () => {
  navbar.style.right = "0px";
});

closeButton.addEventListener("click", () => {
  navbar.style.right = "-100%";
});
