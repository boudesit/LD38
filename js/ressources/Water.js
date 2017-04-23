function Water(game) {
	this.game = game;
  this.waterSprite = null;
  this.randomPosX = null;
};

Water.prototype.create = function create() {


    this.rand = this.getRandomIntInclusive(0 , 2);

    if( this.rand === 0 )
    {
      this.randomPosX = 360
    }
    else if(this.rand === 1 )
    {
      this.randomPosX = 425
    }
    else
    {
      this.randomPosX = 125
    }


  	this.waterSprite = this.game.add.sprite(this.randomPosX, 535, "water", 0);

};

Water.prototype.update = function update() {


};

Water.prototype.getRandomIntInclusive = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
};
