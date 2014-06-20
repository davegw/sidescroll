var checkPosition = function() {
  var lowerLimit = 50;
  var upperLimit = 1350;
  if (player.x < lowerLimit) {
    player.x = upperLimit;
  }
  if (player.x > upperLimit) {
    player.x = lowerLimit;
  }
}

$('html').keydown(function(e){
  if (e.which === 38) {
    //Up = Run left
    player.slide(-30);
  }
  if (e.which === 40) {
    //Down = Run right
    player.slide(30);
  }    
  if (e.which === 37) {
    //Left = Walk left
    player.slide(-10);
  }
  if (e.which === 39) {
    //Right = Walk right
    player.slide(10);
  }
  checkPosition();
});


