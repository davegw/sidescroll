

var gameWidth = $(window).width();

var Slider = function() {
	this.x = 0.5*gameWidth;
	this.el = $('<div id="player" style="top: 500px;"></div>');
	this.render();
}

Slider.prototype.slide = function(pixels) {
	this.x += pixels;
	this.el.css('left', this.x + 'px');
}

Slider.prototype.render = function() {
	$('#game').append(this.el);
}

var player = new Slider();