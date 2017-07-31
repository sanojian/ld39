function drawOrbit(game,planet) {
    //var graphics = game.add.graphics(planet.x,planet.y);
  //graphics.lineStyle(2, 0x0000FF, 1);
    //graphics.drawCircle(0,0, planet.customProps.orbitDiameter * 2);

}

function addAura(obj) {
  var graphics = obj.game.add.graphics(obj.x, obj.y);

  graphics.beginFill(0x9999FF, 0.1);
  graphics.drawCircle(0, 0, obj.width + 4);
  graphics.beginFill(0x9999FF, 0.1);
  graphics.drawCircle(0, 0, obj.width + 8);
  graphics.beginFill(0x9999FF, 0.1);
  graphics.drawCircle(0, 0, obj.width + 12);

  obj.myAura = graphics;

  obj.bringToTop();
}
