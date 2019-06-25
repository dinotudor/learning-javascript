$(document).ready(function() {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  var c = Shape.Circle(200, 200, 50);
  c.fillColor = 'green';

  console.log(c);
  paper.view.draw();

});
