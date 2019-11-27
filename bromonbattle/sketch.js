// Major Project - Bromons
// Abrar Zaher and Nabeel Ramen
//
// Main code for battle simulator
// 
// 12/30/1867

function setup() {
  createCanvas(3 * (windowWidth/5), (3 * (windowWidth/5))/1.6);
  background(192, 192, 192);

  console.log(windowHeight);
  console.log(windowWidth);
}

function draw() {
  displayBattle();
  displayButtons();
}

function displayBattle() {
  // bottom display
  rectMode(CENTER);
  fill(255);
  strokeWeight(7);
  rect(width/2, 3.6*(height/4), width, height/5);

  line(550, windowHeight, 550, 480);
}

function displayButtons() {

  rectMode(CENTER);
  fill(255);
  rect(50, 50, 50, 50);
}



// function textBox(theText) {
//   fill(255);
//   rect(width * 0.01, 3 * (height/4) - height * 0.01, width - width * 0.02, height/4, 20);
  
//   fill(0);
//   textSize(20);
//   text(theText, width * 0.05, 3 * (height/4) + height * 0.03, width - width * 0.05, height/4)
//   strokeWeight(4);
// }