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
let shape = [];

function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220)

  if (state === 'menu') {
    showMenu();
  }
  if (state === 'gamemode1') {
    displayGameMode1();
  }
  if (state === 'gamemode2') {
    displayGameMode2();
  }
  if (state === 'gamemode3') {
    displayGameMode3();
  }
  if (state === 'gamemode4') {
    displayGameMode4();
  }
}

function showMenu() {
  rectMode(CENTER);
  fill(255, 0, 255);
  rect(width/2, height/2 - 100, 400, 150)
  textAlign(CENTER, CENTER);
  textSize(50);
  text("Player vs Player", width/2, height/2 - 100);

  fill(255, 0, 255);
  rect(width/2, height/2 - 100, 400, 150)
  fill(0);
  text("Player vs CPU", width/2, height/2 + 100);
}

function displayGameMode1() {

}

function displayGameMode2() {
  if (x > width - radius/2 || x < 0 + radius/2) {
    dx*= -1;
  }
}