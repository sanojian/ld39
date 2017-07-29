GameState.prototype.update = function() {


  if (!g_game.player.alive) {
    this.game.state.start('game');
  }

  if (this.game.input.activePointer.isDown) {
    // engine
    //g_game.player.frame = 1;
  }
  else {
    // no engine
    //g_game.player.frame = 0;
  }

  g_game.asteroid.rotation += 0.005;

  g_game.drawingSurface.clear();

  if (this.game.input.activePointer.isDown && g_game.player.customProps.orbitPlanet) {
    // launch off planet
    g_game.player.customProps.velocityX = 2 * Math.cos(g_game.player.rotation);
    g_game.player.customProps.velocityY = 2 * Math.sin(g_game.player.rotation);

    g_game.player.customProps.orbitPlanet = null;
  }
  else if (g_game.player.customProps.orbitPlanet) {
    // orbitting

    var da = 1 / g_game.player.customProps.grappleLength;
    g_game.player.customProps.orbitAngle += da;

    g_game.player.rotation = g_game.player.customProps.orbitAngle + Math.PI/2;

    var planet = g_game.player.customProps.orbitPlanet;
    g_game.player.x = planet.x + g_game.player.customProps.grappleLength * Math.cos(g_game.player.customProps.orbitAngle);
    g_game.player.y = planet.y + g_game.player.customProps.grappleLength * Math.sin(g_game.player.customProps.orbitAngle);

    // draw rope
    g_game.drawingSurface.lineStyle(2, 0xffffff, 1);
    g_game.drawingSurface.moveTo(g_game.player.x, g_game.player.y);
    g_game.drawingSurface.lineTo(planet.x, planet.y);

  }
  else {
    // travelling

    g_game.player.x += g_game.player.customProps.velocityX;
    g_game.player.y += g_game.player.customProps.velocityY;

    // check if player is near planet
    // TODO: use a group
    if (distanceBetween(g_game.player, g_game.asteroid) < g_game.asteroid.width/2) {
      killPlayer();
    }

    if (this.game.input.activePointer.isDown) {
      if (g_game.player.customProps.grappleLength) {
        g_game.player.customProps.grappleLength += 4;
        // draw rope
        g_game.drawingSurface.lineStyle(2, 0xffffff, 1);
        g_game.drawingSurface.moveTo(g_game.player.x, g_game.player.y);
        g_game.drawingSurface.lineTo(
          g_game.player.x + g_game.player.customProps.grappleLength * Math.cos(g_game.player.grappleAngle),
          g_game.player.y + g_game.player.customProps.grappleLength * Math.sin(g_game.player.grappleAngle)
        );
      }
      else {
        g_game.player.grappleAngle = this.game.physics.arcade.angleToPointer(g_game.player);
        g_game.player.customProps.grappleLength = 1;
      }
    }
    else {
      var grappleLoc = {};
      grappleLoc.x = g_game.player.x + g_game.player.customProps.grappleLength * Math.cos(g_game.player.grappleAngle);
      grappleLoc.y = g_game.player.y + g_game.player.customProps.grappleLength * Math.sin(g_game.player.grappleAngle);


      if (distanceBetween(grappleLoc, g_game.planet1) < g_game.planet1.width) {
        enterOrbit(g_game.player, g_game.planet1);
      }
      else if (distanceBetween(grappleLoc, g_game.planet2) < g_game.planet2.width) {
        enterOrbit(g_game.player, g_game.planet2);
      }
      else if (distanceBetween(grappleLoc, g_game.planet3) < g_game.planet3.width) {
        enterOrbit(g_game.player, g_game.planet3);
      }
      else {
        g_game.player.customProps.grappleLength = 0;
      }
    }
    /*else if (distanceBetween(g_game.player, g_game.planet1) < g_game.planet1.customProps.orbitDiameter) {
      enterOrbit(g_game.player, g_game.planet1);
    }
    else if (distanceBetween(g_game.player, g_game.planet2) < g_game.planet2.customProps.orbitDiameter) {
      enterOrbit(g_game.player, g_game.planet2);
    }
    else if (distanceBetween(g_game.player, g_game.planet3) < g_game.planet3.customProps.orbitDiameter) {
      enterOrbit(g_game.player, g_game.planet3);
    }*/
  }

};
