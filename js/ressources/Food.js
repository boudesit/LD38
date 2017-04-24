function Food(game, posX, posY) {
	this.game = game;
  this.foodSprite = null;
  this.posX = posX;
	this.posY = posY;

};

Food.prototype.create = function create() {

	this.foodSprite = this.game.add.sprite(this.posX, this.posY, "food", 0);


};

Food.prototype.update = function update() {


};
