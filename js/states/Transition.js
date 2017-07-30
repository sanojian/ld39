var Transition = function(game) {};
Transition.prototype = {
    create: function() {
        var transitionText = this.game.add.bitmapText(this.game.world.centerX, 128, 'font', 'GOOD JOB! \n BUT, SHE IS ON ANOTHER PLANET!', 32);
        transitionText.anchor.setTo(0.5, 0.5);

        var player = this.game.add.sprite(-64, this.game.world.centerY, 'ship1');
        player.scale.setTo(3, 3);
        g_game.transitionalPlayer = player;
        var playerEmitter = this.game.add.emitter(player.x, player.y, 100);
        playerEmitter.makeParticles(['rocketfrag1', 'rocketfrag2', 'rocketfrag3']);
        playerEmitter.gravity = 0;
        playerEmitter.start(false, 5000, 50);
        g_game.playerEmitter = playerEmitter;
    },
    update: function() {

        g_game.playerEmitter.x = g_game.transitionalPlayer.x;
        g_game.playerEmitter.y = g_game.transitionalPlayer.y + g_game.transitionalPlayer.height / 2;

        g_game.transitionalPlayer.x += 3;

        if (g_game.transitionalPlayer.x > this.game.width) {
        goToLevel(this.game,g_game.currentlvl+1);
        }

    }

};

function goToLevel(game, level){
game.state.start('game');
g_game.currentlvl = level;
}