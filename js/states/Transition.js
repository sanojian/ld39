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

//yes this is a map editor, sue me
// var Transition = function(game) {};
// Transition.prototype = {
//     create: function() {
//         g_game.edindex = 0;
//         g_game.edoutput = '';
//         g_game.currentTool = null;
//         g_game.edasteroid = this.game.add.button(64, this.game.height - 32, 'asteroid1', function() {
//              g_game.currentTool = g_game.edasteroid;
//  g_game.edindex = 0;
//         }, this);
//         g_game.edplanet = this.game.add.button(128, this.game.height - 32, 'planet1', function() {
//              g_game.currentTool =  g_game.edplanet;
//  g_game.edindex = 0;
//         }, this);


//    this.game.input.onDown.add(function(){
//    if( this.game.input.activePointer.y < this.game.height - 32){
//     placeObject(this.game,g_game.currentTool);
// }
// },this);
//     },
//     update: function() {

//     }

// };

// function placeObject(game,object){
//  g_game.edindex +=1;
// if(g_game.currentTool ==  g_game.edasteroid){
// var object = game.add.sprite(game.input.activePointer.x,game.input.activePointer.y,'asteroid1');
// object.anchor.setTo(0.5,0.5);
// var line = 'asteroid'+g_game.edindex+':{x:'+Math.floor(object.x)+",y:"+Math.floor(object.y)+",key:\'"+ object.key+'\',scale: 1, special:false,type:\'asteroid\''+ '},';
// g_game.edoutput.concat(line);
// }
//  if(g_game.currentTool ==  g_game.edplanet){
// var object = game.add.sprite(game.input.activePointer.x,game.input.activePointer.y,'planet1');
// object.anchor.setTo(0.5,0.5);
// var line = 'planet'+g_game.edindex+':{x:'+Math.floor(object.x)+",y:"+Math.floor(object.y)+",key:\'"+ object.key+'\',scale: 1,type:\'planet\'' + '},';
// g_game.edoutput.concat(line);

// }

// console.log(line);

// }