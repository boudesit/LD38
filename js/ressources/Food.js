function Food(game) {
	this.game = game;
  this.foodSprite = null;
  this.randomPosX = null;
};

Food.prototype.create = function create() {

  this.rand = this.getRandomIntInclusive(0 , 2);

  if( this.rand === 0 )
  {
    this.randomPosX = 5
  }
  else if(this.rand === 1 )
  {
    this.randomPosX = 245
  }
  else
  {
    this.randomPosX = 500
  }


	this.foodSprite = this.game.add.sprite(this.randomPosX, 535, "food", 0);


};

Food.prototype.update = function update() {


};

Food.prototype.getRandomIntInclusive = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}
