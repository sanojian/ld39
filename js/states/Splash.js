var SplashScreen = function(game) {};
SplashScreen.prototype = {
    preload: function() {
        this.load.image('preloaderBar', 'assets/gfx/loading-bar.png');
        this.load.image('splashBackground', 'assets/gfx/splashBackground.png');

        this.load.image('planet1', 'assets/gfx/planet1.png');
        this.load.image('planet2', 'assets/gfx/planet2.png');
        this.load.image('planet3', 'assets/gfx/planet3.png');
        this.load.image('planet4', 'assets/gfx/planet4.png');

        this.load.image('asteroid1', 'assets/gfx/asteroid1.png');
        this.load.image('asteroid2', 'assets/gfx/asteroid2.png');
        this.load.image('asteroid3', 'assets/gfx/asteroid3.png');

        this.load.image('bg1', 'assets/gfx/bg1.png');
        this.load.image('bg2', 'assets/gfx/bg2.png');
        this.load.image('bg3', 'assets/gfx/bg3.png');

        this.load.image('goal', 'assets/gfx/goal.png');
        this.load.image('pump', 'assets/gfx/pump.png');

        this.load.image('asteroidfrag1', 'assets/gfx/asteroidfrag1.png');
        this.load.image('asteroidfrag2', 'assets/gfx/asteroidfrag2.png');
        this.load.image('asteroidfrag3', 'assets/gfx/asteroidfrag3.png');


        this.load.image('rocketfrag1', 'assets/gfx/rocketfrag1.png');
        this.load.image('rocketfrag2', 'assets/gfx/rocketfrag2.png');
        this.load.image('rocketfrag3', 'assets/gfx/rocketfrag3.png');

        this.load.image('fuel_bg', 'assets/gfx/fuel_bg.png');
        this.load.image('fuel', 'assets/gfx/fuel.png');

        this.load.image('hook', 'assets/gfx/Hook.png');

        this.load.image('win', 'assets/gfx/win.png');

        this.load.image('storyScreen', 'assets/gfx/storyScreen.png');

        this.game.load.audio('engine', ['assets/audio/sfx/engine.wav']);
        this.game.load.audio('grappleExtend', ['assets/audio/sfx/grappleExtend.wav']);
        this.game.load.audio('grapple', ['assets/audio/sfx/grapple.wav']);
        this.game.load.audio('explode', ['assets/audio/sfx/explode.wav']);
        this.game.load.audio('applause', ['assets/audio/sfx/applause.wav']);
        this.game.load.audio('ingame', ['assets/audio/music/ingame.mp3']);



        this.load.bitmapFont('font', 'assets/gfx/font.png', 'assets/gfx/font.xml');


        this.load.spritesheet('ship1', 'assets/gfx/ship1.png', 16, 9);
        this.load.spritesheet('ship2', 'assets/gfx/shipEnemy.png', 16, 9);


        this.load.image('editor', 'assets/gfx/editor.png');


    },
    create: function() {
        g_game.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        g_game.splashBackground = this.game.add.image(0, 0, 'splashBackground');



    },
    update: function() {
        if (g_game.spaceKey.isDown) {
            g_game.splashBackground.visible = false;
        }
        if (this.cache.isSoundDecoded('ingame') && g_game.splashBackground.visible == false) {
            if (!g_game.editor) {
                this.game.state.start('Story');

            } else {
                this.game.state.start('Editor');
            }
        }

    }

};