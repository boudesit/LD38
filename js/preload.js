var preload = function(game){}

preload.prototype = {
	preload: function(){
        var loadingBar = this.add.sprite(200,240,"loading");
        this.load.setPreloadSprite(loadingBar);

    //Spritesheet

		//Image
    this.game.load.image('gametitle', 'assets/img/game_start.png');
		this.game.load.image('background', 'assets/img/game_background.jpg');
		this.game.load.image('gameover', 'assets/img/gameover.png');

		this.game.load.image('buttonWarrior', 'assets/img/ButtonWarrior.png');
		this.game.load.image('buttonArcher', 'assets/img/ButtonArcher.png');
		//Mur

		//

		//Sound
     		game.load.audio('gameSound', 'assets/sound/game.mp3');
     		game.load.audio('introSound', 'assets/sound/intro.mp3');
     		game.load.audio('loseSound', 'assets/sound/loose.mp3');
  	   	game.load.audio('explosionSound', 'assets/sound/explodeSound.mp3');
  	  	//game.load.audio('deathSound', 'assets/sound/sound_death.mp3');


	},
  	create: function(){
  		this.game.time.events.add(Phaser.Timer.SECOND * 2, this._startGame, this);
	},
	_startGame: function(){
		this.game.state.start("GameTitle");
	}
}
