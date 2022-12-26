$(document).ready(function () {
    $(".nav-button").click(function () {
      $(".nav-button").toggleClass("change");
    });
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      items:1,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })
  });