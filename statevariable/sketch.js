// State Variables
// Nabeel Rahman
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let b = 0;
let c = 0;
let state = 'normal';

function setup() { 
  createCanvas(600, 600);
} 

function draw() { 
  background(50);
  
  if (state === 'normal') {
    normal();
  }
  if (state === 'invert') {
    invert();
  }
}

function normal() {
  fill(0, 0);
  stroke(0, 190);
  strokeWeight(2);
  let spacing = 20;
  for (let i = spacing/2; i < width; i += spacing) {
    for (let j = spacing/2; j < height; j += spacing) {
      
      let d = dist(mouseX, mouseY, i, j);
      ellipse(i, j, d * 0.2);
 
    }
  }
}

function invert() {
  fill(255, 255);
  stroke(0, 190);
  strokeWeight(2);
  let spacing = 20;
  for (let i = spacing/2; i < width; i += spacing) {
    for (let j = spacing/2; j < height; j += spacing) {
      
      let d = dist(mouseX, mouseY, i, j);
      ellipse(i, j, d * 0.2);
    }
  }
}

function mousePressed() {
  state = 'invert';
}

function keyTyped() {
if (key === 'a') {
  state = 'normal'; 
}
}