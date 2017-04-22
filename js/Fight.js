function Fight(game, player, computer) {
	this.game = game;
	this.player = player;
	this.computer = computer;
};

Fight.prototype.create = function create() {
  this.player.body.velocity.x = 0;
  this.computer.body.velocity.x = 0;
  this.timer = game.time.create(false);
  this.timer.loop(1000, this.fight, this);
  this.timer.start();
};



Fight.prototype.update = function update() {
};


Fight.prototype.fight = function fight() {

		this.player.life -= this.computer.damage;
		this.computer.life -= this.player.damage;

	if(this.player.life <= 0){
		this.player.kill();
	}

	if(this.computer.life <= 0){
		this.computer.kill();
	}
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
