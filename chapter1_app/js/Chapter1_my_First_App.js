
$(document).ready(function(){
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  var circle;
  var circle2;
  var circle3;

  for(var i=10; i<400; i+=20) {
    for(var j=10; j<400; j+=20) {
      circle = Shape.Circle(i, j, 5);
      circle2 = Shape.Circle(i, j, 2.5);
      circle3 = Shape.Circle(i, j, 0.75);
      circle.fillColor = 'green';
      circle2.fillColor = 'black';
      circle3.fillColor = 'white';
    }
  }

  paper.view.draw();

  console.log('Chapter1_my_First_App.js loaded');
});
