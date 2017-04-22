var Player = function(game) {
	this.game = game;
	this.unityManager = null;
	this.food = 100;
	this.water = 100;
	this.rock = 100;
	this.castle = null;
	this.PlayerUnitGroup = null;
	this.text1 = null;
	this.text2 = null;
	this.text3 = null;
}

Player.prototype = {
  	create: function() {
			this.unityManager = new UnityManager(this.game, "player");

			//  Affichage des Ressources
			game.add.text(20, 10, "Player Ressources", { font: '20px Arial', fill: '#fff' });
			this.text1 = game.add.text(50, 40, "Food : " + this.food, { font: '18px Arial', fill: '#00ff00' });
			this.text2 = game.add.text(50, 60, "Water : " + this.water, { font: '18px Arial', fill: '#0000ff' });
			this.text3 = game.add.text(50, 80, "Rock : " + this.rock, { font: '18px Arial', fill: '#c0c0c0' });

			//button
			archerButton = game.add.button(250, 20, 'buttonArcher', this.actionOnArcher, this, 2, 1, 0);
			warriorButton = game.add.button(250, 60, 'buttonWarrior', this.actionOnWarrior, this, 2, 1, 0);

			this.castle = new Castle(game, 'player');
			this.castle.create();
	},

	update: function() {
		this.unityManager.update();
		this.PlayerUnitGroup = this.unityManager._getUnitGroup();
		this.text1.setText("Food : " + this.food);
		this.text2.setText("Water : " + this.water);
		this.text3.setText("Rock : " + this.rock);

	},

	actionOnArcher: function() {

		if(this.buy("Archer")) {
			this.unityManager.setUnitType("Archer");
			this.unityManager.isCreate(true);
		}
		console.log("Button Archer clicker");
	},

	actionOnWarrior: function() {
		if(this.buy("Warrior")) {
			this.unityManager.setUnitType("Warrior");
			this.unityManager.isCreate(true);
		}
		console.log("Button Warrior clicker");
	},

	getPlayerUnitGroup: function() {
		return this.PlayerUnitGroup;
	},

	getPlayerCastle: function() {

		return this.castle.getSprite();
	},

		buy: function(type) {
		isbuy = false;
		// For Archer
		if(this.food >= 20 && this.water >= 10 && this.rock >= 5 && type === "Archer") {
			this.food -= 20;
			this.water -= 10;
			this.rock -= 5;
			isbuy = true;
		}

		// For Warrior
		if(this.food >= 30 && this.water >= 15 && this.rock >= 10 && type === "Warrior") {
			this.food -= 30;
			this.water -= 15;
			this.rock -= 10;
			isbuy = true;
		}
		return isbuy;

	}
}
