let currentImageIndex = 0;
const images = document.querySelectorAll(".slider-image");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

function handleNextButtonClick() {
    currentImageIndex++;
    if (currentImageIndex > images.length - 1) {
        currentImageIndex = 0;
    }
    updateSlider();
}

function handlePrevButtonClick() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updateSlider();
}

function updateSlider() {
    images.forEach((img, index) => {
        if (index === currentImageIndex) {
            img.classList.add("active");
        } else {
            img.classList.remove("active");
        }
    });
}

// Init Auth Images Scroll
let interval = null;
const INTERVAL_DELAY = 3000;
function initAutoScroll() {
    interval = setInterval(handleNextButtonClick, INTERVAL_DELAY);
}
initAutoScroll();

prevButton.addEventListener("click", () => {
    clearInterval(interval);
    handlePrevButtonClick();
    initAutoScroll();
});


nextButton.addEventListener("click", () => {
    clearInterval(interval);
    handleNextButtonClick();
    initAutoScroll();
});

updateSlider();