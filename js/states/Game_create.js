var GameState = function(game) {
};


GameState.prototype.create = function() {

  this.game.add.image(0, 0, 'background');

  g_game.planet1 = this.game.add.sprite(100, 100, 'planet1');
  g_game.planet1.anchor.setTo(0.5, 0.5);
  g_game.planet1.customProps = {
    orbitDiameter : 32
  };
  drawOrbit(this.game, g_game.planet1);

  g_game.planet2 = this.game.add.sprite(200, 300, 'planet2');
  g_game.planet2.anchor.setTo(0.5, 0.5);
  g_game.planet2.customProps = {
    orbitDiameter : 64
  };
  drawOrbit(this.game, g_game.planet2);

  g_game.planet3 = this.game.add.sprite(400, 100, 'planet1');
  g_game.planet3.anchor.setTo(0.5, 0.5);
  g_game.planet3.customProps = {
    orbitDiameter : 32
  };
  drawOrbit(this.game, g_game.planet3);
  this.game.add.sprite(g_game.planet3.x - 4, g_game.planet3.y - 10, 'goal');

  g_game.asteroid = this.game.add.sprite(200, 100, 'asteroid');
  g_game.asteroid.scale.setTo(2);
  g_game.asteroid.anchor.setTo(0.5, 0.5);

  var player = this.game.add.sprite(0, 0, 'ship1');
  player.anchor.setTo(0.5, 0.5);
  player.customProps = {
    orbitAngle: 0,
    orbitPlanet: g_game.planet1
  };
  player.checkWorldBounds = true;
  player.events.onOutOfBounds.add( killPlayer, this );

  g_game.player = player;

  console.log('game started');
};
