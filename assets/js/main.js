/*=============== SHOW MENU ===============*/
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.remove("show-menu");
};

navLink.forEach((navElement) =>
  navElement.addEventListener("click", linkAction)
);

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.toggle("bg-header");
  }
};
window.addEventListener("scroll", bgHeader);

/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__image-2", 1.2, { opacity: 0, y: 200, delay: 0.1 });
gsap.from(".home__image-3", 1.2, { opacity: 0, y: 200, delay: 0.5 });
gsap.from(".home__data", 1.2, { opacity: 0, y: -60, delay: 1 });
gsap.from(".home__bird-1", 1.2, { opacity: 0, x: -80, delay: 1.1 });
gsap.from(".home__bird-2", 1.2, { opacity: 0, x: 80, delay: 1.2 });
gsap.from(".home__image-1", 1.2, { opacity: 0, y: 200, delay: 1.3 });
