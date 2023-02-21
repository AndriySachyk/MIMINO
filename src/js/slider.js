// const slider = document.querySelector('.swiper');

// let mySwiper = new Swiper(slider, {
//     sliderPerView: 2,
//     spaceBetween: 10,
// });

const detailsSwiper = new Swiper(document.getElementById('detailsSwiper'), {
  // Optional parameters

  slidesPerView: "auto",
  spaceBetween: 86,
  loop: true,
  sliderPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: document.getElementById('swiper-button-next'),
    prevEl: document.getElementById('swiper-button-prev'),
  },
});

const mobileDetailsSwiper = new Swiper(document.getElementById('mobDetailsSwiper'), {
  // Optional parameters

  slidesPerView: "auto",
  spaceBetween: 40,
  loop: true,
  sliderPerView: 2,

  // Navigation arrows
  navigation: {
    nextEl: document.getElementById('mob-swiper-button-next'),
    prevEl: document.getElementById('mob-swiper-button-prev'),
  },
});

const deskDetailsSwiper = new Swiper(document.getElementById('deskDetailsSwiper'), {
  // Optional parameters

  slidesPerView: "auto",
  spaceBetween: 40,
  loop: true,
  sliderPerView: 2,

  // Navigation arrows
  navigation: {
    nextEl: document.getElementById('swiper-button-next'),
    prevEl: document.getElementById('swiper-button-prev'),
  },
});

const aboutSwiper = new Swiper(document.getElementById('aboutSwiper'), {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 80,
  sliderPerView: 3,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: document.getElementById('about-swiper-button-next'),
    prevEl: document.getElementById('about-swiper-button-prev'),
  },
});


const descriptionRestSwiper = new Swiper(document.getElementById('descriptionRestSwiper'), {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 80,
  sliderPerView: 3,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: document.getElementById('description-rest-swiper-button-next'),
    prevEl: document.getElementById('description-rest-swiper-button-prev'),
  },
});
