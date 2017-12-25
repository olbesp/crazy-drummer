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

	var SoundEffect = function(name) {
		this.name = name;
		this.sound = new Howl({
			src: [
				'sounds/effects/' + this.name + '.mp3',
				'sounds/effects/' + this.name + '.ogg']
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

	var soundEffects = [
		new SoundEffect('glass')
	];

	return {
		setupDrums: function() {
			return drumBtns;
		},

		setupEffects: function() {
			return soundEffects;
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
		},

		unpressMenuBtn: function() {
			var menuBtns = document.querySelectorAll('.menu-btn');
			for (var i = 0; i < menuBtns.length; i++) {
				menuBtns[i].classList.remove('active');
			}
		},

	}
})();

var controller = (function(dataCtrl, UICtrl) {

	var btnList = document.querySelectorAll('.drum-btn');
	var drums = dataCtrl.setupDrums();
	var effects = dataCtrl.setupEffects();

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
						document.getElementById(drums[i].id).classList.add('pressed');
					}
				}
			} else {
				effects[Math.floor(Math.random() * effects.length)].sound.play();
			}
		}, false);

		document.addEventListener('keyup', function() {
			var pressedButton = document.querySelector('button.pressed');
			if (pressedButton) {
				pressedButton.classList.remove('pressed');
			}
		});

		// MENU
		document.querySelector('.header__menu-icon').addEventListener('click',
		function(){
			this.classList.toggle("open");
	  	document.querySelector('.main-nav__menu').classList.toggle('main-nav__menu--open');
		});

		// GENRES
		document.querySelector('.main-nav__menu').addEventListener('click', function(event) {
			if (event.target.id) {
				var genre = event.target.id;
				UICtrl.unpressMenuBtn()
				document.getElementById(genre).classList.add('active');
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
