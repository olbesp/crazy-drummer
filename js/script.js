$(document).ready(function(){

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
	var genre;
	if ($("#rock").hasClass("pressed")) {
		genre = sounds.rock;
	} else if ($("#hipHop").hasclass("pressed")) {
		genre = sounds.hipHop;
	} else if ($("#dance").hasClass("pressed")) {
		genre = "dance";
	} else {
		genre = "dubstep";
	};

	// Unpress button after the key go up
	var keyCodes = [87, 65, 83, 68, 73, 74, 75, 76, 32];

	function unpressButton() {
		$("body").keyup(function(event) {
			for (var i = 0; i < keyCodes.length; i++) {
				if (event.which == keyCodes[i]) {
					$(".btn").removeClass("pressed");
				}
			}
		});
	}

	// --W--
	$("body").keydown(function(event) {
		if (event.which === 87) {
			$("#w").addClass("pressed");
			genre.w.play();
		}
		unpressButton();
	});
	// --A--
	$("body").keydown(function(event) {
		if (event.which === 65) {
			$("#a").addClass("pressed");
			genre.a.play();
		}
		unpressButton();
	});
	// --S--
	$("body").keydown(function(event) {
		if (event.which === 83) {
			$("#s").addClass("pressed");
			genre.s.play();
		}
		unpressButton();
	});
	// --D--
	$("body").keydown(function(event) {
		if (event.which === 68) {
			$("#d").addClass("pressed");
			genre.d.play();
		}
		unpressButton();
	});
	// --I--
	$("body").keydown(function(event) {
		if (event.which === 73) {
			$("#i").addClass("pressed");
			genre.i.play();
		}
		unpressButton();
	});
	// --J--
	$("body").keydown(function(event) {
		if (event.which === 74) {
			$("#j").addClass("pressed");
			genre.j.play();
		}
		unpressButton();
	});
	// --K--
	$("body").keydown(function(event) {
		if (event.which === 75) {
			$("#k").addClass("pressed");
			genre.k.play();
		}
		unpressButton();
	});
	// --L--
	$("body").keydown(function(event) {
		if (event.which === 76) {
			$("#l").addClass("pressed");
			genre.l.play();
		}
		unpressButton();
	});
	// --SPACE--
	$("body").keydown(function(event) {
		if (event.which === 32) {
			$("#space").addClass("pressed");
			genre.space.play();
		}
		unpressButton();
	});
});
