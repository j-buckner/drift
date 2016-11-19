$(document).ready(function(){
	$('.carousel.carousel-slider').carousel({full_width: true});
	setTimeout(autoplay, 4500);
});

function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}