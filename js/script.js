let noCount = 0;
let noScale = 1;

const noBtn = document.querySelector(".no");
const response = document.getElementById("response");
const failSound = document.getElementById("failSound");
const yesSound = document.getElementById("yesSound");

let failPlayed = false;
let yesPlayed = false;


function isMobile() {
    return window.innerWidth <= 600;
}

function handleNoInteraction() {
    if (!failPlayed) {
    failSound.currentTime = 0;
    failSound.play();
    failPlayed = true;
}

    noCount++;

    noScale -= 0.15;
    if (noScale < 0.2) noScale = 0.2;

    
    const maxMove = isMobile() ? 120 : 300;
    const offsetX = (Math.random() - 0.5) * maxMove;
    const offsetY = (Math.random() - 0.5) * maxMove;

    noBtn.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${noScale})`;

    if (noCount < 5) {
        response.innerText = " კარგად დაფიქრდი... 😌";
    }

    if (noCount === 5) {
    response.innerText = " როგორც ჩანს, არჩევანი არ გაქვს. 😈";
    noBtn.style.opacity = "0.2";

    const yesBtn = document.querySelector(".yes");
    yesBtn.classList.add("pulse");
}

}


noBtn.addEventListener("mouseover", function () {
    if (!isMobile()) {
        handleNoInteraction();
    }
});


noBtn.addEventListener("click", function () {
    if (isMobile()) {
        handleNoInteraction();
    }
});

function yesClick() {
    const yesBtn = document.querySelector(".yes");

    yesBtn.classList.remove("pulse");

    if (!yesPlayed) {
        yesSound.currentTime = 0;
        yesSound.play();
        yesPlayed = true;
    }

    response.innerText = " სწორი არჩევანია! 💘 ";
    createHearts();
}


function createHearts() {
    const card = document.querySelector(".card");
    const range = isMobile() ? 300 : 800;

    for (let i = 0; i < 125; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "❤️";

        const x = (Math.random() - 0.5) * range + "px";
        const y = (Math.random() - 0.5) * range + "px";

        heart.style.setProperty("--x", x);
        heart.style.setProperty("--y", y);

        heart.style.left = "50%";
        heart.style.top = "60%";

        card.appendChild(heart);
        setTimeout(() => heart.remove(), 1500);
    }
}
