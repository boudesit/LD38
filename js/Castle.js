function Castle(game , castleArmee) {
	this.game = game;
	this.life = 20;
  this.dead = false;
	this.castleArmee = castleArmee;
	this.castleSprite = null;
};

Castle.prototype.create = function create() {
	if(this.castleArmee === 'player')
	{
   	this.castleSprite = game.add.sprite(50, 300, 'spriteCastlePlay')
		this.game.physics.enable(this.castleSprite);
	 	this.castleSprite.physicsBodyType = Phaser.Physics.ARCADE;
	 	this.castleSprite.enableBody = true;
	 	this.castleSprite.body.immovable = true;
		this.castleSprite.life = this.life;
		this.castleSprite.whois = "player";
	}
	if (this.castleArmee === 'computer')
	{
		this.castleSprite = game.add.sprite(600,300, 'spriteCastleComp')
	 	this.game.physics.enable(this.castleSprite);
	 	this.castleSprite.physicsBodyType = Phaser.Physics.ARCADE;
	 	this.castleSprite.enableBody = true;
	 	this.castleSprite.body.immovable = true;
		this.castleSprite.life = this.life;
		this.castleSprite.whois = "computer";
	 	//this.castleSprite.body.setSize(10, 600, 0, 600);

	}


};

Castle.prototype.getSprite = function getSprite() {
	return this.castleSprite;
};

Castle.prototype.update = function update() {
};
