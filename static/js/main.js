let swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

let tilt = document.querySelectorAll(".rounded");
VanillaTilt.init(tilt, {
  max: 3,
  speed: 500,
  scale: 1.05,
  glare: true,
  "max-glare": 0.3,
});

var typed = new Typed(".type", {
  strings: ["a Web Developer.", "a Designer.", "an Engineer."],
  smartBackspace: true,
  startDelay: 1000,
  typeSpeed: 130,
  backDelay: 1000,
  backSpeed: 60,
  loop: true,
});



