/* ==========================================================
   NAVIGATION
========================================================== */

const header = document.getElementById("header");

const menuToggle = document.querySelector(".menu-toggle");

const closeMenu = document.querySelector(".close-menu");

const mobileMenu = document.querySelector(".mobile-menu");

const mobileOverlay = document.querySelector(".mobile-overlay");

const mobileLinks = document.querySelectorAll(".mobile-menu a");

/* ==========================================================
   OPEN MENU
========================================================== */

function openMobileMenu(){

    mobileMenu.classList.add("active");

    mobileOverlay.classList.add("active");

    document.body.style.overflow = "hidden";

}

/* ==========================================================
   CLOSE MENU
========================================================== */

function closeMobileMenu(){

    mobileMenu.classList.remove("active");

    mobileOverlay.classList.remove("active");

    document.body.style.overflow = "";

}

/* ==========================================================
   BUTTON EVENTS
========================================================== */

menuToggle.addEventListener("click", openMobileMenu);

closeMenu.addEventListener("click", closeMobileMenu);

mobileOverlay.addEventListener("click", closeMobileMenu);

/* ==========================================================
   CLOSE WHEN LINK IS CLICKED
========================================================== */

mobileLinks.forEach(link=>{

    link.addEventListener("click", closeMobileMenu);

});

/* ==========================================================
   ESC KEY
========================================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeMobileMenu();

    }

});

/* ==========================================================
   RESET ON DESKTOP
========================================================== */

window.addEventListener("resize",()=>{

    if(window.innerWidth > 1100){

        closeMobileMenu();

    }

});

/* ==========================================================
   HEADER SCROLL EFFECT
========================================================== */

window.addEventListener("scroll",()=>{

    if(window.scrollY > 40){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});