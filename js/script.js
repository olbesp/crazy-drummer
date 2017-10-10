$(document).ready(function(){

	// Sounds

	var sounds = {
		rock: {
			w: new Howl({
				src: ["sounds/rock/hat1.mp3"]
			}),
			a: new Howl({
				src: ["sounds/rock/hat2.mp3"]
			}),
			s: new Howl({
				src: ["sounds/rock/hat3.mp3"]
			}),
			d: new Howl({
				src: ["sounds/rock/hat4.mp3"]
			}),
			i: new Howl({
				src: ["sounds/rock/stick.mp3"]
			}),
			j: new Howl({
				src: ["sounds/rock/snare1.mp3"]
			}),
			k: new Howl({
				src: ["sounds/rock/snare2.mp3"]
			}),
			l: new Howl({
				src: ["sounds/rock/snare3.mp3"]
			}),
			space: new Howl({
				src: ["sounds/rock/kick.mp3"]
			})
		},
		hipHop: {
			w: new Howl({
				src: ["sounds/hipHop/hat1.mp3"]
			}),
			a: new Howl({
				src: ["sounds/hipHop/hat2.mp3"]
			}),
			s: new Howl({
				src: ["sounds/hipHop/hat3.mp3"]
			}),
			d: new Howl({
				src: ["sounds/hipHop/hat4.mp3"]
			}),
			i: new Howl({
				src: ["sounds/hipHop/stick.mp3"]
			}),
			j: new Howl({
				src: ["sounds/hipHop/snare1.mp3"]
			}),
			k: new Howl({
				src: ["sounds/hipHop/snare2.mp3"]
			}),
			l: new Howl({
				src: ["sounds/hipHop/snare3.mp3"]
			}),
			space: new Howl({
				src: ["sounds/hipHop/kick.mp3"]
			})
		},
		dance: {
			w: new Howl({
				src: ["sounds/dance/hat1.mp3"]
			}),
			a: new Howl({
				src: ["sounds/dance/hat2.mp3"]
			}),
			s: new Howl({
				src: ["sounds/dance/hat3.mp3"]
			}),
			d: new Howl({
				src: ["sounds/dance/hat4.mp3"]
			}),
			i: new Howl({
				src: ["sounds/dance/stick.mp3"]
			}),
			j: new Howl({
				src: ["sounds/dance/snare1.mp3"]
			}),
			k: new Howl({
				src: ["sounds/dance/snare2.mp3"]
			}),
			l: new Howl({
				src: ["sounds/dance/snare3.mp3"]
			}),
			space: new Howl({
				src: ["sounds/dance/kick.mp3"]
			})
		},
		dubstep: {
			w: new Howl({
				src: ["sounds/dub/hat1.mp3"]
			}),
			a: new Howl({
				src: ["sounds/dub/hat2.mp3"]
			}),
			s: new Howl({
				src: ["sounds/dub/hat3.mp3"]
			}),
			d: new Howl({
				src: ["sounds/dub/hat4.mp3"]
			}),
			i: new Howl({
				src: ["sounds/dub/stick.mp3"]
			}),
			j: new Howl({
				src: ["sounds/dub/snare1.mp3"]
			}),
			k: new Howl({
				src: ["sounds/dub/snare2.mp3"]
			}),
			l: new Howl({
				src: ["sounds/dub/snare3.mp3"]
			}),
			space: new Howl({
				src: ["sounds/dub/kick.mp3"]
			})
		}
	};

	// --W--
	$("body").keydown(function(event) {
		if (event.which === 87) {
			$(".hat1").addClass("pressed");
			sounds.dance.w.play();
		}
	});
	// var hat1 = new Howl({
	// 	src: ["sounds/a/hat1.mp3"]
	// });
	// var hat2 = new Howl({
	// 	src: ["sounds/a/hat2.mp3"]
	// });
	// var hat3 = new Howl({
	// 	src: ["sounds/a/hat3.mp3"]
	// });
	// var hat4 = new Howl({
	// 	src: ["sounds/a/hat4.mp3"]
	// });
	// var stick = new Howl({
	// 	src: ["sounds/a/stick.mp3"]
	// });
	// var snare1 = new Howl({
	// 	src: ["sounds/a/snare1.mp3"]
	// });
	// var snare2 = new Howl({
	// 	src: ["sounds/a/snare2.mp3"]
	// });
	// var snare3 = new Howl({
	// 	src: ["sounds/a/snare3.mp3"]
	// });
	// var kick = new Howl({
	// 	src: ["sounds/a/kick.mp3"]
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
