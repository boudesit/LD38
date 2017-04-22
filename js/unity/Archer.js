function Archer(game) {
	this.life = 1;
  this.dead = false;
};

Archer.prototype.create = function create() {

	console.log("coucou je suis un archer");
};

Archer.prototype.getSprite = function getSprite() {
	return this.ArcherSprite;
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
