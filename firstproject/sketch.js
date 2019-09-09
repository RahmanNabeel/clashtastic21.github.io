// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let redamount = 0;
let redChangeAmount = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  fill(redamount, 0, 255);
  noStroke();
  ellipse(mouseX, mouseY, 100, 100);

  redamount += redChangeAmount;

  if (redamount >= 255) {
    redChangeAmount *= -1;
  }

  if (redamount <= 0) {
    redChangeAmount *= -1;
  }
  console.log(redamount);
  
}
