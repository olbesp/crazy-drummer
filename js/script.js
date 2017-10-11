$(document).ready(function(){

	// Buttons animation
	$("#w").delay(300).queue(function(next) {
		$(this).addClass("animated bounceInDown");
		next();
	});
	$("#i").delay(300).queue(function(next) {
		$(this).addClass("animated bounceInDown");
		next();
	});
	$("#a").delay(600).queue(function(next) {
		$(this).addClass("animated bounceInLeft");
		next();
	});
	$("#l").delay(600).queue(function(next) {
		$(this).addClass("animated bounceInRight");
		next();
	});
	$("#s").delay(900).queue(function(next) {
		$(this).addClass("animated rotateIn");
		next();
	});
	$("#k").delay(900).queue(function(next) {
		$(this).addClass("animated rotateIn");
		next();
	});
	$("#d").delay(1200).queue(function(next) {
		$(this).addClass("animated jackInTheBox");
		next();
	});
	$("#j").delay(1200).queue(function(next) {
		$(this).addClass("animated jackInTheBox");
		next();
	});
	$("#space").delay(300).queue(function(next) {
		$(this).addClass("animated wobble");
		next();
	});

	// Mobile menu
	$(".menu-icon").click(function(){
		$(this).toggleClass("open");
    $(".menu").slideToggle();
	});

	// Menu Buttons
	var buttons = $(".menu-btn");
	for (var i = 0; i < buttons.length; i++) {
		if (!$(buttons[i]).hasClass("pressed")) {
			$(buttons[i]).click(function() {
				$(buttons).removeClass("pressed");
				$(this).addClass("pressed");
			});
		}
	};


	// Sounds library

	var glass = new Howl({
		src: ["sounds/glass.mp3"]
	});

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

	// Activate first button after reloading
	$("#rock").addClass("pressed");

	// Checks current active genre in menu
	var genre;

	function checkMode() {
		if ($("#rock").hasClass("pressed")) {
			genre = "rock";
		} else if ($("#hipHop").hasClass("pressed")) {
			genre = "hipHop";
		} else if ($("#dance").hasClass("pressed")) {
			genre = "dance";
		} else {
			genre = "dubstep";
		};
		return genre;
	}

	// Unpress button after the key go up
	var keyCodes = [87, 65, 83, 68, 73, 74, 75, 76, 32];

	function unpressButton() {
		$("body").keyup(function(event) {
			if (keyCodes.indexOf(event.which) >= 0) {
				$(".btn").removeClass("pressed");
			} else {
				$(".glass").css("display", "inline-block");
				glass.play();
				glass = null;
			}
		});
	}


	// --W--
	$("body").keydown(function(event) {
		if (event.which === 87) {
			$("#w").addClass("pressed");
			checkMode();
			sounds[genre].w.play();
		}
		unpressButton();
	});

	// --A--
	$("body").keydown(function(event) {
		if (event.which === 65) {
			$("#a").addClass("pressed");
			checkMode();
			sounds[genre].a.play();
		}
		unpressButton();
	});
	// --S--
	$("body").keydown(function(event) {
		if (event.which === 83) {
			$("#s").addClass("pressed");
			checkMode();
			sounds[genre].s.play();
		}
		unpressButton();
	});
	// --D--
	$("body").keydown(function(event) {
		if (event.which === 68) {
			$("#d").addClass("pressed");
			checkMode();
			sounds[genre].d.play();
		}
		unpressButton();
	});
	// --I--
	$("body").keydown(function(event) {
		if (event.which === 73) {
			$("#i").addClass("pressed");
			checkMode();
			sounds[genre].i.play();
		}
		unpressButton();
	});
	// --J--
	$("body").keydown(function(event) {
		if (event.which === 74) {
			$("#j").addClass("pressed");
			checkMode();
			sounds[genre].j.play();
		}
		unpressButton();
	});
	// --K--
	$("body").keydown(function(event) {
		if (event.which === 75) {
			$("#k").addClass("pressed");
			checkMode();
			sounds[genre].k.play();
		}
		unpressButton();
	});
	// --L--
	$("body").keydown(function(event) {
		if (event.which === 76) {
			$("#l").addClass("pressed");
			checkMode();
			sounds[genre].l.play();
		}
		unpressButton();
	});
	// --SPACE--
	$("body").keydown(function(event) {
		if (event.which === 32) {
			$("#space").addClass("pressed");
			checkMode();
			sounds[genre].space.play();
		}
		unpressButton();
	});

	// Break all
	// $("body").keydown(function(event) {
	// 	if (event.whick === )
	// });
});
