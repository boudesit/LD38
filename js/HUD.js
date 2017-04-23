function HUD(game) {
	this.game = game;
	this.ressourcesManager = null;
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

	 this.ressourcesManager = new RessourcesManager(this.game);
   this.ressourcesManager.create();

	 this.player = new Player(this.game);
   this.player.create();

	 this.computer = new Computer(this.game);
   this.computer.create();


	 this.map = new map(this.game);
 	 this.map.create();

	 this.explosionSound = game.add.audio('explosionSound');
 	 this.explosion  = game.add.sprite(-100,-100, 'explosion');

   this.music = game.add.audio('gameSound', 1, true);
	 if (this.music.isPlaying == false)
	 {
	 	 this.music.play();
	 }else{
	 	this.music.resume();
	 }

	// this.spriteBG.animations.add('backgroundAnime');
	// this.spriteBG.animations.play('backgroundAnime', 10, true);

	this.explosionSound = game.add.audio('explosionSound');
	this.explosion  = game.add.sprite(-100,-100, 'explosion');
};



HUD.prototype.update = function update() {
  this.player.update();
	this.computer.update();

	//  Run collision
	game.physics.arcade.collide(  this.player.getPlayerUnitGroup() , this.player.getPlayerUnitGroup()  , null, null, this);
	game.physics.arcade.collide(  this.computer.getComputerUnitGroup() , this.computer.getComputerUnitGroup()  , null, null, this);


	game.physics.arcade.collide(  this.player.getPlayerUnitGroup() , this.computer.getComputerCastle() , this.playerHitCastle, null, this);
	game.physics.arcade.collide(  this.computer.getComputerUnitGroup() , this.player.getPlayerCastle() , this.computerHitCastle, null, this);

	game.physics.arcade.overlap(  this.player.getPlayerUnitGroup() , this.computer.getComputerUnitGroup() , this.computeFight, null, this);

	if(this.fight != null && this.fight.isFinnish()) {
		this.player.getPlayerUnitGroup().setAll("body.velocity.x", 60);
		this.computer.getComputerUnitGroup().setAll("body.velocity.x", -60);
	}

	if (this.shakeWorld > 0)
	{
		var rand1 = game.rnd.integerInRange(-2,2);
		var rand2 = game.rnd.integerInRange(-2,2);
		game.world.setBounds(rand1, rand2, game.width + rand1, game.height + rand2);
		this.shakeWorld--;
	}

	if (this.shakeWorld == 0) {
		game.world.setBounds(0, 0, game.width,game.height);
	}
};

HUD.prototype.computeFight = function computeFight(player,computer) {

		this.fight = new Fight(this.game, player, computer);
		this.fight.create();
};

HUD.prototype.playerHitCastle = function playerHitCastle(computerCastle,player) {

		computerCastle.life -= player.damage;
		this.shakeWorld = 3;

		if(computerCastle.life <= 0) {
		 		 this.explosion.reset(computerCastle.body.x, computerCastle.body.y + 50);
		 		 this.explosion.animations.add('boom');
		 		 this.explosion.play('boom', 30, false , true);
				 this.explosionSound.play();
		 		 computerCastle.kill();
				 this.win();
		}
		player.body.velocity.x= 60;
};


HUD.prototype.computerHitCastle = function computerHitCastle(playerCastle,computer) {

		playerCastle.life -= computer.damage;
		this.shakeWorld = 3;

		if(playerCastle.life <= 0) {
		 		 this.explosion.reset(playerCastle.body.x, playerCastle.body.y - 50);
		 		 this.explosion.animations.add('boom');
		 		 this.explosion.play('boom', 30, false , true);
				 this.explosionSound.play();
		 		 playerCastle.kill();
				 this.lose();
		}
		computer.body.velocity.x= -60;
};

HUD.prototype.lose = function lose() {
	this.music.pause();
	this.game.state.start("GameOver");
};

HUD.prototype.win = function win() {
	this.music.pause();
	this.game.state.start("GameWin");
}
