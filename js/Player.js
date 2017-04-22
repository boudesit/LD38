var Player = function(game) {
	this.game = game;
	this.unityManager = null;
	this.food = null;
  this.water = null;
  this.rock = null;
	this.castle = null;
	this.PlayerUnitGroup = null;
}

Player.prototype = {
  	create: function() {
			this.unityManager = new UnityManager(this.game, "player");

			this.food = 100;
			this.water = 50;
			this.rock = 10;

			//  Affichage des Ressources
			game.add.text(20, 10, "Player Ressources", { font: '20px Arial', fill: '#fff' });
			game.add.text(50, 40, "Food : " + this.food, { font: '18px Arial', fill: '#00ff00' });
			game.add.text(50, 60, "Water : " + this.water, { font: '18px Arial', fill: '#0000ff' });
			game.add.text(50, 80, "Rock : " + this.rock, { font: '18px Arial', fill: '#c0c0c0' });

			//button
			archerButton = game.add.button(250, 20, 'buttonArcher', this.actionOnArcher, this, 2, 1, 0);
			warriorButton = game.add.button(250, 60, 'buttonWarrior', this.actionOnWarrior, this, 2, 1, 0);

			this.castle = new Castle(game, 'player');
			this.castle.create();
	},

	update: function() {
		this.unityManager.update();
		this.PlayerUnitGroup = this.unityManager._getUnitGroup();
	},

	actionOnArcher: function() {

		this.unityManager.setUnitType("Archer");
		this.unityManager.isCreate(true);
		console.log("Button Archer clicker");
	},

	actionOnWarrior: function() {
		this.unityManager.setUnitType("Warrior");
		this.unityManager.isCreate(true);
		console.log("Button Warrior clicker");
	},

	getPlayerUnitGroup: function() {
		return this.PlayerUnitGroup;
	}
}
