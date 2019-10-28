// New Interactive Scene - Art
// Nabeel Rahman
// 10/27/2019
//
// Extra for Experts:
// - Used Mouse Wheel function to change the stroke weight

let strokeW = 1;

// Set up
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

// Draw when mouse is pressed down
function draw() {
  strokeWeight(strokeW);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

// Keyboard interaction to change color and reset
function keyTyped() {
  if (key === 'r') {
    background(255);
    strokeWeight(strokeW);
  }
  if (key === 'f') {
    stroke(0);
    strokeWeight(strokeW);
  }
  if (key === 'a') {
    stroke(0, 255, 0);
    strokeWeight(strokeW);
  }
  if (key === 's') {
    stroke(255, 0, 0);
    strokeWeight(strokeW);
  }
  if (key === 'd') {
    stroke(0, 0, 255);
    strokeWeight(strokeW);
  }
}

// Mouse wheel function to change stroke weight
function mouseWheel(event) {
  if (event.delta < 0) {
    strokeW += 0.5;
  }
  else {
    strokeW -= 0.5;
  }
  return false;
}