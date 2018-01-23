// 1st file created is for JavaScript.
//console.log('main.js loaded');

$(document).ready(function() {
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));

	var c = Shape.Circle(200, 200, 50);
	c.fillColor = 'green';

	var c;
	for (x = 25; x < 100; x += 50) {
		for(var y = 25; y < 400; y += 50) {
			c = Shape.Circle(x, y, 20);
			c.fillColor = 'green';
		}
	}

	var tool = new Tool();

	tool.onMouseDown = function(event) {
		var c = Shape.Circle(event.point.x, event.point.y, 20);
		c.fillColor = 'green';
	};
	
/* Note we could save ourselves a little typing by passing the point directly to the circle (instead of passing the x and y coordinates 
	separately): 
		var c = Shape.Circle(event.point, 20); */
	
	var c = Shape.Circle(200, 200, 80);
	c.fillColor = 'black';
	var text = new PointText(200, 200);
	text.justification = 'center';
	text.fillColor = 'white';
	text.fontSize = 20;
	text.content = 'hello world';


	paper.view.draw();
//	console.log('main.js loaded');
});





