function distanceBetween(obj1, obj2) {

  return Math.sqrt(Math.pow(obj1.x - obj2.x, 2) + Math.pow(obj1.y - obj2.y, 2));
}

function enterOrbit(obj, planet) {

  var angleToObj = Math.atan2(obj.y - planet.y, obj.x - planet.x);

  obj.customProps.orbitPlanet = planet;
  obj.customProps.orbitAngle = angleToObj;
}

function killPlayer() {
  g_game.player.kill();
}
