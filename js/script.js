
var dataController = (function() {

	var DrumBtn = function(id, keyCode) {
		this.id = id;
		this.keyCode = keyCode;
		this.genre = 'rock';
		this.sound = new Howl({
			src: [
				'sounds/' + this.genre + '/' + this.id + '.mp3',
				'sounds/' + this.genre + '/' + this.id + '.ogg']
		});
	};

	var drumBtns = [
		new DrumBtn('hat1', 87),
		new DrumBtn('hat2', 65),
		new DrumBtn('hat3', 83),
		new DrumBtn('hat4', 68),
		new DrumBtn('stick', 73),
		new DrumBtn('snare1', 74),
		new DrumBtn('snare2', 75),
		new DrumBtn('snare3', 76),
		new DrumBtn('kick', 32)
	];

	var animatedClasses = [
		'bounceIn',
		'bounceInDown',
		'bounceInLeft',
		'bounceInRight',
		'rotateIn',
		'jackInTheBox',
		'wobble',
		'zoomInLeft',
		'rollIn'
	];

	return {

		getAnimationClasses: function() {
			return animatedClasses;
		},

		setupDrums: function() {
			return drumBtns;
		}
	}
})();

var UIController = (function() {

	return {

		addRandomAnimation: function(listOfElements, listOfClasses) {
			// Iterate through elements and add random class into every one
			for (var i = 0; i < listOfElements.length; i++) {
				var randomClass = Math.floor(Math.random() * listOfClasses.length);
				listOfElements[i].classList.add('animated', listOfClasses[randomClass]);
			}
		}

	}
})();

var controller = (function(dataCtrl, UICtrl) {

	var btnList = document.querySelectorAll('.drum-btn');
	var drums = dataCtrl.setupDrums();
	var genre;

	var setupEventListeners = function() {

		document.addEventListener('keydown', function(event) {
			var isDrum = drums.some(function(drum) {
				return drum.keyCode === event.keyCode;
			});

			if (isDrum) {
				for (var i = 0; i < drums.length; i++) {
					if (drums[i].keyCode === event.keyCode) {
						drums[i].sound.play();
					}
				}
			}
		});

		// MENU
		document.querySelector('.menu-icon').addEventListener('click',
		function(){
			this.classList.toggle("open");
	  	document.querySelector('.menu').classList.toggle('menu-open');
		});

		// GENRES
		document.querySelector('.menu').addEventListener('click', function(event) {

			if (event.target.id) {
				genre = event.target.id;
			}
		});
	}

	return {

		init: function() {
			var animation = dataCtrl.getAnimationClasses();
			UICtrl.addRandomAnimation(btnList, animation);
			setupEventListeners();
			console.log(drums);
		}

	}

})(dataController, UIController);

controller.init();


// $(document).ready(function(){
//
// 	// Mobile menu
// 	$(".menu-icon").click(function(){
// 		$(this).toggleClass("open");
//     $(".menu").slideToggle();
// 	});

	// Menu Buttons
	// var buttons = $(".menu-btn");
	// for (var i = 0; i < buttons.length; i++) {
	// 	if (!$(buttons[i]).hasClass("pressed")) {
	// 		$(buttons[i]).click(function() {
	// 			$(buttons).removeClass("pressed");
	// 			$(this).addClass("pressed");
	// 		});
	// 	}
	// }


	// Sounds library

