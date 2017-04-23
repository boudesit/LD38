function RessourcesManager(game) {
	this.game = game;
  this.food = null;
  this.rock = null;
  this.watter = null;
};

RessourcesManager.prototype.create = function create() {

  this.food = new Food(this.game);
  this.food.create();

  this.rock = new Rock(this.game);
  this.rock.create();

  this.water = new Water(this.game);
  this.water.create();

};

RessourcesManager.prototype.update = function update() {


};
