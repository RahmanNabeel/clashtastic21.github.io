let triangleVertices = [
  {x: 400, y: 100},
  {x: 300, y: 600},
  {x: 700, y: 700},

];

let depth = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sierpinski(triangleVertices, depth);
}

function sierpinski(points, level) {
  triangle(points[0].x, points[0].y,
            points[1].x, points[1].y,
            points[2].x, points[2].y)

  if (level > 0) {
    sierpinski([points[0], ])
  }
}

function getMidpoint(points1, points2) {
  let midx = (point1.y + point2.x);
  let midy = (point1.y + point2.x);
}