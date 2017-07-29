var SplashScreen = function(game) {};
SplashScreen.prototype = {
	preload: function() {
		this.load.image('preloaderBar', 'assets/gfx/loading-bar.png');
		this.load.image('splashBackground', 'assets/gfx/splashBackground.png');
		this.load.image('background', 'assets/gfx/background.png');

		this.load.image('planet1', 'assets/gfx/planet1.png');
		this.load.image('planet2', 'assets/gfx/planet2.png');

		this.load.spritesheet('ship1', 'assets/gfx/ship1.png', 16, 9);

	},
	create: function() {
    g_game.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    this.game.add.image(0, 0, 'splashBackground');

    console.log('waiting for space...');
  },
  update: function() {
    if (g_game.spaceKey.isDown) {
      this.game.state.start('game');
    }
  }

};
