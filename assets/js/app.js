/* ==========================================================
   FEATURED VIDEO MODAL
========================================================== */

const videoModal = document.getElementById("videoModal");
const youtubePlayer = document.getElementById("youtubePlayer");

const openVideo = document.getElementById("openVideo");
const watchVideo = document.getElementById("watchVideo");

const closeVideo = document.getElementById("closeVideo");
const overlay = document.querySelector(".video-overlay");

/* ==========================================================
   OPEN VIDEO
========================================================== */

function openModal(video){

    youtubePlayer.src = video;

    videoModal.classList.add("active");

    document.body.style.overflow = "hidden";

}

/* ==========================================================
   CLOSE VIDEO
========================================================== */

function closeModal(){

    videoModal.classList.remove("active");

    youtubePlayer.src = "";

    document.body.style.overflow = "";

}

/* ==========================================================
   EVENTS
========================================================== */

openVideo.addEventListener("click", () => {

    openModal(openVideo.dataset.video);

});

watchVideo.addEventListener("click", () => {

    openModal(watchVideo.dataset.video);

});

closeVideo.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

/* ==========================================================
   ESC KEY
========================================================== */

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        closeModal();

    }

});