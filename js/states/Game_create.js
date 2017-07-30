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
        grappleLength: 32,
    };
    player.checkWorldBounds = true;
    player.events.onOutOfBounds.add(killPlayer, this);

    g_game.player = player;
    enterOrbit(this.game,g_game.player, g_game.planets[0]);

    initAudio('engine', this.game, 0.2, true);
    initAudio('grappleExtend', this.game, 0.6, false);

    var fuelBarbg = this.game.add.sprite(0, 0, 'fuel_bg');
    var fuelBar = this.game.add.sprite(34, 0, 'fuel');
    fuelBar.cropEnabled = true;
    fuelBarbg.addChild(fuelBar);
    var fuel = 100;
    var maxFuel = 100;
    g_game.fuel = fuel;
    g_game.fuelBarbg = fuelBarbg;
    g_game.fuelBar = fuelBar;
    g_game.maxFuel = maxFuel;
    console.log('game started');

  var asteroidEmitter = this.game.add.emitter(0,0,20);
   asteroidEmitter.makeParticles(['asteroidfrag1','asteroidfrag2','asteroidfrag3']);
    asteroidEmitter.gravity = 0;
asteroidEmitter.minParticleSpeed.setTo(1, 1);
asteroidEmitter.maxParticleSpeed.setTo(25, 25);
    g_game.asteroidEmitter = asteroidEmitter;

    //decrease fuel
    this.game.time.events.loop(Phaser.Timer.SECOND / 4, fuelManagement, this);
};

function setupLevel(game) {

    for (var i in g_game.levels[g_game.currentlvl]) {
        //planets
        if (g_game.levels[g_game.currentlvl][i].type == 'planet') {
            var planetDef = g_game.levels[g_game.currentlvl][i];
            var planet = game.add.sprite(planetDef.x, planetDef.y, planetDef.key);
            planet.anchor.setTo(0.5, 0.5);
            planet.scale.setTo(planetDef.scale);
            planet.isGoal = planetDef.isGoal;
            g_game.planets.push(planet);
        }
        //asteroids
        if (g_game.levels[g_game.currentlvl][i].type == 'asteroid') {
            var asteroidDef = g_game.levels[g_game.currentlvl][i];
            var asteroid = game.add.sprite(asteroidDef.x, asteroidDef.y, asteroidDef.key);
            asteroid.anchor.setTo(0.5, 0.5);
            asteroid.scale.setTo(asteroidDef.scale);
            if (!asteroidDef.special) {
                g_game.asteroids.push(asteroid);
            } else {
                g_game.specialAsteroids.push(asteroid);
            }
        }


    }

}

function fuelManagement() {
    if (g_game.player.customProps.state == 'travelNoGrapple' && g_game.fuel > 0 || g_game.player.customProps.state == 'travelGrapple' && g_game.fuel > 0) {
        g_game.fuel -= 6;
    }

    if (g_game.player.customProps.state == 'orbitting' && g_game.fuel < g_game.maxFuel) {
        g_game.fuel += 10;

    }
    g_game.fuelBar.width = Math.floor(g_game.fuel / g_game.maxFuel * 128);
    if (g_game.fuel <= 0 && g_game.player.customProps.state == 'travelNoGrapple' || g_game.fuel <= 0 && g_game.player.customProps.state == 'travelGrapple') {
        if (g_game.player.customProps.velocityX > 0 && g_game.player.customProps.velocityY > 0) {
            g_game.player.customProps.velocityX -= 1;
            g_game.player.customProps.velocityY -= 1;
        } else {
            g_game.player.customProps.velocityX = 0;
            g_game.player.customProps.velocityY = 0;
            killPlayer();
        }

    }
}

function initAudio(sound, game, volume, loop) {
  // audio
  if (g_game.sfx[sound]) {
    g_game.sfx[sound].stop();
  }
  else {
    g_game.sfx[sound] = game.add.audio(sound);
    g_game.sfx[sound].loop = loop || false;
    g_game.sfx[sound].volume = volume || 1;
  }

}
