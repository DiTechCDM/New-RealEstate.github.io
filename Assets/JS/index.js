var navbar = document.querySelector('nav')

window.onscroll = function () {

    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}


// OWL CAROUSEL SCRIPT
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1080: {
            items: 2
        },
        1081: {
            items: 3
        },
    }
})