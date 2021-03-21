let slideIndex = 1;

function showSlide(n, number) {
    let slides = $('.img-slider-block')

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
        slides[i].style.opacity = '0'
    }

    let element = slides[slideIndex - 1]

    // console.log(n)

    slides[slideIndex - 1].style.right = number == 1 ? '-18%' : '18%'
    slides[slideIndex - 1].style.display = 'block'
    setTimeout(() => {
        slides[slideIndex - 1].style.right = '0%'
        slides[slideIndex - 1].style.opacity = '100%'
    }, 100)

}

function plusSlides(n) {
    showSlide(slideIndex += n, n);
}