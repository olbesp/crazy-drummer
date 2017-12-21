var dataController = (function() {

	var DrumBtn = function(id, keyCode) {
		this.id = id;
		this.keyCode = keyCode;
		this.genre = 'rock';
		this.soundPathBuild = function() {
			return new Howl({
				src: [
					'sounds/' + this.genre + '/' + this.id + '.mp3',
					'sounds/' + this.genre + '/' + this.id + '.ogg']
			});
		}
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

	return {
		setupDrums: function() {
			return drumBtns;
		}
	}
})();

var UIController = (function() {

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

	var setupGenre = function(genre) {
		drums.forEach(function(drum) {
			drum.genre = genre;
			drum.soundPathBuild();
		});
	}

	var setupEventListeners = function() {
		// DRUM BUTTONS
		document.addEventListener('keydown', function(event) {
			var isDrum = drums.some(function(drum) {
				return drum.keyCode === event.keyCode;
			});

			if (isDrum) {
				for (var i = 0; i < drums.length; i++) {
					if (drums[i].keyCode === event.keyCode) {
						drums[i].soundPathBuild().play();
					}
				}
			}
		});

		// MENU
		document.querySelector('.header__menu-icon').addEventListener('click',
		function(){
			this.classList.toggle("open");
	  	document.querySelector('.main-nav__menu').classList.toggle('menu-open');
		});

		// GENRES
		document.querySelector('.main-nav__menu').addEventListener('click', function(event) {
			if (event.target.id) {
				var genre = event.target.id;
				setupGenre(genre);
			}
		});
	}

	return {
		init: function() {
			var animation = UICtrl.getAnimationClasses();
			UICtrl.addRandomAnimation(btnList, animation);
			setupEventListeners();
		}
	}

})(dataController, UIController);

controller.init();

// 	var glass = new Howl({
// 		src: ["sounds/glass.mp3", "sounds/glass.ogg"]
// 	});
//
// document.getElementById('elementID').click();
