var Player = function(game) {
	this.game = game;
	this.unityManager = null;
	this.food = 100;
	this.water = 100;
	this.rock = 100;
	this.castle = null;
	this.PlayerUnitGroup = null;
	this.PlayerUnitRockGroupRessource = null;
	this.PlayerUnitFoodGroupRessource = null;
	this.PlayerUnitWaterGroupRessource = null;

	this.text1 = null;
	this.text2 = null;
	this.text3 = null;
	this.timer = null;
}

Player.prototype = {
  	create: function() {
			//  Create our Timer
			this.timer = game.time.create(false);
      this.timer.start();

			this.unityManager = new UnityManager(this.game, "player");

			//  Affichage des Ressources
			game.add.text(20, 10, "Player Ressources", { font: '20px Arial', fill: '#0000' });
			this.text1 = game.add.text(50, 40, "Food : " + this.food, { font: '18px Arial', fill: '#00ff00' });
			this.text2 = game.add.text(50, 60, "Water : " + this.water, { font: '18px Arial', fill: '#0000ff' });
			this.text3 = game.add.text(50, 80, "Rock : " + this.rock, { font: '18px Arial', fill: '#c0c0c0' });

			//button
			game.add.button(250, 30, 'buttonArcher', this.actionOnArcher, this, 2, 1, 0);
			game.add.button(320, 30, 'buttonWarrior', this.actionOnWarrior, this, 2, 1, 0);

			game.add.button(250, 90, 'buttonUnitWater', this.actionOnUnitWater, this, 2, 1, 0);
			game.add.button(320, 90, 'buttonUnitFood', this.actionOnUnitFood, this, 2, 1, 0);
			game.add.button(390, 90, 'buttonUnitRock', this.actionOnUnitRock, this, 2, 1, 0);


			this.castle = new Castle(game, 'player');
			this.castle.create();
	},

	update: function() {
		this.unityManager.update();
		this.PlayerUnitGroup = this.unityManager._getUnitGroup();
		this.PlayerUnitRockGroupRessource = this.unityManager._getUnitRessourcesRockGroup();
		this.PlayerUnitWaterGroupRessource = this.unityManager._getUnitRessourcesWaterGroup();
		this.PlayerUnitFoodGroupRessource = this.unityManager._getUnitRessourcesFoodGroup();

		this.text1.setText("Food : " + this.food);
		this.text2.setText("Water : " + this.water);
		this.text3.setText("Rock : " + this.rock);

	},

	actionOnArcher: function() {

		if(this.nextClickOnUnit>game.time.now)
		{
			return;
		} // too early

		this.nextClickOnUnit = game.time.now + 1000; // wait at least 1 second (1000ms)

		if(this.buy("Archer")) {
			this.unityManager.setUnitType("Archer");
			this.unityManager.setUnitClass(0);
			this.unityManager.isCreate(true);
		}

	},

	actionOnWarrior: function() {

		if(this.nextClickOnUnit>game.time.now)
		{
			return;
		} // too early

		this.nextClickOnUnit = game.time.now + 1000; // wait at least 1 second (1000ms)

		if(this.buy("Warrior")) {
			this.unityManager.setUnitType("Warrior");
			this.unityManager.setUnitClass(0);
			this.unityManager.isCreate(true);
		}

	},

	actionOnUnitRock: function () {

		if(this.nextClickOnUnit>game.time.now)
		{
			return;
		} // too early

		this.nextClickOnUnit = game.time.now + 1000; // wait at least 1 second (1000ms)

		if(this.buy("UnitRock")) {
			this.unityManager.setUnitType("UnitRock");
			this.unityManager.setUnitClass(1);
			this.unityManager.isCreate(true);
		}
	},

	actionOnUnitWater: function () {

		if(this.nextClickOnUnit>game.time.now)
		{
			return;
		} // too early

		this.nextClickOnUnit = game.time.now + 1000; // wait at least 1 second (1000ms)

		if(this.buy("UnitRock")) {
			this.unityManager.setUnitType("UnitWater");
			this.unityManager.setUnitClass(1);
			this.unityManager.isCreate(true);
		}
	},

	actionOnUnitFood: function () {

		if(this.nextClickOnUnit>game.time.now)
		{
			return;
		} // too early

		this.nextClickOnUnit = game.time.now + 1000; // wait at least 1 second (1000ms)

		if(this.buy("UnitRock")) {
			this.unityManager.setUnitType("UnitFood");
			this.unityManager.setUnitClass(1);
			this.unityManager.isCreate(true);
		}
	},


	getPlayerUnitGroup: function() {
		return this.PlayerUnitGroup;
	},

	getPlayerUnitRockGroupRessource: function() {
		return this.PlayerUnitRockGroupRessource;
	},

	getPlayerUnitWaterGroupRessource: function() {
		return this.PlayerUnitWaterGroupRessource;
	},

	getPlayerUnitFoodGroupRessource: function() {
		return this.PlayerUnitFoodGroupRessource;
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

		// For Warrior
		if(this.food >= 10 && this.water >= 10 && this.rock >= 10 && type === "UnitRock") {
			this.food -= 10;
			this.water -= 10;
			this.rock -= 10;
			isbuy = true;
		}
		return isbuy;

	},

	setRock: function(rock) {
		this.rock+= rock;
	},

	setWater: function(water) {
		this.water+= water;
	},

	setFood: function(food) {
		this.food+= food;
	}

}
