let currentSlide = 0;

function showSlides() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    // Ajusta a posição do slider para mostrar a imagem atual
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    // Altera o slide atual baseado na direção
    currentSlide += direction;

    // Se o índice atual for o último, reinicie para o primeiro
    if (currentSlide < 0) {
        currentSlide = 0; // Mantém no primeiro slide
    } else if (currentSlide >= totalSlides) {
        currentSlide = totalSlides - 1; // Mantém no último slide
    }

    showSlides();
}

// Inicia o slider
setInterval(() => {
    if (currentSlide < document.querySelector('.slides').children.length - 1) {
        changeSlide(1);
    }
}, 5000); // Altera a cada 5 segundos

// Inicializa o primeiro slide
showSlides();
