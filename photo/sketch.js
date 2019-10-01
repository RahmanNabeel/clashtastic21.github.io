// Photo Maniputation
// Nabeel Rahman
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let pokeball;
let fillteredImage;

function preload() {
  pokeball = loadImage("assets/pokeball.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fillteredImage = makeGrayScale(pokeball);
}

function draw() {
  background(220)

  imageMode(CENTER);
  image(fillteredImage, mouseX, mouseY, 200, 200)
}

function makeGrayScale(sourceImage) {
  let img = createImage(200, 200);

  //Load pixels so can adjust them in array
  img.loadPixels();
  sourceImage.loadPixels();

  for (let x = 0; x < 200; x++) {
    for (let y = 0; y < 200; y++) {
      let p = sourceImage.get(x, y);

      //apply filter
      let r = red(p);
      let g = green(p);
      let b = blue(p);

      let average = (r + g + b) / 3;

      img.set(x, y, color(average, average, average));
    }
  }
  img.updatePixels();
  return img;
}