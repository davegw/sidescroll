
$('html').keydown(function(e){
  if (e.which === 38) {
    //Up
  }
  if (e.which === 40) {
    //Down
  }    
  if (e.which === 37) {
    //Left
    player.slide(-10);
  }
  if (e.which === 39) {
    //Right
    player.slide(10);
  }
});
