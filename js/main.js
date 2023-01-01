$(document).ready(function () {
  // NAV BOTTON
  $(".nav-button").click(function () {
    $(".nav-button").toggleClass("change");
  });
  // PROJECT SLIDER
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 5,
    nav: false,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1140: {
        items: 2,
        center: true,
      },
    },
  });
    // REVIEW SLIDER
    $('#review-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:true,
      smartSpeed:800,
      center: true,
      autoplay: true,
      autoplayTimeout: 4000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
});
