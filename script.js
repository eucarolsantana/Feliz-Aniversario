// Função para mostrar a surpresa
function revealSurprise() {
    document.getElementById("hidden-message").style.display = "block";
}

// Contagem regressiva
const targetDate = new Date("2025-04-09T00:00:00").getTime();

const timerInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "É o seu grande dia! 🎉";
    }
}, 1000);
// Slideshow de fotos
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Troca de imagem a cada 3 segundos
}
// Código para mostrar o vídeo ao clicar no botão
document.getElementById("show-video-btn").addEventListener("click", function() {
    document.getElementById("video-container").style.display = "block";  // Exibe o vídeo
    document.getElementById("show-video-btn").style.display = "none";   // Esconde o botão
});