// 	var glass = new Howl({
// 		src: ["sounds/glass.mp3", "sounds/glass.ogg"]
// 	});
//
// 	var sounds = {
// 		rock: {
// 			w: new Howl({
// 				src: ["sounds/rock/hat1.mp3", "sounds/rock/hat1.ogg"]
// 			}),
// 			a: new Howl({
// 				src: ["sounds/rock/hat2.mp3", "sounds/rock/hat2.ogg"]
// 			}),
// 			s: new Howl({
// 				src: ["sounds/rock/hat3.mp3", "sounds/rock/hat3.ogg"]
// 			}),
// 			d: new Howl({
// 				src: ["sounds/rock/hat4.mp3", "sounds/rock/hat4.ogg"]
// 			}),
// 			i: new Howl({
// 				src: ["sounds/rock/stick.mp3", "sounds/rock/stick.ogg"]
// 			}),
// 			j: new Howl({
// 				src: ["sounds/rock/snare1.mp3", "sounds/rock/snare1.ogg"]
// 			}),
// 			k: new Howl({
// 				src: ["sounds/rock/snare2.mp3", "sounds/rock/snare2.ogg"]
// 			}),
// 			l: new Howl({
// 				src: ["sounds/rock/snare3.mp3", "sounds/rock/snare3.ogg"]
// 			}),
// 			space: new Howl({
// 				src: ["sounds/rock/kick.mp3", "sounds/rock/kick.ogg"]
// 			})
// 		},
// 		hipHop: {
// 			w: new Howl({
// 				src: ["sounds/hipHop/hat1.mp3", "sounds/hipHop/hat1.ogg"]
// 			}),
// 			a: new Howl({
// 				src: ["sounds/hipHop/hat2.mp3", "sounds/hipHop/hat2.ogg"]
// 			}),
// 			s: new Howl({
// 				src: ["sounds/hipHop/hat3.mp3", "sounds/hipHop/hat3.ogg"]
// 			}),
// 			d: new Howl({
// 				src: ["sounds/hipHop/hat4.mp3", "sounds/hipHop/hat4.ogg"]
// 			}),
// 			i: new Howl({
// 				src: ["sounds/hipHop/stick.mp3", "sounds/hipHop/stick.ogg"]
// 			}),
// 			j: new Howl({
// 				src: ["sounds/hipHop/snare1.mp3", "sounds/hipHop/snare1.ogg"]
// 			}),
// 			k: new Howl({
// 				src: ["sounds/hipHop/snare2.mp3", "sounds/hipHop/snare2.ogg"]
// 			}),
// 			l: new Howl({
// 				src: ["sounds/hipHop/snare3.mp3", "sounds/hipHop/snare3.ogg"]
// 			}),
// 			space: new Howl({
// 				src: ["sounds/hipHop/kick.mp3", "sounds/hipHop/kick.ogg"]
// 			})
// 		},
// 		dance: {
// 			w: new Howl({
// 				src: ["sounds/dance/hat1.mp3", "sounds/dance/hat1.ogg"]
// 			}),
// 			a: new Howl({
// 				src: ["sounds/dance/hat2.mp3", "sounds/dance/hat2.ogg"]
// 			}),
// 			s: new Howl({
// 				src: ["sounds/dance/hat3.mp3", "sounds/dance/hat3.ogg"]
// 			}),
// 			d: new Howl({
// 				src: ["sounds/dance/hat4.mp3", "sounds/dance/hat4.ogg"]
// 			}),
// 			i: new Howl({
// 				src: ["sounds/dance/stick.mp3", "sounds/dance/stick.ogg"]
// 			}),
// 			j: new Howl({
// 				src: ["sounds/dance/snare1.mp3", "sounds/dance/snare1.ogg"]
// 			}),
// 			k: new Howl({
// 				src: ["sounds/dance/snare2.mp3", "sounds/dance/snare2.ogg"]
// 			}),
// 			l: new Howl({
// 				src: ["sounds/dance/snare3.mp3", "sounds/dance/snare3.ogg"]
// 			}),
// 			space: new Howl({
// 				src: ["sounds/dance/kick.mp3", "sounds/dance/kick.ogg"]
// 			})
// 		},
// 		dubstep: {
// 			w: new Howl({
// 				src: ["sounds/dub/hat1.mp3", "sounds/dub/hat1.ogg"]
// 			}),
// 			a: new Howl({
// 				src: ["sounds/dub/hat2.mp3", "sounds/dub/hat2.ogg"]
// 			}),
// 			s: new Howl({
// 				src: ["sounds/dub/hat3.mp3", "sounds/dub/hat3.ogg"]
// 			}),
// 			d: new Howl({
// 				src: ["sounds/dub/hat4.mp3", "sounds/dub/hat4.ogg"]
// 			}),
// 			i: new Howl({
// 				src: ["sounds/dub/stick.mp3", "sounds/dub/stick.ogg"]
// 			}),
// 			j: new Howl({
// 				src: ["sounds/dub/snare1.mp3", "sounds/dub/snare1.ogg"]
// 			}),
// 			k: new Howl({
// 				src: ["sounds/dub/snare2.mp3", "sounds/dub/snare2.ogg"]
// 			}),
// 			l: new Howl({
// 				src: ["sounds/dub/snare3.mp3", "sounds/dub/snare3.ogg"]
// 			}),
// 			space: new Howl({
// 				src: ["sounds/dub/kick.mp3", "sounds/dub/kick.ogg"]
// 			})
// 		}
// 	};
//
// 	// Activate first button after reloading
// 	$("#rock").addClass("pressed");
//
// 	// Checks current active genre in menu
// 	var genre;
//
// 	function checkMode() {
// 		if ($("#rock").hasClass("pressed")) {
// 			genre = "rock";
// 		} else if ($("#hipHop").hasClass("pressed")) {
// 			genre = "hipHop";
// 		} else if ($("#dance").hasClass("pressed")) {
// 			genre = "dance";
// 		} else {
// 			genre = "dubstep";
// 		};
// 		return genre;
// 	}
//
// 	var codeDetails = [
// 		{"id": "#w", "sound": "w", "keyCode": 87},
// 		{"id": "#a", "sound": "a", "keyCode": 65},
// 		{"id": "#s", "sound": "s", "keyCode": 83},
// 		{"id": "#d", "sound": "d", "keyCode": 68},
// 		{"id": "#i", "sound": "i", "keyCode": 73},
// 		{"id": "#j", "sound": "j", "keyCode": 74},
// 		{"id": "#k", "sound": "k", "keyCode": 75},
// 		{"id": "#l", "sound": "l", "keyCode": 76},
// 		{"id": "#space", "sound": "space", "keyCode": 32}
// 	];
//
// 	$("body").keydown(function(event) {
// 		for (var i = 0; i < codeDetails.length; i++) {
// 			var item = codeDetails[i];
// 			if (event.which == item["keyCode"]) {
// 				$(item["id"]).addClass("pressed");
// 				checkMode();
// 				sounds[genre][item["sound"]].play();
// 			}
// 		}
// 	});
//
// 	// Unpress button after the key go up
// 	var keyCodes = [87, 65, 83, 68, 73, 74, 75, 76, 32];
// 	$("body").keyup(function(event) {
// 		if (keyCodes.indexOf(event.which) >= 0) {
// 			$(".btn").removeClass("pressed");
// 		} else {
// 			$(".glass").css("display", "inline-block");
// 			glass.play();
// 			glass = null;
// 		}
// 	});
// });
