$(document).ready(function() {

  $('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    loop: true,
    animateIn: 'fadeIn',
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 1,
    margin: 10,
  });

  // Deck

  $('.carousel-deck').owlCarousel({
    // animateOut: 'fadeOut',
    // loop: true,
    // animateIn: 'fadeIn',
    // autoplay: true,
      nav:false,
    autoplayTimeout: 4700,
    autoplayHoverPause: true,
    margin: 15,
    responsiveClass: true,
    center: true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }


  });
});
