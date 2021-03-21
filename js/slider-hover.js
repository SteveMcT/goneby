//Animation of Mobile 
$(document).ready(() => {
    $('#img-slider').mousemove(function(e) {
        let x = e.pageX;
        let y = e.pageY;
        $('.img-slider-image').css('transform', 'rotateX(' + -y / 16000 + 'deg) rotateY(' + x / 16000 + 'deg)')
    })
    $('#img-slider').mouseleave(() => {
        $('.img-slider-image').css('transform', 'rotate(0)')
    });
})