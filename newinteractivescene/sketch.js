// New Interactive Scene
// Nabeel Rahman
// 10/27/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let strokeW = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  strokeWeight(strokeW);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyTyped() {
  if (key === 'r') {
    background(255);
  }
  if (key === 'f') {
    stroke(0);
  }
  if (key === 'a') {
    stroke(0, 255, 0);
  }
  if (key === 's') {
    stroke(255, 0, 0);
  }
  if (key === 'd') {
    stroke(0, 0, 255);
  }
}