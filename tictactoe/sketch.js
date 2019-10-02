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
let state = 'menu';

function setup() {
createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220)

  if (state === 'menu') {
    showMenu();
  }
}

function showMenu() {
  rectMode(CENTER);
  fill(255, 0, 255);
  rect(width/2, height/2 - 100, 400, 150)
  textAlign(CENTER, CENTER);
  textSize(50);
  text("Player vs Player", width/2, height/2 - 100);

  fill(26, 255, 0);
  rect(width/2, height/2 - 100, 400, 150)
  fill(0);
  text("Player vs CPU", width/2, height/2 + 100);
}