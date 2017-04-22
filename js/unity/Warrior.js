function Warrior(game) {
	this.life = 1;
  this.dead = false;
};

Warrior.prototype.create = function create() {
	console.log("coucou je suis un Warrior");
};

Warrior.prototype.getSprite = function getSprite() {
	return this.WarriorSprite;
};

Warrior.prototype.update = function update() {
};

Warrior.prototype.destroy = function destroy() {
	this.WarriorSprite.destroy();
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
