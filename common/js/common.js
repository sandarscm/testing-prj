// JavaScript Document

$(document).ready(function() {
        $(".menu").click(function() {
          $(this).next(".pc_gnav").slideToggle("fast");
          $(this).toggleClass("active");
          $(this).siblings(".menu").removeClass("active");
  });
         $(".menu").click(function() {
          $(this).next(".music_gnav").slideToggle("fast");
          $(this).toggleClass("active");
          $(this).siblings(".menu").removeClass("active");
  });
                  $(".menu").click(function() {
          $(this).next(".cont_gnav").slideToggle("fast");
          $(this).toggleClass("active");
          $(this).siblings(".menu").removeClass("active");
  });
           if (window.history && window.history.pushState) {

    
    $(window).on('popstate', function() {
      window.location.reload(true);
    });

  }
});



