function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.show = function() {
  stroke('#ea1c1c');
  point(this.x, this. y);
}
