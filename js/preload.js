var preload = function(game){}

preload.prototype = {
	preload: function(){
        var loadingBar = this.add.sprite(200,240,"loading");
        this.load.setPreloadSprite(loadingBar);

    //Spritesheet

		this.game.load.spritesheet('hero_slip', 'assets/img/hero_slip.png', 150,75,1);
		this.game.load.spritesheet('explosion', 'assets/img/explode.png', 128, 128);
		//
		//
		this.game.load.spritesheet('Dindon', 'assets/img/dindon2.png', 22, 20,3);
		this.game.load.spritesheet('Canard', 'assets/img/canard2.png', 22, 20,3);
		this.game.load.spritesheet('Poule', 'assets/img/poule2.png', 22, 20,3);
		this.game.load.spritesheet('hero_idle', 'assets/img/renard-2.png', 22,20,6);

		this.game.load.spritesheet('enemy_up3', 'assets/img/enemy7_2101.png', 50, 50,2);

		this.game.load.spritesheet('enemy_shot0', 'assets/img/enemy4_2007.png', 50, 150,4);
		this.game.load.spritesheet('enemy_shot1', 'assets/img/enemy8_2209.png', 50, 150,3);
		this.game.load.spritesheet('enemy_shot2', 'assets/img/enemy10_1646.png', 50, 150,3);
		this.game.load.spritesheet('enemy_shot3', 'assets/img/enemy8_2209.png', 50, 150,3);

		this.game.load.spritesheet('enemy_down0', 'assets/img/enemy1_1900.png', 50, 50,2);
		this.game.load.spritesheet('enemy_down1', 'assets/img/enemy2_1915.png', 50, 50,2);
		this.game.load.spritesheet('enemy_down2', 'assets/img/enemy3_1934.png', 49, 51,2);
		this.game.load.spritesheet('enemy_down3', 'assets/img/enemy3_1934.png', 49, 51,2);


		this.game.load.spritesheet('perso_ss', 'assets/img/perso_ss_0101.png', 100,100,3);
		this.game.load.spritesheet('perso_ss2', 'assets/img/perso_small_1813.png', 91,50,1);
		this.game.load.spritesheet('perso_ss3', 'assets/img/hero_death_1707.png', 100,100,1);

		this.game.load.spritesheet("background", "assets/img/game_bg_2011.png",800,600,4);
		this.game.load.spritesheet("gametitle", "assets/img/game_start_ss_2021.png",800,600,2);
		this.game.load.spritesheet("gameover", "assets/img/gameover_ss_2228.png",800,600,2);

		this.game.load.spritesheet('strike', 'assets/img/strike.png', 600,300,1);


		// //Image
    this.game.load.image('bullet', 'assets/img/bullet.png');
    this.game.load.image('bullet2', 'assets/img/bullet2.png');

    this.game.load.image('gametitle', 'assets/img/game_start.png');
		this.game.load.image('background', 'assets/img/game_bg.jpg');
		this.game.load.image('gameover', 'assets/img/gameover.png');

		//Mur
		this.game.load.image('MurHBG', 'assets/img/MurHautGauche.png');
		// this.game.load.image('goldenegg', 'assets/img/oeuf-en-or.png');

		//
		// //Sound
     		game.load.audio('gameSound', 'assets/sound/game.mp3');
     		game.load.audio('introSound', 'assets/sound/intro.mp3');
     		game.load.audio('loseSound', 'assets/sound/loose.mp3');
  	   	game.load.audio('explosionSound', 'assets/sound/explodeSound.mp3');

				game.load.audio('oeuf', 'assets/sound/oeuf.mp3');

      	game.load.audio('poulhit', 'assets/sound/poulhit.mp3');
        game.load.audio('renardhit', 'assets/sound/renardhit.mp3');
  	// 	game.load.audio('deathSound', 'assets/sound/sound_death.mp3');


	},
  	create: function(){
  		this.game.time.events.add(Phaser.Timer.SECOND * 2, this._startGame, this);
	},
	_startGame: function(){
		this.game.state.start("GameTitle");
	}
}
