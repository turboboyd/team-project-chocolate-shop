$(document).ready(function(){
    $('.buynow-slider').slick({
        arrows: false,
        dots: false,
        variableWidth: true,
        speed: 1000,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    variableWidth: false,
                    slidesToShow: 1,
                }
            },
        ]
});
})