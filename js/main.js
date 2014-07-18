$(document).ready(function() {
  $('.flexslider').flexslider({
    direction: "vertical",
    controlNav: false,
    slideshowSpeed: 3000
    });

  $('.custom-button').click(function(event) {
    event.preventDefault();
    $('html,body').animate({ 
      scrollTop: $('#about').offset().top 
    }, 2000);
  });

  $(window).scroll(function(){
    if($(window).scrollTop() > 600){
        $(".navbar")
            .fadeIn('slow')
            .css("display", "inline")
            .css("position", "fixed")
            .css("opacity", 0.9)
    }
  });

  $(window).scroll(function(){
    if($(window).scrollTop() <= 600){
        $(".navbar").fadeOut("fast");
    }
  });

  $('#about-me-navbar').click(function(event) {
    event.preventDefault();
    $('html,body').animate({ 
      scrollTop: $('#about').offset().top 
    }, 2000);
  });

  $('#projects-navbar').click(function(event) {
    event.preventDefault();
    $('html,body').animate({ 
      scrollTop: $('#projects').offset().top 
    }, 2000);
  });


  $('#contact-navbar').click(function(event) {
    event.preventDefault();
    $('html,body').animate({ 
      scrollTop: $('#contact').offset().top 
    }, 2000);
  });

});

