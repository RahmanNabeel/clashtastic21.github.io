// Line Art Demo
// Nabeel Rahman
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let ultimate; 
let scalar = 1;

function preload() {
  ultimate = loadImage("assets/ultimate.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  imageMode(CENTER);
  image(ultimate, mouseX, mouseY, ultimate.width * scalar, ultimate.height * scalar);

  if (keyIsPressed) {
    if (keyCode === UP_ARROW) { //increase image size
      scalar *= 1.1;
    }
    else if (keyCode === DOWN_ARROW) { // decrease image size
      scalar /= 1.1;
  }
  
}
    
}
