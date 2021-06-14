// SLICK SLIDER
$('.main_image').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
    {
        breakpoint: 768,
            settings: "unslick"
        }
    ]
})