function Water(game, posX, posY) {
	this.game = game;
  this.waterSprite = null;
  this.posX = posX;
	this.posY = posY;
};

Water.prototype.create = function create() {

  	this.waterSprite = this.game.add.sprite(this.posX, this.posY, "water", 0);

};

Water.prototype.update = function update() {


};
