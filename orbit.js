function Orbit(x, y, r) {
  this.x = x;
  this.y = y;
  this.radius = r;
  this.speed = 0.01;
  this.parent = null;
  this.child = null;
  this.angle = - PI / 2;
  this.level = 1;
}

Orbit.prototype.k = -4;
Orbit.prototype.resolution = 8000;

Orbit.prototype.setParent = function(parent) {
  this.parent = parent;
}

Orbit.prototype.setChild = function(child) {
  this.child = child;
}

Orbit.prototype.setSpeed = function(level) {
  console.log(this.resolution);
  this.speed = pow(this.k, (this.level - 1)) / this.resolution;
}

Orbit.prototype.setLevel = function(level) {
  this.level = level;
}

Orbit.prototype.addNestedOrbit = function() {
  let r = this.radius * 0.3;

  let sum = this.radius + r;
  let x = this.x + sum * cos(this.angle);
  let y = this.y + sum * sin(this.angle);
  let nested = new Orbit(x, y, r);
  nested.setLevel(this.level + 1);
  nested.setSpeed(nested.level);

  this.setChild(nested);
  nested.setParent(this);

  return nested;
}

Orbit.prototype.update = function() {
  if(this.parent != null) {
    this.angle += this.speed;

    let sum = this.parent.radius + this.radius;
    this.x = this.parent.x + sum * cos(this.angle);
    this.y = this.parent.y + sum * sin(this.angle);
  }
}

Orbit.prototype.show = function() {
  noFill();
  stroke('#bab6b6');
  strokeWeight(2);
  ellipse(this.x, this.y, 2 * this.radius);
}
