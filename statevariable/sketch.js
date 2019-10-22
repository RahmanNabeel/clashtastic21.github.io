// State Variables
// Nabeel Rahman
// 10/21/2019
//
// Extra for Experts:
// - Added some html to the website

// Global Variables 
let b = 0;
let c = 0;
let state = 'normal';
let color = [];

//Setup 
function setup() { 
  createCanvas(700, 600);

} 

//Draw code with state variable
function draw() { 
  background(50);
  
  if (state === 'normal') {
    normal();
  }
  if (state === 'invert') {
    invert();
  }
}

//If state is normal
function normal() {
  fill(b, c);
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

//If state is invert
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

//Changes color 
function mousePressed() {
  state = 'invert';
}

//Changes color back to original
function keyTyped() {
if (key === 'a') {
  state = 'normal'; 
}
}