
function rotateImage(degree) {
    $('#rotate-image').animate({
        transform: degree
    }, {
        step: function(now, fx) {
            $(this).css({
                '-webkit-transform': 'rotate(' + now + 'deg)',
                '-moz-transform': 'rotate(' + now + 'deg)',
                'transform': 'rotate(' + now + 'deg)'
            });
        }
    });
}




// $("#image").css({'transform': 'rotate(-180deg)'});
// to

// $("#image").toggleClass('flip');

// $(document).ready(function() {
//     $( ".toggle" ).click( function() {
//         $("#image").toggleClass('flip');
//     });
// });
// #image {
//   -moz-transition: transform 1s;
//   -webkit-transition: transform 1s;
//   transition: transform 1s;
// }

// .flip {
//   transform: rotate(-180deg);
// }

// $(document).ready(function() {
//     $( ".toggle" ).click( function() {
//       console.log($("#image").css('transform'));
//       if ($("#image").css('transform') == 'none') {
//         $("#image").css({'transform': 'rotate(-180deg)'});
//       } else {
//         $("#image").css({'transform': ''});
//       };
//     });
//   });
//   #image {
//     -moz-transition: transform 1s;
//     -webkit-transition: transform 1s;
//     transition: transform 1s;
//   }
  
//   .flip {
//     transform: rotate(-180deg);
//   }