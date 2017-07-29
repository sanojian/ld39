var GameState = function(game) {};


GameState.prototype.create = function() {

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.add.image(0, 0, 'background');

    setupLevel(this.game);

    // graphics drawing surface
    g_game.drawingSurface = this.game.add.graphics(0, 0);

    var player = this.game.add.sprite(g_game.planets[0].x, g_game.planets[0].y - 32, 'ship1');
    player.anchor.setTo(0.5, 0.5);
    player.customProps = {
        orbitAngle: 0,
        orbitPlanet: g_game.planets[0],
        grappleLength: 32
    };
    player.checkWorldBounds = true;
    player.events.onOutOfBounds.add(killPlayer, this);

    g_game.player = player;
    enterOrbit(g_game.player, g_game.planets[0]);



    console.log('game started');
};

function setupLevel(game) {

    for (var i in g_game.levels) {
        if (g_game.levels.hasOwnProperty(i)) {
            //planets
            if (g_game.levels[g_game.currentlvl]['planet' + i]) {
                var planetDef = g_game.levels[g_game.currentlvl]['planet' + i];
                var planet = game.add.sprite(planetDef.x, planetDef.y, planetDef.key);
                planet.anchor.setTo(0.5, 0.5);
                planet.scale.setTo(planetDef.scale);
                g_game.planets.push(planet);
            }
            //asteroids         
            if (g_game.levels[g_game.currentlvl]['asteroid' + i]) {
                var asteroidDef = g_game.levels[g_game.currentlvl]['asteroid' + i];
                var asteroid = game.add.sprite(asteroidDef.x, asteroidDef.y, asteroidDef.key);
                asteroid.anchor.setTo(0.5, 0.5);
                asteroid.scale.setTo(asteroidDef.scale);
                g_game.asteroids.push(asteroid);
            }


        }
    }


}