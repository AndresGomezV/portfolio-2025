/* Hamburguer Nav */
function toggleMenu() {
  const navBtns = document.getElementById('nav-btns');
  const hamburger = document.getElementById('hamburger');
  if (!navBtns || !hamburger) return; // Validar existencia de elementos
  navBtns.classList.toggle('show');
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !isExpanded); // Alternar aria-expanded
}

/* Slider */
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselContainer = document.querySelector('.carousel');
let currentSlide = 0;
let startX = 0; // Posición inicial del toque
let endX = 0;   // Posición final del toque


// Validar si los elementos están presentes
if (slides.length && prevBtn && nextBtn && carouselContainer) {
  // Configurar autoplay con pausa al pasar el mouse
  let autoplay = setInterval(() => changeSlide(1), 6000);

  carouselContainer.addEventListener('mouseover', () => clearInterval(autoplay)); // Pausa al pasar el mouse
  carouselContainer.addEventListener('mouseout', () => {
    autoplay = setInterval(() => changeSlide(1), 8000); // Continuar autoplay
  });

  // Función para cambiar slides
  function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length; // Avanzar o retroceder con wrap-around
    updateSlide(currentSlide);
  }

  // Actualizar posición de la diapositiva en el contenedor
  function updateSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    if (slidesContainer) {
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }
  }

  // Botones de navegación (anterior y siguiente)
  prevBtn.addEventListener('click', () => changeSlide(-1)); // Slide anterior
  nextBtn.addEventListener('click', () => changeSlide(1));  // Siguiente slide
}

// Manejar eventos táctiles
carouselContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX; // Registrar la posición inicial del toque
});

carouselContainer.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX; // Registrar la posición mientras se mueve el dedo
});

carouselContainer.addEventListener('touchend', () => {
  const touchDelta = endX - startX; // Diferencia entre posición inicial y final
  if (touchDelta > 50) {
    // Deslizamiento hacia la derecha
    changeSlide(-1);
  } else if (touchDelta < -50) {
    // Deslizamiento hacia la izquierda
    changeSlide(1);
  }
  // Reiniciar variables
  startX = 0;
  endX = 0;
});




// Cambiar Tema (Oscuro/Claro)
const toggleTheme = () => {
  const currentTheme = document.documentElement.classList.contains('dark-mode') ? 'light' : 'dark';

  // Alternar clase para toda la página
  document.documentElement.classList.toggle('dark-mode', currentTheme === 'dark');

  // Guardar la elección del tema en localStorage
  localStorage.setItem('theme', currentTheme);
};

// Obtener elección previa del usuario
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.classList.toggle('dark-mode', savedTheme === 'dark');
}

// Event Listener para el botón de cambio de tema
document.querySelector('#theme-toggle').addEventListener('click', toggleTheme);