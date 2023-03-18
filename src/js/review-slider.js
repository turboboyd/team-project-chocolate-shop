$(document).ready(function(){
$('.review-slider').slick({
    arrows:false,
    dots:true,
    slidesToShow:3,
    speed:1000,
    infinite:false,
    responsive:[
{
  breakpoint:1200,
  settings: {
    slidesToShow:2
   }
},
{            
  breakpoint:768,
  settings: {
    slidesToShow:1
  }
} ]    
});
})