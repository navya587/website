// 1. Hero Carousel Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// 2. Category Click Redirection
// This selects all circular icons and sends them to the Necklace Page
const categories = document.querySelectorAll('.category');
categories.forEach(category => {
    category.addEventListener('click', () => {
        window.location.href = 'listing.html'; // Ensure you have this file created
    });
});

// 3. Search Bar Alert (Basic Functionality)
const searchBtn = document.querySelector('.search-container button');
searchBtn.addEventListener('click', () => {
    const query = document.querySelector('.search-container input').value;
    if(query) alert('Searching for: ' + query);
});