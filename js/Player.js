var Player = function(game) {
	this.game = game;
	this.unityManager = null;

}

Player.prototype = {
  	create: function() {
			this.unityManager = new UnityManager(this.game, "player");
			archerButton = game.add.button(100, 50, 'buttonArcher', this.actionOnArcher, this, 2, 1, 0);
			warriorButton = game.add.button(200, 50, 'buttonWarrior', this.actionOnWarrior, this, 2, 1, 0);
	},

	update: function() {
		this.unityManager.update();
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
	}
}
