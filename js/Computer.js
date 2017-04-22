var Computer = function(game) {
	this.game = game;
	this.unityManager = null;
  this.food = null;
  this.water = null;
  this.rock = null;
this.castle = null;
}

Computer.prototype = {
  	create: function() {
      this.food = 100;
      this.water = 50;
      this.rock = 10;

			this.castle = new Castle(this.game, "computer");
			this.castle.create();
	    //  Ressources
			/*
      game.add.text(590, 10, "Computer Ressources", { font: '20px Arial', fill: '#fff' });
	    game.add.text(640, 40, "Food : " + this.food, { font: '18px Arial', fill: '#00ff00' });
	    game.add.text(640, 60, "Water : " + this.water, { font: '18px Arial', fill: '#0000ff' });
      game.add.text(640, 80, "Rock : " + this.rock, { font: '18px Arial', fill: '#c0c0c0' });
			*/

			this.unityManager = new UnityManager(this.game);
	},

	update: function() {


	}
}
