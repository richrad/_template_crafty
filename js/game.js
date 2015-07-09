window.onload = function() {
  Crafty.init(640, 480, document.getElementById('game'));
  Crafty.canvas.init();
  Crafty.background('#ffffff');

  Crafty.enterScene('Play');
}
