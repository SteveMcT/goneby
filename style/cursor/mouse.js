$(document).ready(() => {
    $(document).mousemove(function(event) {
        $('.dl-cursor').css({
            transform: 'translate(' + (event.clientX - 3) + 'px,' + (event.clientY - 3) + 'px)',
            visibility: 'inherit'
        });
        $('.dl-fill').css({
            transform: 'translate(' + (event.clientX - $('.dl-fill').width() / 2) + 'px,' + (event.clientY - $('.dl-fill').height() / 2) + 'px)',
            visibility: 'inherit'
        });
    });
    $('button, .nav-p, #header-logo').mouseenter(() => {
        $('.dl-fill').addClass('cursor-grow')
    })
    $('button, .nav-p, #header-logo').mouseleave(() => {
        $('.dl-fill').removeClass('cursor-grow')
    })
    $(document).mouseleave(() => {
        $('.dl-cursor').css('visibility', 'hidden');
        $('.dl-fill').css('visibility', 'hidden');
    });
})