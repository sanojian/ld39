var Boot = function(game) {};

Boot.prototype = {
  preload: function() {

    //this.load.image("background", "assets/gfx/background.png");

  },
  create: function() {

    //this.game.stage.smoothed = false;
    this.scale.minWidth = g_game.baseWidth;
    this.scale.minHeight = g_game.baseHeight;
    this.scale.maxWidth = g_game.baseWidth * g_game.scale;
    this.scale.maxHeight = g_game.baseHeight * g_game.scale;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    // catch right click mouse
    this.game.canvas.oncontextmenu = function (e) { e.preventDefault(); };

    // dummy to preload font
    var style = { font: "bold 24px 'Press Start 2P'", fill: "#DEEED6" };
    this.game.add.text(this.game.width/2, 128, ' ', style).anchor.set(0.5, 0.5);


    this.state.start('Splash');
  }
};
