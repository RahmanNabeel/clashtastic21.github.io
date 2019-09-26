// Another Bouncing Demo
// Nabeel Rahman
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let dx;
let dy;
let radius = 100; 
let rectSize = 100; 
let state = 'menu';

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width/2;
  y = height/2
  dx = random(-15, 15);
  dy = random(-15, 15);
}

function draw() {
  background(255);

  if (state === 'menu') {
    showMenu();
    checkIfButtonClicked();
  }

  
  
  if (state === 'circle') {
    moveShape();
    displayCircle();
  }


  else if (state === 'rectangle') {
    moveShape();
    displayRectangle(); 
  }


function showMenu() {
//show rectangle button
rectMode(CENTER);
fill(255, 0, 0, 125);
rect(width/2, height/2 - 100, 400, 150)
textAlign(CENTER, CENTER);
textSize(50);
text("rectangle", width/2, height/2 - 100);

//show circle button
fill(255, 0, 0, 125);
rect(width/2, height/2 - 100, 400, 150)
fill(0);
text("circle", width/2, height/2 + 100);
}

function checkIfButtonClicked() {
  if (mouseIsPressed) {
    //check rectangle button
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 && mouseY > height/2 - 100 - 75 && mouseY < height/2 - 100 + 75) {
      state = 'rectangle';
    }
  if (mouseIsPressed) {
    //check circle button
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 && mouseY > height/2 + 100 - 75 && mouseY < height/2 + 100 + 75) {
      state = 'rectangle';
    }
  }
}

function moveShape() {
  //move shape
  x+= dx;
  y+= dy; 
}

function displayCircle() {
//bounce if needed
    if (x > width - radius/2 || x < 0 + radius/2) {
      dx *= -1; 
    }
    if (y > height - radius/2 || y < 0 + radius/2) {
      dy *= -1;
    }
  }
  fill(0)
  circle(x, y, radius);
}

function displayRectangle() {
//bounce if needed
  if (x > width - rectSize/2 || x < 0) {
    dx *= -1; 
  }
  if (y > height - rectSize/2 || y < 0) {
    dy *= -1;
  }
}