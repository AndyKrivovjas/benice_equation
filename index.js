var root;
var path = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  root = new Orbit(windowWidth / 2, windowHeight / 2, 200);
  var next = root;
  for(let i = 0; i <= 11; i++) {
    next = next.addNestedOrbit();
  }
}

function draw() {
  background(51);
  var next = root;
  while(next) {
    next.update();
    if(next.child == null) {
      path.push(new Point(next.x, next.y));
      break;
    }
    next.show();
    next = next.child;
  }


  path.forEach(function(point) {
    point.show();
  });
}
