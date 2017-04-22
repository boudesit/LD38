function Enemy(game, velocity, type, door, heroSprite) {
	this.game = game;
	this.enemy = null;
	this.isDead = null;
	this.type = type;
};



Enemy.prototype.create = function create() {
	this.createEnemy();
};

Enemy.prototype.update = function update() {
	this.enemy.update();
};

Enemy.prototype.die = function die() {
	this.enemy.die();
};

Enemy.prototype.getSprite = function getSprite() {
	return this.enemy.getSprite();
};

Enemy.prototype.createEnemy = function createEnemy(){
	if(this.type === "Warrior"){
		this.enemy = new Warrior(this.game);
		this.enemy.create();
	}else if(this.type === "Archer"){
		this.enemy = new Archer(this.game);
		this.enemy.create();
};

Enemy.prototype.chooseDoor = function chooseDoor(){
	if(this.door === "door1"){
		return door1;
	}else if(this.door === "door2"){
		return door2;
	}else if(this.door === "door3"){
		return door3;
	}else if(this.door === "door4"){
		return door4;
	}
}

Enemy.prototype.destroy = function destroy() {
	this.enemy.destroy();
};
