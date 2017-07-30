function distanceBetween(obj1, obj2) {

  return Math.sqrt(Math.pow(obj1.x - obj2.x, 2) + Math.pow(obj1.y - obj2.y, 2));
}

function enterOrbit(obj, planet) {

  var angleToObj = Math.atan2(obj.y - planet.y, obj.x - planet.x);

  obj.customProps.orbitPlanet = planet;
  obj.customProps.orbitAngle = angleToObj;
  obj.customProps.grappleLength = distanceBetween(obj, planet);
  obj.customProps.state = 'enteringOrbit';

 for(var i = 0; i < g_game.planets.length; i++){
   if(g_game.planets[i] == planet && g_game.planets[i].isGoal){
    console.log('THE PRINCESS IS ON ANOTHER PLANET');
}
}
}

function killPlayer() {
  g_game.player.kill();
}
