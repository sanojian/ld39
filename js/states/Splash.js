var SplashScreen = function(game) {};
SplashScreen.prototype = {
    preload: function() {
        this.load.image('preloaderBar', 'assets/gfx/loading-bar.png');
        this.load.image('splashBackground', 'assets/gfx/splashBackground.png');
        this.load.image('background', 'assets/gfx/background.png');

        this.load.image('planet1', 'assets/gfx/planet1.png');
        this.load.image('planet2', 'assets/gfx/planet2.png');
        this.load.image('asteroid', 'assets/gfx/asteroid.png');
        this.load.image('goal', 'assets/gfx/goal.png');

        this.load.image('asteroidfrag1', 'assets/gfx/asteroidfrag1.png');
        this.load.image('asteroidfrag2', 'assets/gfx/asteroidfrag2.png');
        this.load.image('asteroidfrag3', 'assets/gfx/asteroidfrag3.png');


        this.load.image('rocketfrag1', 'assets/gfx/rocketfrag1.png');
        this.load.image('rocketfrag2', 'assets/gfx/rocketfrag2.png');
        this.load.image('rocketfrag3', 'assets/gfx/rocketfrag3.png');

        this.load.image('fuel_bg', 'assets/gfx/fuel_bg.png');
        this.load.image('fuel', 'assets/gfx/fuel.png');

				this.game.load.audio('engine', ['assets/audio/sfx/engine.wav']);

        this.load.bitmapFont('font', 'assets/gfx/font.png', 'assets/gfx/font.xml');


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
