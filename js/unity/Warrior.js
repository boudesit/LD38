function Warrior(game) {
	this.game = game;
	this.life = 1;
	this.warriorSprite = null;
  this.dead = false;
};

Warrior.prototype.create = function create() {
	this.warriorSprite = this.game.add.sprite(300, 200, "Dindon", 0);
	this.warriorSprite.animations.add('idle', [0,1,2]);
	this.warriorSprite.animations.play('idle', 5, true);
	this.game.physics.arcade.enable(this.warriorSprite);
	this.warriorSprite.enableBody = true;
	this.warriorSprite.body.velocity.x = this.velocity;
	this.warriorSprite.body.velocity.y = this.velocity;
	this.warriorSprite.physicsBodyType = Phaser.Physics.ARCADE;
	this.warriorSprite.body.collideWorldBounds=true;
	this.warriorSprite.anchor.set(0.5);
	this.warriorSprite.scale.setTo(2,2);
	this.warriorSprite.life = 6;
	this.warriorSprite.score = 150;};

Warrior.prototype.getSprite = function getSprite() {
	return this.warriorSprite;
};

Warrior.prototype.update = function update() {
};

Warrior.prototype.destroy = function destroy() {
	this.warriorSprite.destroy();
};

Warrior.prototype.isDead = function isDead() {
	return this.dead;
};

Warrior.prototype.die = function die() {
	this.dead = true;
};

Warrior.prototype.getLife = function getLife() {
	return this.life;
};

Warrior.prototype.setLife = function setLife(life) {
	this.life = life;
};
