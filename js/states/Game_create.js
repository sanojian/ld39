var GameState = function(game) {};


GameState.prototype.create = function() {

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    g_game.bg1 = this.game.add.tileSprite(0, 0, 640, 480, 'bg1');
    g_game.bg2 = this.game.add.tileSprite(0, 0, 640, 480, 'bg2');
    g_game.bg3 = this.game.add.tileSprite(0, 0, 640, 480, 'bg3');

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

    enterOrbit(this.game, g_game.player, g_game.planets[0], true);

    g_game.enemy = this.game.add.sprite(g_game.planets[g_game.planets.length-1].x, g_game.planets[g_game.planets.length-1].y - 24, 'ship2');
    g_game.enemy.anchor.setTo(0.5, 0.5);
    g_game.enemy.customProps = {};

    enterOrbit(this.game, g_game.enemy, g_game.planets[g_game.planets.length-1], true);

    initAudio('engine', this.game, 0.2, true);
    initAudio('grappleExtend', this.game, 0.6, false);
    initAudio('grapple', this.game, 0.6, false);
    initAudio('explode', this.game, 1, false);

    var fuelBar = this.game.add.sprite(this.game.world.centerX - 5, this.game.world.height - 32, 'fuel');
    var fuelBarbg = this.game.add.sprite(this.game.world.centerX - 36, this.game.world.height - 32, 'fuel_bg');
    var fuel = 100;
    var maxFuel = 100;
    g_game.fuel = fuel;
    g_game.fuelBarbg = fuelBarbg;
    g_game.fuelBar = fuelBar;
    g_game.maxFuel = maxFuel;
    console.log('game started');

    var asteroidEmitter = this.game.add.emitter(0, 0, 20);
    asteroidEmitter.makeParticles(['asteroidfrag1', 'asteroidfrag2', 'asteroidfrag3']);
    asteroidEmitter.gravity = 0;
    asteroidEmitter.minParticleSpeed.setTo(1, 1);
    asteroidEmitter.maxParticleSpeed.setTo(25, 25);
    g_game.asteroidEmitter = asteroidEmitter;

    var crashEmitter = this.game.add.emitter(0, 0, 20);
    crashEmitter.makeParticles(['rocketfrag1', 'rocketfrag2', 'rocketfrag3']);
    crashEmitter.gravity = 0;
    crashEmitter.minParticleSpeed.setTo(1, 1);
    crashEmitter.maxParticleSpeed.setTo(25, 25);
    g_game.crashEmitter = crashEmitter;

    var hook = this.game.add.sprite(g_game.player.x, g_game.player.y, 'hook');
    hook.anchor.setTo(0.5, 0.5);
    hook.visible = false;
    g_game.hook = hook;

   var song = this.game.add.audio('ingame');
if(!song.isPlaying){
    song.loopFull(0.6);
}
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
            planet.isFuel = planetDef.isFuel;
            if (planet.isGoal) {
                //var flag = game.add.sprite(planetDef.x, planetDef.y - planet.height / 2, 'goal');
                //flag.anchor.setTo(0.5, 0.5);
            }
            else if (planet.isFuel) {
                // TODO: check if fueling planet
                //var pump = game.add.sprite(planetDef.x, planetDef.y - planet.height / 4, 'pump');
                //pump.anchor.setTo(0.5, 0.5);
                addAura(planet);
            }
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
                addAura(asteroid);
                g_game.specialAsteroids.push(asteroid);
            }
        }


    }

}

function fuelManagement() {
    if (g_game.player.customProps.state == 'travelNoGrapple' && g_game.fuel > 0 || g_game.player.customProps.state == 'travelGrapple' && g_game.fuel > 0) {
        g_game.fuel -= 8;
    }

    if (g_game.player.customProps.state == 'orbitting' && g_game.fuel < g_game.maxFuel) {
        g_game.fuel = Math.min(g_game.maxFuel, g_game.fuel + 10);

    }
    g_game.fuelBar.width = Math.floor(g_game.fuel / g_game.maxFuel * 94);
    if (g_game.fuel <= 0 && (g_game.player.customProps.state == 'travelNoGrapple' || g_game.player.customProps.state == 'travelGrapple')) {
        /*var vel = Math.sqrt(Math.pow(g_game.player.customProps.velocityX, 2) + Math.pow(g_game.player.customProps.velocityY, 2));
        if (vel < 0.5) {
          // drifting
          g_game.player.customProps.velocityX -= 0.1 * Math.cos(g_game.player.rotation);
          g_game.player.customProps.velocityY -= 0.1 * Math.sin(g_game.player.rotation);
          g_game.sfx.engine.stop();
          g_game.player.frame = 0;
        } else {*/
            g_game.player.customProps.velocityX = 0;
            g_game.player.customProps.velocityY = 0;
            killPlayer();
        //}

    }
}

function initAudio(sound, game, volume, loop) {
    // audio
    if (g_game.sfx[sound]) {
        g_game.sfx[sound].stop();
    } else {
        g_game.sfx[sound] = game.add.audio(sound);
        g_game.sfx[sound].loop = loop || false;
        g_game.sfx[sound].volume = volume || 1;
    }
}
