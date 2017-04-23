function Archer(game, unitClans) {
	this.game = game;
	this.life = 4;
	this.archerSprite = null;
  this.dead = false;
	if(unitClans === "player") {
		this.velocityX = 60;
		this.posX = 100;
	} else {
		this.velocityX = -120;
		this.posX = 700;
	}
};

Archer.prototype.create = function create() {

	this.archerSprite = this.game.add.sprite(this.posX, 400, "Canard", 0);
	this.archerSprite.animations.add('idle', [0,1,2]);
	this.archerSprite.animations.play('idle', 5, true);
	this.game.physics.arcade.enable(this.archerSprite);
	this.archerSprite.enableBody = true;
	this.archerSprite.body.velocity.x = this.velocityX;
	this.archerSprite.body.velocity.y = 0;
	this.archerSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.archerSprite.body.collideWorldBounds=true;
	this.archerSprite.anchor.set(0.5);
	this.archerSprite.scale.setTo(2,2);
	this.archerSprite.life = this.life;
	this.archerSprite.damage = 1;
};

Archer.prototype.getSprite = function getSprite() {
	return this.archerSprite;
};

Archer.prototype.update = function update() {
};

Archer.prototype.destroy = function destroy() {
	this.ArcherSprite.destroy();
};

Archer.prototype.isDead = function isDead() {
	return this.dead;
};

Archer.prototype.die = function die() {
	this.dead = true;
};

Archer.prototype.getLife = function getLife() {
	return this.life;
};

Archer.prototype.setLife = function setLife(life) {
	this.life = life;
};
