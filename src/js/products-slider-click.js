// $(document).ready(function(){
//     $('.products-slider').slick({
//         arrows: false,
//         dots: true,
//         speed: 1000,
//         autoplay: true,
//         autoplaySpeed: 5000,
//         slidesToShow: 8,
//         variableWidth: true,
//         infinite: false,
//         slidesToShow: 6,
//         responsive: [
//         {
//             breakpoint: 1166,
//             settings: {
//             variableWidth: true,
//             infinite: true,
//                 dots: true,
//             slidesToShow: 3,
//                 slidesPerRow: 1,
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             dots: true,
//             }
//         },
//         {
//             breakpoint: 375,
//             settings: {
//             slidesToShow: 2,
//             slidesPerRow: 2,
//                 dots: true,
//                     rows: 2,
//             slidesPerRow: 1,
//             }
//             },
//                 {
//             breakpoint: 1200,
//             settings: "unslick"
//         }
        
//         ]
//     });
// });

// $('.products-slider').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });

$(document).ready(function(){
    var productsSlider = $('.products-slider');

    function disableSlider() {
        if ($(window).width() < 1200) {
            if (!productsSlider.hasClass('slick-initialized')) {
                productsSlider.slick({
                    arrows: false,
                    dots: true,
                    speed: 1000,
                    variableWidth: true,
                    // autoplay: true,
                    // autoplaySpeed: 5000,
                    // easing: 'ease',
                    // infinite: true,
                    // touchThreshold: 10,
                    waitForAnimate: false,
                    // responsive: [
                    //     {
                    //         breakpoint: 1166,
                    //         settings: {
                    //             variableWidth: true,
                    //             infinite: true,
                    //             dots: true,
                    //             slidesToShow: 1,
                    //             slidesPerRow: 1,
                    //         }
                    //     },
                    //     {
                    //         breakpoint: 768,
                    //         settings: {
                    //             slidesToShow: 1,
                    //             slidesToScroll: 1,
                    //             dots: true,
                    //         }
                    //     },
                    //     {
                    //         breakpoint: 375,
                    //         settings: {
                    //             dots: true,
                    //             slidesPerRow: 1,
                    //         }
                    //     },
                    //                             {
                    //         breakpoint: 374,
                    //         settings: {
                    //             variableWidth: false,
                    //             slidesToShow: 1,
                    //             slidesToScroll: 1,
                    //             slidesPerRow: 1,
                    //             dots: true,
                    //         }
                    //     },
                    // ]
                });
            }
        } else {
            if (productsSlider.hasClass('slick-initialized')) {
                productsSlider.slick('unslick');
            }
        }
    }

    disableSlider();

    $(window).on('resize', function() {
        disableSlider();
    });
});
