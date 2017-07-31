function distanceBetween(obj1, obj2) {

    return Math.sqrt(Math.pow(obj1.x - obj2.x, 2) + Math.pow(obj1.y - obj2.y, 2));
}

function enterOrbit(game, obj, planet, skipSound) {

    var angleToObj = Math.atan2(obj.y - planet.y, obj.x - planet.x);

    obj.customProps.orbitPlanet = planet;
    obj.customProps.orbitAngle = angleToObj;
    obj.customProps.grappleLength = distanceBetween(obj, planet);
    obj.customProps.state = 'enteringOrbit';

    if (!skipSound) {
      g_game.sfx.grapple.play();
    }

    if (obj == g_game.player) {
      for (var i = 0; i < g_game.planets.length; i++) {
          if (g_game.planets[i] == planet && g_game.planets[i].isGoal) {
              switchLevel(game);
          }
      }
    }
    for (var j = 0; j < g_game.specialAsteroids.length; j++) {
        if (g_game.specialAsteroids[j] == planet) {
            game.time.events.add(Phaser.Timer.SECOND * 2, outOfOrbit, this);
            g_game.specialAsteroid = g_game.specialAsteroids[j];
        }

    }
}

function normalizeAngle(angle) {
    while (angle < 0) {
        angle += Math.PI * 2;
    }

    return angle % (Math.PI * 2);
}

function killPlayer() {
    g_game.crashEmitter.x = g_game.player.x;
    g_game.crashEmitter.y = g_game.player.y;

    g_game.crashEmitter.start(true, 12000, null, 25);

    g_game.sfx.explode.play();
    switchLevel(g_game.player.game, 'game');
    g_game.player.kill();
}

function outOfOrbit() {
    g_game.player.customProps.velocityX = 2 * Math.cos(g_game.player.rotation);
    g_game.player.customProps.velocityY = 2 * Math.sin(g_game.player.rotation);
    g_game.player.customProps.orbitPlanet = null;
    g_game.player.customProps.state = 'detaching';
    g_game.specialAsteroid.myAura.kill();
    g_game.specialAsteroid.kill();
    g_game.asteroidEmitter.x = g_game.specialAsteroid.x;
    g_game.asteroidEmitter.y = g_game.specialAsteroid.y;

    g_game.asteroidEmitter.start(true, 12000, null, 25);

}

function switchLevel(game, stage) {
    game.time.events.add(Phaser.Timer.SECOND, function(){
      game.state.start(stage || 'Transition');
    }, this);
    g_game.planets = [];
    g_game.asteroids = [];
    g_game.specialAsteroids = [];
   // game.state.start(game.state.current);

}
