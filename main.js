$(document).ready(function() {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  var c;
  for(var x=25; x<400; x+=50) {
    for(var y=25; y<400; y+=50) {
      c = Shape.Circle(x, y, 10);
      c.fillColor = 'green';
    }
  }

  console.log(c);
  paper.view.draw();

});
