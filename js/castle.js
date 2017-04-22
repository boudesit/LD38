function Castle(game , castleArmee) {
	this.life = 10;
  this.dead = false;
	this.castleArmee = castleArmee;
};

Castle.prototype.create = function create() {
	if(this.castleArmee === 'player')
	{
   	 game.add.sprite(50, 400, 'spriteCastlePlay')
	}
	if (this.castleArmee === 'computer')
	{
		 game.add.sprite(700,400, 'spriteCastleComp')
	}


};

Castle.prototype.getSprite = function getSprite() {
	return this.castleSprite;
};

Castle.prototype.update = function update() {
};
