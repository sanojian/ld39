GameState.prototype.update = function() {


  if (this.game.input.activePointer.isDown &&g_game.player.customProps.orbitPlanet) {
    // launch off planet
    g_game.player.customProps.velocityX = (g_game.player.customProps.orbitPlanet.customProps.orbitDiameter/8) * Math.cos(g_game.player.rotation);
    g_game.player.customProps.velocityY = (g_game.player.customProps.orbitPlanet.customProps.orbitDiameter/8) * Math.sin(g_game.player.rotation);

    g_game.player.customProps.orbitPlanet = null;
  }
  else if (g_game.player.customProps.orbitPlanet) {
    // orbitting

    g_game.player.customProps.orbitAngle += 0.1;

    g_game.player.rotation = g_game.player.customProps.orbitAngle + Math.PI/2;

    var planet = g_game.player.customProps.orbitPlanet;
    g_game.player.x = planet.x + planet.customProps.orbitDiameter * Math.cos(g_game.player.customProps.orbitAngle);
    g_game.player.y = planet.y + planet.customProps.orbitDiameter * Math.sin(g_game.player.customProps.orbitAngle);
  }
  else {
    // travelling

    g_game.player.x += g_game.player.customProps.velocityX;
    g_game.player.y += g_game.player.customProps.velocityY;

    // check if player is near planet
    if (distanceBetween(g_game.player, g_game.planet1) < g_game.planet1.customProps.orbitDiameter) {
      enterOrbit(g_game.player, g_game.planet1);
    }
    else if (distanceBetween(g_game.player, g_game.planet2) < g_game.planet2.customProps.orbitDiameter) {
      enterOrbit(g_game.player, g_game.planet2);
    }
  }
};
