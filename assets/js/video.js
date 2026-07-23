const videoCards = document.querySelectorAll(".video-card");

const modal = document.getElementById("video-modal");

const player = document.getElementById("video-player");

const closeBtn = document.getElementById("close-video");

videoCards.forEach(card => {

    card.addEventListener("click", () => {

        const videoId = card.dataset.video;

        player.innerHTML = `
            <iframe
                src="https://www.youtube.com/embed/${videoId}?autoplay=1"
                allow="autoplay; encrypted-media"
                allowfullscreen>
            </iframe>
        `;

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

function closeVideo(){

    modal.classList.remove("active");

    player.innerHTML = "";

    document.body.style.overflow = "";

}

closeBtn.addEventListener("click", closeVideo);

modal.querySelector(".modal-overlay").addEventListener("click", closeVideo);

document.addEventListener("keydown", e=>{

    if(e.key==="Escape"){

        closeVideo();

    }

});