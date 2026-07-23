/* ==========================================================
   HERO SLIDER
========================================================== */

const slides = document.querySelectorAll(".hero-slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;
let autoSlide;

/* ==========================================================
   SHOW SLIDE
========================================================== */

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

/* ==========================================================
   NEXT
========================================================== */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

/* ==========================================================
   PREVIOUS
========================================================== */

function prevSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

}

/* ==========================================================
   AUTO PLAY
========================================================== */

function startSlider() {

    autoSlide = setInterval(() => {

        nextSlide();

    }, 6000);

}

/* ==========================================================
   STOP
========================================================== */

function stopSlider() {

    clearInterval(autoSlide);

}

/* ==========================================================
   BUTTONS
========================================================== */

nextBtn.addEventListener("click", () => {

    stopSlider();

    nextSlide();

    startSlider();

});

prevBtn.addEventListener("click", () => {

    stopSlider();

    prevSlide();

    startSlider();

});

/* ==========================================================
   PAUSE ON HOVER
========================================================== */

const hero = document.querySelector(".hero-slider");

hero.addEventListener("mouseenter", stopSlider);

hero.addEventListener("mouseleave", startSlider);

/* ==========================================================
   START
========================================================== */

showSlide(currentSlide);

startSlider();