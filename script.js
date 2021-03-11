
// function rotateImage(degree) {
//     $('#rotate-image').animate({
//         transform: degree
//     }, {
//         step: function(now, fx) {
//             $(this).css({
//                 '-webkit-transform': 'rotate(' + now + 'deg)',
//                 '-moz-transform': 'rotate(' + now + 'deg)',
//                 'transform': 'rotate(' + now + 'deg)'
//             });
//         }
//     });
// }

$(function() {
    
    var $rota = $('.spin')
    
    $rota.click(function(){
        var $this = $(this);
        
        if($this.data('rotating')){
            clearInterval($this.data('rotating'));
            $this.data('rotating', false)
        } else {
            $this.data('rotating', setInterval(function(){
                var degree = $this.data('degree') || 0;
                $this.css({ transform: 'rotate(' + degree + 'deg)'});
                $this.data('degree', ++degree)
            }, 5));
        }
    });
    
});

