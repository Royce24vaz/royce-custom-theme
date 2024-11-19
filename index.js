$(document).ready(function() {
    $(".nav-link").click(function() {
      if ($(".navbar-collapse").hasClass("show")) {
        $(".navbar-collapse").removeClass("show").slideUp();
      }
    });
  
    $(".navbar-toggler").click(function() {
      $(".navbar-collapse").toggleClass("show").slideToggle();
    });
  });
  