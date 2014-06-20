

var gameWidth = $(window).width();

var Slider = function(type, startX) {
	this.x = startX;
	this.type = type;
	this.el = $('<div class="slider ' + this.type + '" style="top: 500px;"></div>');
	this.render();
}

Slider.prototype.slide = function(pixels) {
	this.x += pixels;
	if (pixels < 0){
		this.el.removeClass('right');
		this.el.addClass('left');
	}
	if (pixels > 0){
		this.el.removeClass('left');
		this.el.addClass('right');
	}
	this.el.css('left', this.x + 'px');
	if (this.type === 'taxi' && this.x >= gameWidth) {
		this.el.remove();
	}
}

Slider.prototype.render = function() {
	$('#game').append(this.el);
}
Slider.prototype.slideUntil = function(interval, pixels) {
	var context = this;
	var id = setInterval(function() {
		context.slide(pixels);
	}, interval);
	// clearInterval(id)   to stop
}

var player = new Slider('player', 0.5*gameWidth);

var taxi = new Slider('taxi', 0);

taxi.slideUntil(300, 10);

var makeThings = function(type, interval) {
	setInterval(function() {
		var taxi = new Slider(type, 0);
		taxi.slideUntil(300, 10);
	}, Math.random()*12000);
}
makeThings('taxi');

var collisionDetection = function() {
  var $player = $('#player');
  var playerLeft = $player.css('left')

  var $taxis = $('.taxi');

  $taxis.each(function(index){
    if (this.css('left') = playerLeft || this.css('left') < playerLeft + 60) {
      mergeTaxi(this);
    }
  })
}

var taxiMerge = function(){
	this.hide();
}

setInterval(collisionDetection.bind(this), 50);
