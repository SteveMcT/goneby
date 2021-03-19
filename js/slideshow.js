let slideIndex = 1;

$(document).ready(() => { showSlide(slideIndex) })

function showSlide(n) {
    let slides = $('.img-slider-block')

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }

    slides[slideIndex - 1].style.display = 'block'
}

function plusSlides(n) {
    showSlide(slideIndex += n);
}