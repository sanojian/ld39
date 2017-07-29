GameState.prototype.update = function() {


    if (!g_game.player.alive) {
        this.game.state.start('game');
    }

    // determine state
    if (this.game.input.activePointer.isDown && g_game.player.customProps.state == 'travelNoGrapple') {
        // deploy grapple
        g_game.player.customProps.state = 'travelGrapple';
        g_game.player.customProps.grappleLength = 1;
        g_game.player.grappleAngle = this.game.physics.arcade.angleToPointer(g_game.player);

    } else if (!this.game.input.activePointer.isDown && g_game.player.customProps.state == 'travelGrapple') {
        // cancel grapple
        g_game.player.customProps.state = 'travelNoGrapple';
    } else if (!this.game.input.activePointer.isDown && g_game.player.customProps.state == 'enteringOrbit') {
        // no longer entering orbit
        g_game.player.customProps.state = 'orbitting';
    } else if (!this.game.input.activePointer.isDown && g_game.player.customProps.state == 'detaching') {
        // ready to deploy grapple
        g_game.player.customProps.state = 'travelNoGrapple';
    }

    for (var i = 0; i < g_game.asteroids.length; i++) {
        g_game.asteroids[i].rotation += 0.005;
    }

    g_game.drawingSurface.clear();

    if (this.game.input.activePointer.isDown && g_game.player.customProps.state == 'orbitting') {
        // launch off planet
        g_game.player.customProps.velocityX = 2 * Math.cos(g_game.player.rotation);
        g_game.player.customProps.velocityY = 2 * Math.sin(g_game.player.rotation);

        g_game.player.customProps.orbitPlanet = null;
        g_game.player.customProps.state = 'detaching';
    } else if (g_game.player.customProps.state == 'orbitting' || g_game.player.customProps.state == 'enteringOrbit') {
        // orbitting

        var da = 1 / g_game.player.customProps.grappleLength;
        g_game.player.customProps.orbitAngle += da;

        g_game.player.rotation = g_game.player.customProps.orbitAngle + Math.PI / 2;

        var planet = g_game.player.customProps.orbitPlanet;
        g_game.player.x = planet.x + g_game.player.customProps.grappleLength * Math.cos(g_game.player.customProps.orbitAngle);
        g_game.player.y = planet.y + g_game.player.customProps.grappleLength * Math.sin(g_game.player.customProps.orbitAngle);

        // draw rope
        g_game.drawingSurface.lineStyle(2, 0xffffff, 1);
        g_game.drawingSurface.moveTo(g_game.player.x, g_game.player.y);
        g_game.drawingSurface.lineTo(planet.x, planet.y);

    } else {
        // travelling

        g_game.player.x += g_game.player.customProps.velocityX;
        g_game.player.y += g_game.player.customProps.velocityY;

        // check if player is near planet

        for (var i = 0; i < g_game.asteroids.length; i++) {
            if (distanceBetween(g_game.player, g_game.asteroids[i]) < g_game.asteroids[i].width / 2) {
                killPlayer();
            }

        }
        if (g_game.player.customProps.state == 'travelGrapple') {
            var grappleLoc = {};
            grappleLoc.x = g_game.player.x + g_game.player.customProps.grappleLength * Math.cos(g_game.player.grappleAngle);
            grappleLoc.y = g_game.player.y + g_game.player.customProps.grappleLength * Math.sin(g_game.player.grappleAngle);

            // draw rope
            g_game.drawingSurface.lineStyle(2, 0xffffff, 1);
            g_game.drawingSurface.moveTo(g_game.player.x, g_game.player.y);
            g_game.drawingSurface.lineTo(grappleLoc.x, grappleLoc.y);

            // check collision
            for (var i = 0; i < g_game.planets.length; i++) {
                if (distanceBetween(grappleLoc, g_game.planets[i]) < g_game.planets[i].width) {
                    enterOrbit(g_game.player, g_game.planets[i]);
                }

            }
            g_game.player.customProps.grappleLength += 4;
        }
    }

};