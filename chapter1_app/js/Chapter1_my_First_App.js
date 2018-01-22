
$(document).ready(function(){
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  var circle = Shape.Circle(200, 200, 50);
  circle.fillColor = 'green';

  paper.view.draw();

  console.log('Chapter1_my_First_App.js loaded');
});
