/* Hamburguer Nav */
const hamburguer = document.getElementById("hamburguer");
const navBtns = document.getElementById("nav-btns");

function toggleMenu() {
  const navBtns = document.getElementById('nav-btns');
  navBtns.classList.toggle('show');
}

/*Slider*/

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

// Function to update the slide
function updateSlide(index) {
  const slidesContainer = document.querySelector('.slides');
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

// Event Listeners for Buttons
prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
  updateSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
  updateSlide(currentSlide);
});

// Automatic Transition
setInterval(() => {
  currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
  updateSlide(currentSlide);
}, 8000);

