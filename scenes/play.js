Crafty.defineScene('Play', function() {

  Crafty.e('Text, DOM, 2D, Collision, title')
    .attr({w: 640, h: 24, x: 0, y: 0})
    .css({'text-align' : 'center'})
    .textFont({size: '24px', family: 'Menlo'})
    .text('Yo')
    .collision();

  var player = Crafty.e('2D, Canvas, Color, Collision, Fourway, _Player')
    .attr({h: 10, w: 10, x: 40, y: 270})
    .color('#000000')
    .collision()
    .fourway(5)
    .bind('EnterFrame', function() {
      if (this.x < 0) {
        this.x = 0;
      }
      if (this.x > 640 - this.w) {
        this.x = 640 - this.w;
      }
      if (this.y < 0) {
        this.y = 0;
      }
      if (this.y > 480 - this.h) {
        this.y = 480 - this.h;
      }
  });

});
