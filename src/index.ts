import p5 from 'p5';

let bunnyImage: p5.Image;
const tiles = 5;

const p = new p5((sketch) => {
  sketch.setup = setup;
  sketch.preload = preload;
  sketch.draw = draw;
});

function preload() {
  bunnyImage = p.loadImage('assets/bunny.png');
}

function setup() {
  p.createCanvas(500, 500);
}

function draw() {
  p.background('white');
  let tileSize = bunnyImage.width/tiles;
  
  p.stroke('white');
  p.noFill();
  p.strokeWeight(2);
  for (let zeile = 0; zeile <= tiles; zeile++) {
    for (let i = 0; i <= tiles; i++) {
      p.image(bunnyImage, tileSize * i, tileSize * zeile, tileSize, tileSize, tileSize * i, tileSize * zeile, tileSize, tileSize);
      p.rect(tileSize * i, tileSize * zeile, tileSize, tileSize);
    }
  }
}
