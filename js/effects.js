function drawOrbit(game,planet) {
    var graphics = game.add.graphics(planet.x,planet.y);
  graphics.lineStyle(2, 0x0000FF, 1);
    graphics.drawCircle(0,0, planet.customProps.orbitDiameter * 2);

}
