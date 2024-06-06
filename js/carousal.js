document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    
    let currentIndex = 0;
    const intervalTime = 3000; // Time in milliseconds between slides
    let autoPlayInterval;

    prevButton.addEventListener('click', function (event) {
        event.preventDefault();
        clearInterval(autoPlayInterval);
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - 1;
        }
        updateCarousel();
        autoPlay();
    });

    nextButton.addEventListener('click', function (event) {
        event.preventDefault();
        clearInterval(autoPlayInterval);
        if (currentIndex < items.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
        autoPlay();
    });

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function autoPlay() {
        autoPlayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }, intervalTime);
    }

    autoPlay();
});