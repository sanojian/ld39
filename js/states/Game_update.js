GameState.prototype.update = function() {

    var i;

    if (!g_game.player.alive) {
        //this.game.state.start('game');
        g_game.sfx.engine.stop();
        g_game.player.customProps.state = 'dead';
    }


    g_game.bg1.tilePosition.x += 1;
    g_game.bg2.tilePosition.x += 2;
    g_game.bg2.tilePosition.y += 2;
    g_game.bg3.tilePosition.x += 3;

    // //     ghetto level editor
    //    if (this.game.input.activePointer.isDown) {
    //        console.log('planet: { x:' + this.game.input.activePointer.x + ', y:' + this.game.input.activePointer.y + ',key: \'planet2\',scale: 1, type: \'planet\'},');
    //    }


    // determine state
    if (this.game.input.activePointer.isDown && g_game.player.customProps.state == 'travelNoGrapple') {
        // deploy grapple
        g_game.player.customProps.state = 'travelGrapple';
        g_game.player.customProps.grappleLength = 1;
        g_game.player.grappleAngle = this.game.physics.arcade.angleToPointer(g_game.player);
        g_game.player.frame = 1;
        g_game.sfx.engine.play();
        g_game.sfx.grappleExtend.play();
    } else if (!this.game.input.activePointer.isDown && g_game.player.customProps.state == 'travelGrapple') {
        // cancel grapple
        g_game.player.customProps.state = 'travelNoGrapple';
        g_game.player.frame = 1;
        g_game.sfx.engine.play();
        g_game.sfx.grappleExtend.stop();
    } else if (!this.game.input.activePointer.isDown && g_game.player.customProps.state == 'enteringOrbit') {
        // no longer entering orbit
        g_game.player.customProps.state = 'orbitting';
        g_game.hook.visible = false;
        g_game.player.frame = 0;
        g_game.sfx.engine.stop();
        g_game.sfx.grappleExtend.stop();
    } else if (!this.game.input.activePointer.isDown && g_game.player.customProps.state == 'detaching') {
        // ready to deploy grapple
        g_game.player.customProps.state = 'travelNoGrapple';
        g_game.player.frame = 1;
        g_game.sfx.engine.play();
    }

    for (i = 0; i < g_game.asteroids.length; i++) {
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
        g_game.hook.visible = false;
        var da = 2 * (g_game.player.customProps.orbitDirection || 1) / g_game.player.customProps.grappleLength;
        g_game.player.customProps.orbitAngle += da;

        g_game.player.rotation = g_game.player.customProps.orbitAngle + (g_game.player.customProps.orbitDirection || 1) * Math.PI / 2;

        var planet = g_game.player.customProps.orbitPlanet;
        g_game.player.x = planet.x + g_game.player.customProps.grappleLength * Math.cos(g_game.player.customProps.orbitAngle);
        g_game.player.y = planet.y + g_game.player.customProps.grappleLength * Math.sin(g_game.player.customProps.orbitAngle);

        // draw rope
        g_game.drawingSurface.lineStyle(2, 0xffffff, 1);
        g_game.drawingSurface.moveTo(g_game.player.x, g_game.player.y);
        g_game.drawingSurface.lineTo(planet.x, planet.y);

        for (i = 0; i < g_game.asteroids.length; i++) {
            if (distanceBetween(g_game.player, g_game.asteroids[i]) < g_game.asteroids[i].width / 2) {
                killPlayer();
            }

        }

    } else if (g_game.player.customProps.state !== 'dead') {
        // travelling

        g_game.player.x += g_game.player.customProps.velocityX;
        g_game.player.y += g_game.player.customProps.velocityY;

        // check if player is near planet

        for (i = 0; i < g_game.asteroids.length; i++) {
            if (distanceBetween(g_game.player, g_game.asteroids[i]) < g_game.asteroids[i].width / 2) {
                killPlayer();
            }

        }
        if (g_game.player.customProps.state == 'travelGrapple') {
            var grappleLoc = {};
            grappleLoc.x = g_game.player.x + g_game.player.customProps.grappleLength * Math.cos(g_game.player.grappleAngle);
            grappleLoc.y = g_game.player.y + g_game.player.customProps.grappleLength * Math.sin(g_game.player.grappleAngle);
            g_game.hook.visible = true;
            g_game.hook.x = grappleLoc.x;
            g_game.hook.y = grappleLoc.y;
            g_game.hook.angle = g_game.player.grappleAngle;


            // draw rope
            g_game.drawingSurface.lineStyle(2, 0xffffff, 1);
            g_game.drawingSurface.moveTo(g_game.player.x, g_game.player.y);
            g_game.drawingSurface.lineTo(grappleLoc.x, grappleLoc.y);

            // check collision
            makeOrbitable(this.game, g_game.planets, grappleLoc);
            makeOrbitable(this.game, g_game.specialAsteroids, grappleLoc);

           if(g_game.player.customProps.grappleLength < 250){
            g_game.player.customProps.grappleLength += 4;

}
        } else {
            g_game.hook.visible = false;
        }
    }



};


function makeOrbitable(game, array, grappleLoc) {
    for (i = 0; i < array.length; i++) {
        if (distanceBetween(grappleLoc, array[i]) < array[i].width) {
            enterOrbit(game, g_game.player, array[i]);
            var angleShip = normalizeAngle(g_game.player.rotation);
            var angleToPlanet = Math.atan2(g_game.player.y - array[i].y, g_game.player.x - array[i].x);
            angleToPlanet = normalizeAngle(angleToPlanet);
            var diffAngle = angleToPlanet - angleShip;

            g_game.player.customProps.orbitDirection = -1;
            if (angleToPlanet > 3 * Math.PI / 2) {
                if (diffAngle > 1) {
                    g_game.player.customProps.orbitDirection = 1;
                }
            } else if (angleToPlanet > Math.PI) {
                if (diffAngle < 1) {
                    g_game.player.customProps.orbitDirection = 1;
                }
            } else if (angleToPlanet > Math.PI / 2) {
                if (diffAngle < 1) {
                    g_game.player.customProps.orbitDirection = 1;
                }
            } else {
                if (angleShip < Math.PI && diffAngle < 1) {
                    g_game.player.customProps.orbitDirection = 1;
                }
            }

        }
    }
}
