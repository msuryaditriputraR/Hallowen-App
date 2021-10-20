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
const newSwiper = new Swiper('.new-swiper', {
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: 'true'
});

/*=== SCROLL SECTIONS ACTIVE LINK ===*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight,
            sectionTop = section.offsetTop - 50,
            sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector('.nav__menu a[href*=' + sectionId + ']')
                .classList.add('active-link');
        } else {
            document
                .querySelector('.nav__menu a[href*=' + sectionId + ']')
                .classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*=== SHOW SCROLL UP ===*/

/*=== SCROLL REVEAL ANIMATION ===*/
