$(document).ready(function(){
  $(window).on("scroll", function(){
    $("#parallax").css({
         top: $(window).scrollTop()*.5*-1
      });
  });
});
