$(document).ready(function(){
	$('.carousel.carousel-slider').carousel({full_width: true, time_constant: 700});
	// $('.carousel').carousel({time_constant: 800});
	setTimeout(autoplay, 4500);
});

function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}