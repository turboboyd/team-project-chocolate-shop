$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
        {
            breakpoint: 375,
            settings: {
                variableWidth: false,
                slidesToShow: 1,
            }
        },
    ]
});
})