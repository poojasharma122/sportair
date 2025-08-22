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
$('.home_events_slider').slick({
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

// Modal JS Start
document.addEventListener("DOMContentLoaded", function () {
    const modalEl = document.getElementById('exampleModal');
    const form = document.getElementById('bookingForm');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault(); 

        const modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();


        setTimeout(function () {
            alert("Thank you for booking with us! We will be in touch with you shortly.");
            form.reset();
        }, 400); 
    });
});
// Modal JS End


