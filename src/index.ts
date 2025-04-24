import p5 from 'p5';

let bunnyImage: p5.Image;
const TILES = 3;

const randomTileX: number[][] = [];
const randomTileY: number[][] = [];

const p = new p5((sketch) => {
  sketch.setup = setup;
  sketch.draw = draw;
  sketch.preload = preload;
});

function preload() {
  bunnyImage = p.loadImage('assets/bunny.png');
}

function setup() {
  p.createCanvas(500, 500);
  p.background('red');
  const tileSize = 500 / TILES;
  for (let x = 0; x < TILES; x++) {
      randomTileX[x] = [];
      randomTileY[x] = [];
      for (let y = 0; y < TILES; y++) {
          randomTileX[x][y] = Math.floor(p.random(TILES)) * tileSize;
          randomTileY[x][y] = Math.floor(p.random(TILES)) * tileSize;
        }
    }
}

function draw() {
    /*p.image(bunnyImage, 
    25, 25,     // Left/upper corner
    450, 450,   // Total image width/height
    25, 25,     // Left/upper cut away
    450, 450);  // Same as total image width/height
    // (if image should not be distorted)
    p.image(bunnyImage, 0,         0, 500 / 3, 500 / 3, 0,         0, 500 / 3, 500 / 3);#
    p.image(bunnyImage, 500 / 3,   0, 500 / 3, 500 / 3, 500 / 3,   0, 500 / 3, 500 / 3);
    p.image(bunnyImage, 500 / 3*2, 0, 500 / 3, 500 / 3, 500 / 3*2, 0, 500 / 3, 500 / 3);
    
    p.image(bunnyImage, 0,         500/3, 500 / 3, 500 / 3, 0,         500/3, 500 / 3, 500 / 3);
    p.image(bunnyImage, 500 / 3,   500/3, 500 / 3, 500 / 3, 500 / 3,   500/3, 500 / 3, 500 / 3);
    p.image(bunnyImage, 500 / 3*2, 500/3, 500 / 3, 500 / 3, 500 / 3*2, 500/3, 500 / 3, 500 / 3);*/
    p.noFill();
    p.stroke('white');
    p.strokeWeight(2);
    for (let x = 0; x < TILES; x++) {
        for (let y = 0; y < TILES; y++) {
            const imageX = randomTileX[x][y];
            const imageY = randomTileY[x][y];
            const tileSize = 500 / TILES;

            if(x !=TILES-1 || y!=TILES-1){
      p.rect(imageX, imageY, tileSize, tileSize);
      p.image(bunnyImage, 
        tileSize*x, tileSize*y, 
        tileSize, tileSize, 
        imageX, imageY, 
        tileSize, tileSize);
      }
    }
  }
}
