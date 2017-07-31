var Transition = function(game) {};
Transition.prototype = {
    create: function() {

        if (g_game.currentlvl < 7) {
            var transitionText = this.game.add.bitmapText(this.game.world.centerX, 128, 'font', 'GOOD JOB! \n BUT, SHE IS ON ANOTHER PLANET!', 32);
            transitionText.anchor.setTo(0.5, 0.5);

            var player = this.game.add.sprite(-128, this.game.world.centerY, 'ship1');
            player.scale.setTo(3, 3);
            player.frame = 1;
            g_game.transitionalPlayer = player;
            player = this.game.add.sprite(32, this.game.world.centerY, 'ship2');
            player.scale.setTo(3, 3);
            player.frame = 1;
            g_game.transitionalPlayer2 = player;
            g_game.transitionalPlayer2.speed = 1

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
        if (g_game.currentlvl < 7) {

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
