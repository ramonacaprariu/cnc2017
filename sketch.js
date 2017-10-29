var x = 485;
var y = 660;
var radius = 200;

function setup () {
	createCanvas(windowWidth, windowHeight);
	ellipseMode(RADIUS);
}

function draw(){
	background(204, 255, 204);
	var d = dist(mouseX, mouseY, x, y);
	if (d < radius) {
		radius++;
		fill (204, 229, 255);
	} else {
		fill (255, 204, 229);
	}
	ellipse (x, y, radius, radius);
}