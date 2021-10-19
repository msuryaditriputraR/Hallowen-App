/*=== SHOW MENU ===*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
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

/*=== REMOVE MENU MOBILE WHEN CLICK MENU ===*/
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

/*=== HOME SWIPER ===*/

/*=== CHANGE BACKGROUND HEADER ===*/

/*=== NEW SWIPER ===*/

/*=== SCROLL SECTIONS ACTIVE LINK ===*/

/*=== SHOW SCROLL UP ===*/

/*=== SCROLL REVEAL ANIMATION ===*/
