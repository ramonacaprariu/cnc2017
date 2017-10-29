var x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = 200;


function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(20.0);
  stroke(255, 100);
}

function draw() {
  background(204,229,255);

  dx = mouseX - x;
  dy = mouseY - y;
  angle1 = atan2(dy, dx);
  x = mouseX - (cos(angle1) * segLength);
  y = mouseY - (sin(angle1) * segLength);

  segment(x, y, angle1);
  ellipse(x, y, 100, 100);
    
    fill(255,204,229);
    ellipse(windowWidth/2, windowHeight/2,400,400);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

function touchMoved() {
  return false;
}