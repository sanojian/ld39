var Editor = function(game) {};
Editor.prototype = {
    create: function() {



        g_game.sandbox = this.game.add.tilemap();
        g_game.layer = g_game.sandbox.create('sandbox', 40, 30, 24, 24);
        g_game.sandbox.addTilesetImage('editor');
        g_game.layer.resizeWorld();



        createTools(this.game);

        g_game.edplanetsindex = 0;
        g_game.edasteroidsindex = 0;
        //        g_game.edoutput = '';
        //        g_game.currentTool = null;
        //        g_game.edasteroid = this.game.add.button(64, this.game.height - 32, 'asteroid1', function() {
        //             g_game.currentTool = g_game.edasteroid;
        // g_game.edindex = 0;
        //        }, this);
        //        g_game.edplanet = this.game.add.button(128, this.game.height - 32, 'planet1', function() {
        //             g_game.currentTool =  g_game.edplanet;
        // g_game.edindex = 0;
        //        }, this);


        //    this.game.input.onDown.add(function(){
        //    if( this.game.input.activePointer.y < this.game.height - 32){
        //     placeObject(this.game,g_game.currentTool);
        // }
        // },this);

        this.game.input.addMoveCallback(function() {

            updateMarker(this.game);
        }, this);

    },
    update: function() {

    }

};

function createTools(game) {
    var tileSelector = game.add.group();


    g_game.edasteroid = game.add.button(64, game.height - 32, 'asteroid1', function() {

        pickTile(game, game.input.activePointer, 'asteroid');
        g_game.currentTileIndex = 1;
    }, this);
    g_game.edplanet = game.add.button(128, game.height - 32, 'planet1', function() {
        pickTile(game, game.input.activePointer, 'planet');
        g_game.currentTileIndex = 0;

    }, this);
    g_game.marker = game.add.graphics();
    g_game.marker.lineStyle(2, 0xFFFFFF, 1);
    g_game.marker.drawRect(0, 0, 24, 24);


    g_game.currentTileMarker = game.add.graphics();
    g_game.currentTileMarker.lineStyle(1, 0xffffff, 1);
    g_game.currentTileMarker.drawRect(128, game.height - 32, 24, 24);

    tileSelector.add(g_game.currentTileMarker);

    g_game.output = '';


}

function pickTile(game, pointer, id) {

    var x = game.math.snapToFloor(pointer.x, 24, 0);
    var y = game.math.snapToFloor(pointer.y, 24, 0);

    g_game.currentTileMarker.x = x;
    g_game.currentTileMarker.y = y;

    x /= 24;
    y /= 24;

    g_game.currentTile = id;





}

function updateMarker(game) {

    g_game.marker.x = g_game.layer.getTileX(game.input.activePointer.worldX) * 24;
    g_game.marker.y = g_game.layer.getTileY(game.input.activePointer.worldY) * 24;
    if (game.input.activePointer.y < game.height - 32) {
        if (game.input.mousePointer.isDown && g_game.marker.y > 24 && g_game.currentTile == 'asteroid') {
            g_game.edasteroidsindex += 1;
            g_game.sandbox.putTile(g_game.currentTileIndex, g_game.layer.getTileX(g_game.marker.x), g_game.layer.getTileY(g_game.marker.y), g_game.layer);
            g_game.output += 'asteroid' + g_game.edasteroidsindex + ':{x:' + g_game.layer.getTileX(g_game.marker.x) + ",y:" + g_game.layer.getTileY(g_game.marker.y) + ",key:\'asteroid1\',scale: 1.2, special:false,type:\'asteroid\' '},\n";
            console.log(g_game.output);
        } else if (game.input.mousePointer.isDown && g_game.marker.y > 24 && g_game.currentTile == 'planet') {
            g_game.edplanetsindex += 1;
            g_game.sandbox.putTile(g_game.currentTileIndex, g_game.layer.getTileX(g_game.marker.x), g_game.layer.getTileY(g_game.marker.y), g_game.layer);
            g_game.output += 'planet' + g_game.edplanetsindex + ':{x:' + g_game.layer.getTileX(g_game.marker.x) + ",y:" + g_game.layer.getTileY(g_game.marker.y) + ",key:\'planet1\',scale: 1, isFuel:true,type:\'planet\'},\n";
            console.log(g_game.output);
        }
    }
}

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