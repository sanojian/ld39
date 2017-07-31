var Story = function(game) {};
Story.prototype = {
    preload: function() {


    },
    create: function() {
        g_game.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        storyScreen = this.game.add.image(0, 0, 'storyScreen');
        storyScreen.width = this.game.width;
        storyScreen.height = this.game.height;

        var style = { font: "bold 18px 'Press Start 2P'", fill: "#DEEED6" };
        this.game.add.text(
          this.game.width/2,
          128,
          'Oh no!  You have been betrayed\nand your beloved kidnapped.\n\nTime to fuel up and chase the\ndastardly perpitrator!'.toUpperCase(),
          style
        ).anchor.set(0.5, 0.5);


    },
    update: function() {
        if (g_game.spaceKey.isDown) {
            this.game.state.start('game');

        }

    }

};
