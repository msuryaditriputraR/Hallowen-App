/*=== SHOW MENU ===*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=== REMOVE MENU MOBILE WHEN CLICK MENU ===*/
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

/*=== HOME SWIPER ===*/
const homeSwiper = new Swiper('.home-swiper', {
    spaceBetween: 30,
    loop: 'true',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

/*=== CHANGE BACKGROUND HEADER ===*/
function scrollHeader() {
    const header = document.getElementById('header');

    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*=== NEW SWIPER ===*/

/*=== SCROLL SECTIONS ACTIVE LINK ===*/

/*=== SHOW SCROLL UP ===*/

/*=== SCROLL REVEAL ANIMATION ===*/
