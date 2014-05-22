$(document).ready(function() {
  $('.img-circle').hover(function() {
    $("#me").attr("src", "img/meimage2.jpeg")
  },
  function() {
    $("#me").attr("src", "img/header_image.jpg")
  });
  
  $("#tripcollab").click(function() {
    alert("TripCollaborator is a way to plan trips and create a list of items to bring on your trips. You can invite guests, and they can choose to bring items on the trip. Built using Ruby on Rails, Twitter API, and RSpec.")
  });
   
  $("#cyclesmart").click(function() {
    alert("CycleSmart is a cycling-centric app that displays various cycling-related events nearby. It renders accidents involving bicycles, bicycle shops, Citibike stations, and Groupon cycling deals onto a Google map. With CycleSmart, you can also look up cycling directions and save your favorite routes. Built using Ruby on Rails, Javascript, jQuery, Google Maps API, Citibike API, and the Groupon API.")
  });
  $("#twitterfrags").click(function() {
    alert("TwttrFrgmnts is an app that helps track Twitter conversation threads. Twitter's normal conversation threads are often a maze of replies that are hard to follow. TwttrFrgmnts makes it easy to follow a Twitter conversation from the original Tweet down to the latest reply. Built using Ruby on Rails, Javascript, jQuery, and D3.")
    });
  })








