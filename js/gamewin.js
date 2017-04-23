var gameWin = function(game){
}

gameWin.prototype = {
  create: function(){
      winSound = game.add.audio('winSound', 1 , true);
      this.spriteBG = this.game.add.tileSprite(0, 0, 800, 600, 'gamewin');

      if (winSound.isPlaying == false)
      {
          winSound.play();
      }else{
          winSound.resume();
      }

    this.restartButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.restartButton.onDown.add(this.playTheGame, this);
  },

  playTheGame: function(){
    winSound.pause();
    this.game.state.start("TheGame");
  }
}
