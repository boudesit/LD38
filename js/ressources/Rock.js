function Rock(game, posX, posY) {
	this.game = game;
  this.rockSprite = null;
  this.posX = posX;
	this.posY = posY;
};

Rock.prototype.create = function create() {

  	this.rockSprite = this.game.add.sprite(this.posX, this.posY, "rock", 0);
};

Rock.prototype.update = function update() {


};
