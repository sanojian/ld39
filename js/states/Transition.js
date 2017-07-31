var Transition = function(game) {};
Transition.prototype = {
    create: function() {

        if (g_game.currentlvl < g_game.maxlvl) {
            var style = { font: "bold 16px 'Press Start 2P'", fill: "#DEEED6" };
            this.game.add.text(this.game.width/2, 128, g_game.levels[g_game.currentlvl].message.toUpperCase(), style).anchor.set(0.5, 0.5);


            //var transitionText = this.game.add.bitmapText(this.game.world.centerX, 128, 'font', g_game.levels[g_game.currentlvl].message, 32);
            //transitionText.anchor.setTo(0.5, 0.5);

            var player = this.game.add.sprite(-128, this.game.world.centerY, 'ship1');
            player.scale.setTo(3, 3);
            player.frame = 1;
            g_game.transitionalPlayer = player;
            player = this.game.add.sprite(32, this.game.world.centerY, 'ship2');
            player.scale.setTo(3, 3);
            player.frame = 1;
            g_game.transitionalPlayer2 = player;
            g_game.transitionalPlayer2.speed = 1;

        } else {

            var romanticimageaww = this.game.add.sprite(0, 0, 'win');
            romanticimageaww.width = this.game.width;
            romanticimageaww.height = this.game.height;


            g_game.youdidit = this.game.add.bitmapText(this.game.world.centerX, -64, 'font', 'YOU DID IT!', 32);
            g_game.youdidit.anchor.setTo(0.5, 0.5);



        }


        g_game.applause = this.game.add.audio('applause');
        g_game.applause.play();
        g_game.applause.volume = 0.2;
    },
    update: function() {
        if (g_game.currentlvl < g_game.maxlvl) {

            g_game.transitionalPlayer.x += 3;
            g_game.transitionalPlayer2.x += g_game.transitionalPlayer2.speed;
            g_game.transitionalPlayer2.speed += 0.1;

            if (g_game.transitionalPlayer.x > this.game.width) {
                goToLevel(this.game, g_game.currentlvl + 1);
                g_game.applause.stop();
            }
        }else{

        if (g_game.youdidit.y < 128) {
            g_game.youdidit.y += 1;
        }

    }

}
};

function goToLevel(game, level) {
    game.state.start('game');
    g_game.currentlvl = level;
}
