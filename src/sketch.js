let p = new Palette("base");

let fps = 60;

let rows = 20;
let cols = 10;
let cellSize = 30;

let tetrominos = [];
let tetrominosQueue = new Queue(3);

let bg;

function setup() {
  createCanvas(cellSize * cols, cellSize * rows);
  frameRate(fps);

  bg = new Background(p.base, p.surface, cols);

  for (let i = 0; i < 3; i++) {
    tetrominosQueue.offer(randomTetromino());
  }
}

function draw() {
  bg.draw();

  if (frameCount % fps == 0) {
    tetrominosQueue.peek().down();
  }
  tetrominosQueue.peek().draw();

  // if (keyIsPressed && frameCount % (fps / 10) == 0) {
  //   performMoveAction();
  // }
}

function keyPressed() {
  performMoveAction();
  performRotateAction();
}

function performMoveAction() {
  if (key === "h") {
    tetrominosQueue.peek().left();
  } else if (key === "j") {
    tetrominosQueue.peek().down();
  } else if (key === "l") {
    tetrominosQueue.peek().right();
  }
}

function performRotateAction() {
  if (key === "k") {
    tetrominosQueue.peek().rotate();
  }
}

function randomTetromino() {
  let type = floor(random(0, 5));
  if (type == 0) return new I();
  if (type == 1) return new O();
  if (type == 2) return new T();
  if (type == 3) return new L();
  else return new S();
}
