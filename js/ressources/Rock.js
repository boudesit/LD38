function Rock(game, posX, posY) {
	this.game = game;
  this.rockSprite = null;
  this.posX = posX;
	this.posY = posY;
};

Rock.prototype.create = function create() {

  	this.rockSprite = this.game.add.sprite(this.posX, this.posY, "rock", 0);
		this.rockSprite.enableBody = true;
		this.game.physics.arcade.enable(this.rockSprite);
		this.rockSprite.body.velocity.x = 0;
		this.rockSprite.body.velocity.y = 0;
		this.rockSprite.physicsBodyType = Phaser.Physics.ARCADE;
		this.rockSprite.type = "Rock";

};

Rock.prototype.update = function update() {
};

Rock.prototype.getSprite =function getSprite() {
	return this.rockSprite;
}
