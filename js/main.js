let mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.arrow'
    },
    breakpoints: {
        540: {
            slidesPerView: 2
        }
    }
});

let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.header');

menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('header-active')
});
