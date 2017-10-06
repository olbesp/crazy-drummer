$(document).ready(function(){

	// Mobile menu

	$(".menu-icon").click(function(){
		$(this).toggleClass("open");
    $(".menu").slideToggle();
	});
});
