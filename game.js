

var gameWidth = $(window).width();

var Slider = function(type, startX) {
	this.x = startX;
	this.el = $('<div class="slider ' + type + '" style="top: 500px;"></div>');
	this.render();
}

Slider.prototype.slide = function(pixels) {
	this.x += pixels;
	this.el.css('left', this.x + 'px');
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