$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({full_width: true, time_constant: 600});
  setTimeout(autoplay, 4500);
});

function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 4500);
}