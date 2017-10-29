

function preload() {
  img = loadImage("assets/circle.png");
}

function setup() {
  // create a canvas the size of the display
  createCanvas(windowWidth, windowHeight);
 
  

}

function draw() {
  //nothing happens here

image(img, mouseX, mouseY,mouseX, mouseY);
fill(204,229,255);   
noStroke(0);
ellipse(windowWidth/2,windowHeight/2, 400,400);
}
function touchMoved() {
  return false;
}