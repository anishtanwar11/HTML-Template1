// ============================= FOR NAV LINKS 1 =============================
const navToggle = document.querySelector("#navToggle");
const navItem = document.querySelector(".nav_subitem");

        navToggle.onclick = function(){
            navItem.classList.toggle('active')
        }
        
// ============================= FOR NAV LINKS 2 =============================
const NavToggle = document.querySelector("#NavToggle");
const NavItem = document.querySelector(".Nav");

        NavToggle.onclick = function(){
            NavItem.classList.toggle('active')
        }

// ============================= FOR MENU TOGGLE BUTTON ======================
let menuToggle = document.querySelector('.menuToggle');
let navigation = document.querySelector('.nav_list');
    menuToggle.onclick = function(){
        navigation.classList.toggle('active')
    }

// ============================= FOR SWIPPER SLIDER =========================
var swiper = new Swiper(".card-box", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centeredSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    750: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  },
});

