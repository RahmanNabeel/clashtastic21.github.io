// Grid Assignment
// Nabeel Rahman
// 11/21/2019

// global variables
let grid;
let rows = 40;
let cols = 40;
let someTime;
let lastTimeSwitched = 0;

// setup code
function setup() {
  someTime = 5;
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createRandom2dArray(cols, rows);
}

function draw() {
  background(220);
  displayGrid(grid, rows, cols);
}

function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}

// keys do different things
function keyTyped() {
  if (key === "r") {
    grid = createRandom2dArray(cols, rows);
  }
  if (key === "c") {
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        grid[y][x] = 1;
      }
    }
  }
  if (key === "x") {
    if (millis() >= lastTimeSwitched + someTime) {
      grid = createRandom2dArray(cols, rows);
      lastTimeSwitched = millis();
    }
  }
}

// clicking with the mouse 
function mousePressed() {
  let cellSize = width/cols;

  let xCoord = floor(mouseX / cellSize);
  let yCoord = floor(mouseY / cellSize);
  
  if (grid[yCoord][xCoord] === 1) {
    grid[yCoord][xCoord] = 0;
  }
  else {
    grid[yCoord][xCoord] = 1;
  }
}

// grid setup
function displayGrid(grid, rows, cols) {
  let cellSize = width / cols;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

// 2d array
function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      if (random(100) < 50) {
        randomGrid[x].push(1);
      }
      else {
        randomGrid[x].push(0);
      }
    }
  }
  return randomGrid;
}