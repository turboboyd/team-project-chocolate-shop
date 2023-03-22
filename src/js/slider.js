$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    variableWidth: true,
    speed:1000,
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