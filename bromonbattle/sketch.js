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


}

// Load sprites
function preload(){
  // test sprite
  bulb_front = loadImage('assets/bulbasaur_front.png'); // bulbasaur
  zama_back = loadImage('assets/zamazenta_back.png'); // zamazenta

  bulb_back = loadImage('assets/bulbasaur_back.png');
  zama_front = loadImage('assets/zamazenta_front.png');

  pidg_back = loadImage('assets/pidgey_back.png'); // pidgey
  pidg_front = loadImage('assets/pidgey_front.png');

  rat_back = loadImage('assets/rattata_back.png'); // rattata
  rat_front = loadImage('assets/rattata_front.png'); 

  zub_back = loadImage('assets/zubat_back.png'); // zubat
  zub_front = loadImage('assets/zubat_front.png');

  fen_back = loadImage('assets/fennekin_back.png'); // fennekin
  fen_front = loadImage('assets/fennekin_front.png');

  mud_back = loadImage('assets/mudkip_back.png'); // mudkip
  mud_front = loadImage('assets/mudkip_front.png');

  munch_back = loadImage('assets/munchlax_back.png'); // munchlax
  munch_front = loadImage('assets/munchlax_front.png');

  mac_back = loadImage('assets/machop_back.png'); // machop
  mac_front = loadImage('assets/machop_front.png');

  lap_back = loadImage('assets/lapras_back.png'); // lapras
  lap_front = loadImage('assets/lapras_front.png');

  arca_back = loadImage('assets/arcanine_back.png'); // arcanine
  arca_front = loadImage('assets/arcanine_front.png');

  bee_back = loadImage('assets/beedrill_back.png'); // beedrill
  bee_front = loadImage('assets/beedrill_front.png');

  muk_back = loadImage('assets/muk_back.png'); // muk
  muk_front = loadImage('assets/muk_front.png');

  onix_back = loadImage('assets/onix_back'); // onix
  onix_front = loadImage('assets/onix_front');
}

function draw() {
  loadBackGround();

  // position of Bromon in battle
  rectMode(CENTER);
  // rect(1.4*(width/2), 1.07*(height/4), 250, 210); // enemy sprite
  // rect(0.45*(width/2), 1.21*(height/2), 250, 210); // your sprite

  // test sprites
  imageMode(CENTER);
  //image(img, 1.4*(width/2), 1.07*(height/4), 130, 100); // bulbasaur 
  //image(img2, 0.45*(width/2), 1.21*(height/2), 250, 195); // zamazenta

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

function loadBackGround() {
  // border at the bottom
  displayBattle();
  displayBattleStats();
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
    image(bromon, 0.45*(width/2), 1.21*(height/2), 250, 210); 
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