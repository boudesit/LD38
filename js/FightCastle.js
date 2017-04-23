function FightCastle(game, unit, castle) {
	this.game = game;
	this.unit = unit;
	this.castle = castle;
  this.finnish = false;
};

FightCastle.prototype.create = function create() {
  this.unit.body.velocity.x = 0;
  this.timer = game.time.create(false);
  this.timer.loop(1000, this.fight, this);
  this.timer.start();
};



FightCastle.prototype.update = function update() {
};


FightCastle.prototype.fight = function fight() {

  this.castle.life -= this.unit.damage;

  if(this.castle.life <= 0) {
    this.finnish = true;
  }
  console.log("Life: " +this.castle.life);
};

FightCastle.prototype.getUnitSprite = function getUnitSprite() {
  return this.unit;
};

FightCastle.prototype.isFinnish = function isFinnish() {
  return this.finnish;
};
//
// Fight.prototype.lose = function lose() {
// 	this.game.scoreTotal = 	this.score;
// 	this.game.state.start("GameOver");
// };
//
// Fight.prototype._incrementScore = function _incrementScore() {
// 		this.score += 50;
// 		this.scoreText.text = this.score;
// };
