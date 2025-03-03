import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

// Initialize Swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: "auto",
  initialSlide: 2,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: false,
  effect:'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: -100,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: -100,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: -100,
    },
  },
});
