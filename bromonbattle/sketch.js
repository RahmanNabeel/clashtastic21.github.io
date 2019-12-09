// Major Project - Bromons
// Abrar Zaher and Nabeel Ramen
//
// Main code for the battle simulator
// 
// 12/30/1867

// states for the different options

let state = "menu"

function setup() {

  createCanvas(3 * (windowWidth/5), (3 * (windowWidth/5))/1.6);
  background(192, 192, 192);
  
  console.log(windowHeight);
  console.log(windowWidth);
}

function draw() {

  // border at the bottom
  displayBattle();
  pickOption();
  
  if (state === "menu") {
    displayWords();
  }
}

function displayBattle() {

  // bottom display
  rectMode(CENTER);
  fill(255);
  strokeWeight(7);
  stroke("black");
  rect(width/2, 3.6*(height/4), width, height/5);
  
  if (state === "menu") {
    line(2*(width/3.1), 2*(height/2), 2*(width/3.1), 2*(height/2.5));
  }
}

function displayWords() {
  
  // fight button
  fill(0);
  stroke("black");
  textAlign(CENTER, CENTER);
  textSize(35);
  text("Fight", 3*(width/4), 1.73*(height/2));

  // item button
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(35);
  text("Item", 2.98*(width/4), 1.9*(height/2)); 

  // bromon button
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(35);
  text("Bromon", 3.6*(width/4), 1.73*(height/2));

  // run button
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(35);
  text("Run", 3.499*(width/4), 1.9*(height/2));
}

function pickOption() {
  noFill();
  stroke("red");
  strokeWeight(2);
  rect(3*(width/4), 1.73*(height/2), 100, 40);
}

// function textBox(theText) {
//   fill(255);
//   rect(width * 0.01, 3 * (height/4) - height * 0.01, width - width * 0.02, height/4, 20);
  
//   fill(0);
//   textSize(20);
//   text(theText, width * 0.05, 3 * (height/4) + height * 0.03, width - width * 0.05, height/4)
//   strokeWeight(4);
// }