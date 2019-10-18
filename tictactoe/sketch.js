// Tic Tac Toe
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
let state = "menu";
let drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  x = width/2;
  y = height/2;
  dx = random(-15, 15);
  dy = random(-15, 15);
}

function draw() {
  background(255);

  if (state === "menu") {
    showMenu();
    checkIfButtonClicked();
  }
  else if (state === "game1") {
    moveShape();
    displayGame1();
  }
  else if (state === "game2") {
    moveShape();
    displayGame2();
  }
}

function showMenu() {
  rectMode(CENTER);
  fill(255, 0, 0, 125);
  rect(width/2, height/2 - 100, 400, 150);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(0);
  text("game1", width/2, height/2 - 100);

  fill(255, 0, 0, 125);
  rect(width/2, height/2 + 100, 400, 150);
  fill(0);
  text("game2", width/2, height/2 + 100);
}

function checkIfButtonClicked() {
  if (mouseIsPressed) {
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 &&
        mouseY > height/2 - 100 - 75 && mouseY < height/2 - 100 + 75) {
          state = "game1";
    }

    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 &&
      mouseY > height/2 + 100 - 75 && mouseY < height/2 + 100 + 75) {
        state = "game2";
        push();
        translate(150, 150);
        rotate(mouseX);
        rectMode(CENTER);
        rect(0, 0, 50, 50);
        pop();
    }
  }
}


function windowResized() {
  setup();
}

function moveShape() {
  x += dx;
  y += dy;
}

function displayGame2() {
  if (x > width - radius/2 || x < 0 + radius/2) {
    dx *= -1;
  }

  if (y > height - radius/2 || y < 0 + radius/2) {
    dy *= -1;
  }

  fill(0);
  circle(x, y, radius);
}

function displayGame1() {
  if (x > width - rectSize || x < 0) {
    dx *= -1;
  }

  if (y > height - rectSize || y < 0) {
    dy *= -1;
  }

  fill(0);
  rect(x, y, rectSize, rectSize);
}