function Rock(game) {
	this.game = game;
  this.rockSprite = null;
  this.randomPosX = null;
};

Rock.prototype.create = function create() {


    this.rand = this.getRandomIntInclusive(0 , 2);

    if( this.rand === 0 )
    {
      this.randomPosX = 190
    }
    else if(this.rand === 1 )
    {
      this.randomPosX = 70
    }
    else
    {
      this.randomPosX = 300
    }


  	this.rockSprite = this.game.add.sprite(this.randomPosX, 535, "rock", 0);
};

Rock.prototype.update = function update() {


};

Rock.prototype.getRandomIntInclusive = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
};
