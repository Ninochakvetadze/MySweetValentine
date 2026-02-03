let offsetX = 0;
let offsetY = 0;

function moveNo() {
    const maxMove = 300;
    offsetX = (Math.random() - 0.5) * maxMove;
    offsetY = (Math.random() - 0.5) * maxMove;

    const noBtn = document.querySelector(".no");
    noBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

function yesClick() {
    document.getElementById("response").innerText = "პასუხი სწორია";
    createHearts();
}

function createHearts() {
    const card = document.querySelector(".card");

    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "❤️";

        const x = (Math.random() - 0.5) * 400 + "px";
        const y = (Math.random() - 0.5) * 400 + "px";

        heart.style.setProperty("--x", x);
        heart.style.setProperty("--y", y);

        heart.style.left = "50%";
        heart.style.top = "60%";

        card.appendChild(heart);
        setTimeout(() => heart.remove(), 1500);
    }
}

