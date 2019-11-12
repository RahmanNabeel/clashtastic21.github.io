// Grid Assignment - Tic Tac Toe
// Nabeel Rahman
// Date
//
// Extra for Experts:
//  

let board =
  [
  ['','',''],
  ['','',''],
  ['','',''],
];

let players = ['X', 'O']
let available = [];
let currentPlayer;



function setup() {
  createCanvas(400, 400);
  currentPlayer = 0;
  for (let j = 0; j < 3; j++){
    for (let i = 0; i < 3; i++) {
      available.push([i,j]);
    }
  }
}






function equals3(a, b, c) {
  return (a==b && b == c && a != '');
}

function enemyTurn() {
  let index = floor(random(available.length));
  let spot = available.splice(index, 1)[0];
  let i = spot[0];
  let j = spot[1];
  board[i][j] = players[currentPlayer];
  currentPlayer = 0;
}

function nextTurn() {
  if (currentPlayer == 0){
 let my = floor(map(mouseX, 0, width, 0, 3))
 let mx = floor(map(mouseY, 0, height, 0, 3))
 let index = [mx, my]
for (let i = 0; i < available.length; i++){
  if (index[0] == available[i][0] && index[1] == available[i][1]) {
      available.splice(i, 1);
      let j = index[0];
      let k = index[1];
      board[j][k] = players[0]
      currentPlayer = 1;
  }

}
}
}

function checkWinner() {
  let winner = null
  let w = width / 3;
  let h = height / 3;

for (let i = 0; i < 3; i++) {
  if (equals3(board[i][0], board[i][1], board[i][2])) {
    let y = h * i + h / 2;
    line (0, y, width, y);
    winner = board[i][0];
    return winner;
  }
}

for (let i = 0; i < 3; i++) {
  if (equals3(board[0][i], board[1][i], board[2][i])) {
    let x = w * i + w / 2;
    line (x, 0, x, height);
    winner = board[0][i];
    return winner;
  }
}

if (equals3(board[0][0], board[1][1], board[2][2])) {
  winner = board[0][0];
  line(0,0,width,height);
  return winner;
}
if (equals3(board[2][0], board[1][1], board[0][2])) {
  winner = board[2][0];
  line(0, height, width, 0);
  return winner;
}


  if (winner == null && available.length == 0) {
    return 'tie';
  }
  else {
    return winner
  }
}

function mousePressed() {
nextTurn();
}

function draw() {
  background(51);
  let w = width / 3;
  let h = height / 3;
  strokeWeight(4);
  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);
  for (let j = 0; j < 3; j++){
    for (let i = 0; i < 3; i++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let spot = board[j][i];
      textSize(32)
      if (spot == players[1]) {
        noFill();
        ellipse(x, y, w / 2);
      }
      else if (spot == players[0]){
        let xr = w / 4;
        let yr = h / 4;
        line(x - xr, y - yr, x + xr, y + yr);
        line(x + xr, y - yr, x - xr, y + yr);
      }

    }
  }
  let result = checkWinner();
  if (result != null) {
    createP(result);
    noLoop();
  }
  else {
    if (currentPlayer == 1){
      enemyTurn();
    }
  }
}