

var gameWidth = $(window).width();

var Slider = function() {
	this.x = 0.5*gameWidth;
	this.el = $('<div id="player"></div>');
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
}

Slider.prototype.render = function() {
	$('#game').append(this.el);
}

var player = new Slider();