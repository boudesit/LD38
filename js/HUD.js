function HUD(game) {
	this.game = game;
	this.player = null;
	this.computer = null;
	this.map = null;
  this.music = null;
	this.music = null;
  this.spriteBG = null;
	this.fight = null;
};

HUD.prototype.create = function create() {

   this.spriteBG = this.game.add.tileSprite(0, 0, 800, 600, 'background');

	 this.player = new Player(this.game);
   this.player.create();

	 this.computer = new Computer(this.game);
   this.computer.create();

	 this.map = new map(this.game);
 	 this.map.create();

	 this.explosionSound = game.add.audio('explosionSound');
 	 this.explosion  = game.add.sprite(-100,-100, 'explosion');
  // this.music = game.add.audio('gameSound', 1, true);
	// if (this.music.isPlaying == false)
	// {
	// 	 this.music.play();
	// }else{
	// 	this.music.resume();
	// }

	// this.spriteBG.animations.add('backgroundAnime');
	// this.spriteBG.animations.play('backgroundAnime', 10, true);
	//
	// this.map = new map(this.game);
  // this.map.create();
	//
	//
	// this.explosionSound = game.add.audio('explosionSound');
	// this.explosion  = game.add.sprite(-100,-100, 'explosion');
	//
  // this.hero = new HeroManager(this.game);
  // this.hero.create();
	//
  // this.enemy = new EnemyManager(this.game, this.hero._getSprite());
  // this.enemy.create();
	//
  // this.wavesManager = new WavesManager(this.game, this.enemy);
  // this.wavesManager.create();
	//
	// //  The score
	// this.scoreText = game.add.text(100, 15, this.score, { font: '34px Arial', fill: '#fff' });
	//
	// //Live HUD
	// this.lives = game.add.group();
	//
	//
	// for (var i = 0; i < 3; i++)
	// {
	// 		var hero_life = this.lives.create(game.world.width - 200 + (30 * i), 35, 'hero_idle');
	// 		hero_life.anchor.setTo(0.5, 0.5);
	// }


};



HUD.prototype.update = function update() {
  this.player.update();
	this.computer.update();

	//  Run collision
	game.physics.arcade.collide(  this.player.getPlayerUnitGroup() , this.player.getPlayerUnitGroup()  , null, null, this);
	game.physics.arcade.collide(  this.computer.getComputerUnitGroup() , this.computer.getComputerUnitGroup()  , null, null, this);


	game.physics.arcade.overlap(  this.player.getPlayerUnitGroup() , this.computer.getComputerCastle() , this.playerHitCastle, null, this);
	game.physics.arcade.overlap(  this.computer.getComputerUnitGroup() , this.player.getPlayerCastle() , this.computerHitCastle, null, this);

	game.physics.arcade.overlap(  this.player.getPlayerUnitGroup() , this.computer.getComputerUnitGroup() , this.computeFight, null, this);

<<<<<<< HEAD
	if(this.fight != null && this.fight.isFinnish()) {
		this.player.getPlayerUnitGroup().setAll("body.velocity.x", 60);
		this.computer.getComputerUnitGroup().setAll("body.velocity.x", -60);
	}
=======
	//
>>>>>>> refs/remotes/origin/development

	if (this.shakeWorld > 0)
	{
		var rand1 = game.rnd.integerInRange(-5,5);
		var rand2 = game.rnd.integerInRange(-5,5);
		game.world.setBounds(rand1, rand2, game.width + rand1, game.height + rand2);
		this.shakeWorld--;
	}

	if (this.shakeWorld == 0) {
		game.world.setBounds(0, 0, game.width,game.height);
	}
};


// HUD.prototype.destroyBullet = function destroyBullet(mur,bullet) {
// 	bullet.kill();
// }
//
// HUD.prototype.fire1HitEnemy = function fire1HitEnemy(fire,enemy) {
//
// 	 this.shakeWorld = 5;
// 	 enemy.life -= 3;
//
// 	 if(enemy.life <= 0) {
// 		 this.explosion.reset(enemy.body.x, enemy.body.y - 50);
// 		 this.explosion.animations.add('boom');
// 		 this.explosion.play('boom', 30, false , true);
// 		 this.explosionSound.play();
// 		 enemy.kill();
// 	 }
//
// 	 fire.kill();
//
//    this._incrementScore();
// };
//
// HUD.prototype.fire2HitEnemy = function fire2HitEnemy(fire,enemy) {
//
// 	 this.shakeWorld = 5;
// 	 enemy.life -= 1;
//
// 	 if(enemy.life <= 0) {
// 		 enemy.kill();
// 		 this.explosion.reset(enemy.body.x - 10, enemy.body.y - 10);
// 		 this.explosion.animations.add('boom');
// 		 this.explosion.play('boom', 30, false , true);
// 		 this.explosionSound.play();
// 	 }
//
// 	 fire.kill();
//
//    this._incrementScore();
// };
//
//
//
HUD.prototype.computeFight = function computeFight(player,computer) {

		this.fight = new Fight(this.game, player, computer);
		this.fight.create();
};

HUD.prototype.playerHitCastle = function playerHitCastle(player,computerCastle) {

		computerCastle.life -= player.damage;
		this.shakeWorld = 5;

		if(computerCastle.life <= 0) {
		 		 this.explosion.reset(computerCastle.body.x, computerCastle.body.y + 50);
		 		 this.explosion.animations.add('boom');
		 		 this.explosion.play('boom', 30, false , true);
				 this.explosionSound.play();
		 		 computerCastle.kill();
		}

};


HUD.prototype.computerHitCastle = function computerHitCastle(computer,playerCastle) {

		playerCastle.life -= computer.damage;
		this.shakeWorld = 5;

		if(playerCastle.life <= 0) {
		 		 this.explosion.reset(playerCastle.body.x, playerCastle.body.y - 50);
		 		 this.explosion.animations.add('boom');
		 		 this.explosion.play('boom', 30, false , true);
				 this.explosionSound.play();
		 		 playerCastle.kill();
		}

};

//
// HUD.prototype.lose = function lose() {
// 	this.game.scoreTotal = 	this.score;
// 	this.game.state.start("GameOver");
// };
//
// HUD.prototype._incrementScore = function _incrementScore() {
// 		this.score += 50;
// 		this.scoreText.text = this.score;
// };
