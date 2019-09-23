$(document).ready(function() {
    var target = $('.our-results');
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    $(window).scroll(function(){
      var winScrollTop = $(this).scrollTop();
      if(winScrollTop > scrollToElem){
        $('.result-span').each(function(index, element) {
            result_counter($(element))
        })
      }
    });


    function result_counter($el) {
      let valNow = +$el.text();
      let target = +$el.attr('data-count');
      let timeStep = 5000 / target;

      if (valNow == 0) {
        let interval = setInterval(function() {
          valNow += target.toString().length;
          $el.text([valNow]);
          if (valNow >= target) {
            clearInterval(interval);
          }
        }, timeStep)
      }
    }
})