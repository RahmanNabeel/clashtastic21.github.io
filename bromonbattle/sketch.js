// Major Project - Bromons
// Abrar Zaher and Nabeel Ramen
// 
// Main code for the battle simulator
// 
// 12/30/1867


// states for the different options
let state = "menu"
let bromon;
let pokeName;


function setup() {

  createCanvas(3 * (windowWidth/5), (3 * (windowWidth/5))/1.6);
  background(192, 192, 192);
  
  console.log(windowHeight);
  console.log(windowWidth);

  // test sprite
  img = loadImage('assets/bulbasaur_front.png'); // bulbasaur
  img2 = loadImage('assets/zamazenta_back.png'); // zamazenta 
}

// loads sprites
// function preload() {
//   bromon = loadImage("assets/")
// }

function draw() {
  // border at the bottom
  displayBattle();
  displayBattleStats();

  // position of Bromon in battle
  rectMode(CENTER);
  // rect(1.4*(width/2), 1.07*(height/4), 250, 210); // enemy sprite
  // rect(0.45*(width/2), 1.21*(height/2), 250, 210); // your sprite

  // test sprites
  imageMode(CENTER);
  image(img, 1.4*(width/2), 1.07*(height/4), 130, 100); // bulbasaur 
  image(img2, 0.45*(width/2), 1.21*(height/2), 250, 195); // zamazenta

  if (state === "menu") {
    fightOptionBorder();
    displayWords();
  }
  if (state === "bordermove") {
    bromonOptionBorder();
    displayWords();
  }
  if (state === "bordermove2") {
    itemOptionBorder();
    displayWords();
  }
  if (state === "bordermove4") {
    runOptionBorder();
    displayWords();
  }
  if (state === "insidebattle") {
    insideBattle();
  }
  if (state === "insidebromon") {
    insideBromon();
  }
  if (state === "insideitem") {
    insideItem();
  }
}

function displayBattle() {
  // bottom display
  rectMode(CENTER);
  fill(255);
  strokeWeight(7);
  stroke("black");
  rect(width/2, 3.6*(height/4), width, height/5);
  
  if (state === "menu" || state === "bordermove" || state === "bordermove2" || 
      state === "bordermove3" || state === "bordermove4") {
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

  // bromon button
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(35);
  text("Bromon", 3.6*(width/4), 1.73*(height/2));

  // item button
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(35);
  text("Item", 2.98*(width/4), 1.9*(height/2)); 

  // run button
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(35);
  text("Run", 3.499*(width/4), 1.9*(height/2));
}

function fightOptionBorder() {
  noFill();
  stroke("red");
  strokeWeight(2);
  rect(3*(width/4), 1.73*(height/2), 100, 40, 10);
}

function bromonOptionBorder() {
  noFill();
  stroke("red");
  strokeWeight(2);
  rect(3.6*(width/4), 1.73*(height/2), 140, 40, 10);
}

function itemOptionBorder() {
  noFill();
  stroke("red");
  strokeWeight(2);
  rect(2.98*(width/4), 1.9*(height/2), 100, 40, 10);
}

function runOptionBorder() {
  noFill();
  stroke("red");
  strokeWeight(2);
  rect(3.499*(width/4), 1.9*(height/2), 100, 40, 10);
}

function keyPressed(){
  if (keyCode === RIGHT_ARROW && state === "menu") {
    state = "bordermove";
  }
  if (keyCode === LEFT_ARROW && state === "bordermove") {
    state = "menu";
  }
  if (keyCode === DOWN_ARROW && state === "menu") {
    state = "bordermove2";
  }
  if (keyCode === UP_ARROW  && state === "bordermove2") {
    state = "menu";
  }
  if (keyCode === DOWN_ARROW && state === "bordermove") {
    state = "bordermove4";
  }
  if (keyCode === UP_ARROW && state === "bordermove4") {
    state = "bordermove";
  }
  if (keyCode === LEFT_ARROW && state === "bordermove4") {
    state = "bordermove2";
  }
  if (keyCode === RIGHT_ARROW && state === "bordermove2") {
    state = "bordermove4";
  }
  if (key === " " && state === "menu") {
    state = "insidebattle";
  }
  if (key === " " && state === "bordermove") {
    state = "insidebattle";
  }
  if (key === " " && state === "bordermove2") {
    state = "insidebattle";
  }
  if (key === " " && state === "bordermove4") {
    // return to overworld/cannot run if against trainer
  }
}

function keyTyped() {
  if (key === "b" && state === "insidebattle") {
    state = "menu";
  }
}

function insideBattle() {
  rectMode(CENTER);
  fill(255);
  strokeWeight(7);
  stroke("black");
  rect(width/2, 3.6*(height/4), width, height/5);
}

function insideBromon() {
  rectMode(CENTER);
  fill(255);
  strokeWeight(7);
  stroke("black");
  rect(width/2, 3.6*(height/4), width, height/5);
}

function insideItem() {
  rectMode(CENTER);
  fill(255);
  strokeWeight(7);
  stroke("black");
  rect(width/2, 3.6*(height/4), width, height/5);
}

function displayBattleStats() {
  // HP bars
  rectMode(CENTER);
  noFill();
  strokeWeight(2.3);
  stroke("black");
  rect(1.7*(width/2), 2.5*(height/4), 150, 13);
  rect(0.3*(width/2), 0.3*(height/2), 150, 13);

  textAlign(CENTER, CENTER);
  textSize(19);
  text("H P", 1.49*(width/2), 2.5*(height/4));
  text("H P", 0.09*(width/2), 0.3*(height/2));


  // Pokemon names
  //text("bromon", 1.6*(width/2), 2*(height/4));
  //text("bromon", 0.25*(width/2), 0.07*(height/2));
}


// class for the pokemon
class Bromon {

  // stats, level, type(need to have)
  constructor(name, sprite, moves, health, size) {
    this.name = name;
    this.sprite = sprite;
    this.moves = moves;
    this.health = health;
    this.size = size;
  }


  displayEnemyFrontSprite() {
    imageMode(CENTER);
    image(bromon, 1.5*(width/2), 1.09*(height/4), 250, 210);
  }

  displayYourBackSprite() {
    imageMode(CENTER);
  }
}


// text box
function textBox(theText) {
  fill(255);
  rect(width * 0.01, 3 * (height/4) - height * 0.01, width - width * 0.02, height/4, 20);
  
  fill(0);
  textSize(20);
  text(theText, width * 0.05, 3 * (height/4) + height * 0.03, width - width * 0.05, height/4)
}

function textBox2(theText) {
  fill(255);
  rect(width * 0.03, 3 * (height/4) - height * 0.03, width - width * 0.02, height/4, 20);
  
  fill(0);
  textSize(20);
  text(theText, width * 0.05, 3 * (height/4) + height * 0.03, width - width * 0.05, height/4)
}