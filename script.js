const hamburger = document.getElementById("hamburger");
const links = document.querySelector(".links");

hamburger.addEventListener("click", () => {
    links.classList.toggle("active");
});

const themeBtn = document.getElementById("toggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});