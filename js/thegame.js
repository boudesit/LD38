var theGame = function(game) {
	this.game = game;
	this.music = null;
  this.hud = null;

}

theGame.prototype = {
  	create: function() {

      this.hud = new HUD(this.game);
      this.hud.create();
  	// 	music = game.add.audio('gameSound', 1, true);
		//
    // 	this.spriteBG = this.game.add.tileSprite(0, 0, 800, 600, 'background');
    // 	this.spriteBG.animations.add('backgroundAnime');
    // 	this.spriteBG.animations.play('backgroundAnime', 10, true);
		//
  	// 	if (music.isPlaying == false)
  	// 	{
    // 	    music.play();
    // 	}else{
    // 		music.resume();
    // 	}
		//
		//
		// this.ennemy = new EnemyManager(this.game);
		// this.ennemy.create();
		//
		// this.explosionSound = game.add.audio('explosionSound');
		// this.explosion  = game.add.sprite(-100,-100, 'explosion');
		//
		// this.score = 0;
		// this.enemiesOut = 0;
		// this.scoreText = this.game.add.text(20, 20, "" + this._getScoreToDisplay(), { font: "30px Arial", fill: this.white});
		// this.scoreText.fontWeight = "bold";
	},

	update: function() {
    	this.hud.update();
    // this.heroManager.update();
    //     game.physics.arcade.overlap( this.heroManager._getFire() ,  this.ennemy.getEnemy().getEnemiesShot() , this.fireHitEnnemy, null, this);
    //     game.physics.arcade.collide(this.heroManager._getSprite() ,  this.ennemy.getEnemy().getEnemies() , this.ennemyHitHero, null, this);
    // 	this.ennemy.update();
		//
		//
	  // if (this.shakeWorld > 0)
		// {
		// 	var rand1 = game.rnd.integerInRange(-5,5);
		// 	var rand2 = game.rnd.integerInRange(-5,5);
		// 	game.world.setBounds(rand1, rand2, game.width + rand1, game.height + rand2);
		// 	this.shakeWorld--;
		// }
		//
		// if (this.shakeWorld == 0) {
		// 	game.world.setBounds(0, 0, game.width,game.height);
		// }
		//
		// if (this.ennemy != undefined) {
		// 	this.enemiesOut = this.ennemy._getEnemiesOut();
		// }
		// this.scoreText.setText(this._getScoreToDisplay());
	},

	lose: function() {
		this.game.state.start("GameOver");
	}

}
