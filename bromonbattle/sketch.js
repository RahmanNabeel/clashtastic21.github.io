// Major Project - Bromons
// Abrar Zaher and Nabeel Ramen
//
// Main code for the battle simulator
// 
// 12/30/1867

let state = "menu"

function setup() {
  createCanvas(3 * (windowWidth/5), (3 * (windowWidth/5))/1.6);
  background(192, 192, 192);

  console.log(windowHeight);
  console.log(windowWidth);
}

function draw() {
  displayBattle();
  displayWords();
}

function displayBattle() {
  // bottom display
  rectMode(CENTER);
  fill(255);
  strokeWeight(7);
  rect(width/2, 3.6*(height/4), width, height/5);

  line(550, windowHeight, 550, 410);
}

function displayWords() {
  // fight button
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Fight", 3*(width/4), 1.73*(height/2));

  // item button
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Item", 2.98*(width/4), 1.9*(height/2)); 

  // bromon button
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Bromon", 3.6*(width/4), 1.73*(height/2));

  // run button
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Run", 3.48*(width/4), 1.9*(height/2));
}

function selectButton() {

}



// function textBox(theText) {
//   fill(255);
//   rect(width * 0.01, 3 * (height/4) - height * 0.01, width - width * 0.02, height/4, 20);
  
//   fill(0);
//   textSize(20);
//   text(theText, width * 0.05, 3 * (height/4) + height * 0.03, width - width * 0.05, height/4)
//   strokeWeight(4);
// }