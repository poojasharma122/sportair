// Toggle Menu Functionaliy Start
$(document).ready(function() {
  $(".nav__toggle").click(function() {
      $("body").addClass("nav--open");
  });
  
  $(".nav__close").click(function() {
      $("body").removeClass("nav--open");
  });
});
// Toggle Menu Functionaliy End

// Header Scroll JS Start
  $(document).ready(function () {
    $(window).scroll(function () {
      var header = $("header");
      header.toggleClass("header--sticky", $(window).scrollTop() > 0);
    });
  });
  // Header Scroll JS End

  //Slider JS Start
$('.books_item_slider').slick({
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  speed: 300,
  autoplay:true,});
//Slider JS End

// AOS JS Start
AOS.init({
  duration:1200,
});
// AOS JS End