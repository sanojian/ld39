var Story = function(game) {};
Story.prototype = {
    preload: function() {


    },
    create: function() {
        g_game.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        storyScreen = this.game.add.image(0, 0, 'storyScreen');
        storyScreen.width = this.game.width;
        storyScreen.height = this.game.height;

        var song = this.game.add.audio('ingame');
        if (!song.isPlaying) {
            song.loopFull(0.6);
        }

    },
    update: function() {
        if (g_game.spaceKey.isDown) {
            this.game.state.start('game');

        }

    }

};