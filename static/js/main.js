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

let education = document.getElementById("education");
let work = document.getElementById("work");
let educationheader = document.getElementById("educationheader");
let workheader = document.getElementById("workheader");
workheader.style.color = "var(--secondary)";
educationheader.style.color = "var(--main-color)";

educationheader.addEventListener("click", () => {
  let condition1 = work.classList.contains("experience-inactive");
  if (!condition1) {
    education.classList.remove("experience-inactive");
    work.classList.add("experience-inactive");
    workheader.style.color = "var(--secondary)";
    educationheader.style.color = "var(--main-color)";
  }
});
workheader.addEventListener("click", () => {
  let condition2 = education.classList.contains("experience-inactive");
  if (!condition2) {
    work.classList.remove("experience-inactive");
    education.classList.add("experience-inactive");
    educationheader.style.color = "var(--secondary)";
    workheader.style.color = "var(--main-color)";
  }
});

var typed = new Typed(".type", {
  strings: ["a Developer.", "a Designer.", "an Engineer."],
  smartBackspace: true,
  startDelay: 1000,
  typeSpeed: 130,
  backDelay: 1000,
  backSpeed: 60,
  loop: true,
});

let hamb = document.getElementById("hamb");
let mobile_nav = document.getElementById("mobile-nav");
let navHidden = true;

hamb.addEventListener("click", () => {
  if (mobile_nav.style.display === "flex") {
    mobile_nav.style.display = "none";
    navHidden = true;
  } else {
    mobile_nav.style.display = "flex";
    navHidden = false;
  }
});

var lastScrollTop;
navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && navHidden) {
    navbar.style.top = '-50px';
  }
  else {
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;
});




