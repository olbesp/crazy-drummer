$(document).ready(function(){

	// Sounds

	var sounds = {
		hat1: {
			rock: new Howl({
				src: ["sounds/a/hat1.wav"]
			})
		}
	};

	// --W--
	$("body").keydown(function(event) {
		if (event.which === 87) {
			$(".hat1").addClass("pressed");
			sounds.hat1.rock.play();
		}
	});
	// var hat1 = new Howl({
	// 	src: ["sounds/a/hat1.wav"]
	// });
	// var hat2 = new Howl({
	// 	src: ["sounds/a/hat2.wav"]
	// });
	// var hat3 = new Howl({
	// 	src: ["sounds/a/hat3.wav"]
	// });
	// var hat4 = new Howl({
	// 	src: ["sounds/a/hat4.wav"]
	// });
	// var stick = new Howl({
	// 	src: ["sounds/a/stick.wav"]
	// });
	// var snare1 = new Howl({
	// 	src: ["sounds/a/snare1.wav"]
	// });
	// var snare2 = new Howl({
	// 	src: ["sounds/a/snare2.wav"]
	// });
	// var snare3 = new Howl({
	// 	src: ["sounds/a/snare3.wav"]
	// });
	// var kick = new Howl({
	// 	src: ["sounds/a/kick.wav"]
	// });
	//
	// var keyCodes = [87, 65, 83, 68, 73, 74, 75, 76, 32];
	//
	// function unpressButton() {
	// 	$("body").keyup(function(event) {
	// 		for (var i = 0; i < keyCodes.length; i++) {
	// 			if (event.which == keyCodes[i]) {
	// 				$(".btn").removeClass("pressed");
	// 			}
	// 		}
	// 	});
	// }
	//
	// // Buttons
	//
	// // --W--
	// $("body").keydown(function(event) {
	// 	if (event.which === 87) {
	// 		$(".hat1").addClass("pressed");
	// 		hat1.play();
	// 	}
	// 	unpressButton();
	// });
	// // --A--
	// $("body").keydown(function(event) {
	// 	if (event.which === 65) {
	// 		$(".hat2").addClass("pressed");
	// 		hat2.play();
	// 	}
	// 	unpressButton();
	// });
	// // --S--
	// $("body").keydown(function(event) {
	// 	if (event.which === 83) {
	// 		$(".hat3").addClass("pressed");
	// 		hat3.play();
	// 	}
	// 	unpressButton();
	// });
	// // --D--
	// $("body").keydown(function(event) {
	// 	if (event.which === 68) {
	// 		$(".hat4").addClass("pressed");
	// 		hat4.play();
	// 	}
	// 	unpressButton();
	// });
	// // --I--
	// $("body").keydown(function(event) {
	// 	if (event.which === 73) {
	// 		$(".stick").addClass("pressed");
	// 		stick.play();
	// 	}
	// 	unpressButton();
	// });
	// // --J--
	// $("body").keydown(function(event) {
	// 	if (event.which === 74) {
	// 		$(".snare1").addClass("pressed");
	// 		snare1.play();
	// 	}
	// 	unpressButton();
	// });
	// // --K--
	// $("body").keydown(function(event) {
	// 	if (event.which === 75) {
	// 		$(".snare2").addClass("pressed");
	// 		snare2.play();
	// 	}
	// 	unpressButton();
	// });
	// // --L--
	// $("body").keydown(function(event) {
	// 	if (event.which === 76) {
	// 		$(".snare3").addClass("pressed");
	// 		snare3.play();
	// 	}
	// 	unpressButton();
	// });
	// // --SPACE--
	// $("body").keydown(function(event) {
	// 	if (event.which === 32) {
	// 		$(".kick").addClass("pressed");
	// 		kick.play();
	// 	}
	// 	unpressButton();
	// });
	//
	// // Mobile menu
	//
	// $(".menu-icon").click(function(){
	// 	$(this).toggleClass("open");
  //   $(".menu").slideToggle();
	// });

	// Menu Buttons

	// var buttons = $(".menu-btn");
	//
	// for (var i = 0; i < buttons.length; i++) {
	// 	if ($(buttons[i]).hasClass("pressed") == false) {
	// 		$(buttons[i]).click(function() {
	// 			$(buttons).removeClass("pressed");
	// 			$(this).addClass("pressed");
	// 		});
	// 	}
	//
	// };

});
