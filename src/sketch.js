let p = new Palette("base");

const ACTION_LEFT = 0;
const ACTION_RIGHT = 1;
const ACTION_DOWN = 3;
const ACTION_INSTANT_DOWN = 4;
const ACTION_ROTATE = 5;

let fps = 60;

let rows = 22;
let cols = 12;
let cellSize = 30;

let board = [];
let tetrominosQueue = [];

let score = 0;

let bg;

function setup() {
  cellSize = Math.floor(Math.min(windowWidth, windowHeight) / rows);
  createCanvas(cellSize * (cols + 6), cellSize * rows);
  frameRate(fps);

  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
        row[j] = new Brick(p.inactive);
      } else {
        row[j] = null;
      }
    }
    board[i] = row;
  }

  bg = new Background(p.base, p.surface, cols);

  for (let i = 0; i < 3; i++) {
    tetrominosQueue.push(randomTetromino());
  }
}

function draw() {
  bg.draw();

  let level = floor(score / 100) + 1;

  let currentTetromino = tetrominosQueue[0];
  currentTetromino.draw();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] !== null) {
        push();
        fill(board[i][j].color);
        rect(j * cellSize, i * cellSize, cellSize, cellSize);
        pop();
      }
    }
  }

  if (
    frameCount % floor((fps - level) / 2) === 0 &&
    currentTetromino.isCannotFalling(board)
  ) {
    currentTetromino.place(board);
    tetrominosQueue.shift();
    tetrominosQueue.push(randomTetromino());
    coolDown = 30;
    checkFilledRow();
  } else {
    if (frameCount % (fps - level) === 0) {
      currentTetromino.down();
      score++;
    }
  }

  coolDown--;

  // next panel
  push();
  translate(cols * cellSize, cellSize);
  textSize(cellSize);
  fill(p.text);
  text("NEXT", cellSize, cellSize);
  translate(-4 * cellSize, cellSize);
  tetrominosQueue[1].draw();
  pop();

  // score panel
  push();
  translate(cols * cellSize, 6 * cellSize);
  textSize(cellSize);
  fill(p.text);
  text("SCORE", cellSize, cellSize);
  text(score, cellSize, 3 * cellSize);
  pop();

  // level panel
  push();
  translate(cols * cellSize, 10 * cellSize);
  textSize(cellSize);
  fill(p.text);
  text("LEVEL", cellSize, cellSize);
  text(level, cellSize, 3 * cellSize);
  pop();

  // debug
  push();
  textSize(cellSize);
  fill(p.text);
  text(dx + ", " + dy, cellSize, cellSize);
  pop();
}

function checkFilledRow() {
  for (let i = rows - 2; i >= 1; i--) {
    let cnt = 0;
    for (let j = 0; j < cols; j++) {
      if (board[i][j] !== null) cnt++;
    }

    if (cnt === cols) {
      moveRowDown(i++);
      score += 20;
    }
  }
}

function moveRowDown(row) {
  for (let i = row; i > 1; i--) {
    for (let j = 0; j < cols; j++) {
      board[i][j] = board[i - 1][j];
    }
  }
}

function keyPressed() {
  let action = ACTION_DOWN;
  if (key === "h" || keyCode === LEFT_ARROW) {
    action = ACTION_LEFT;
  } else if (key === "J" || (keyIsDown(SHIFT) && keyCode === DOWN_ARROW)) {
    action = ACTION_INSTANT_DOWN;
  } else if (key === "j" || keyCode === DOWN_ARROW) {
    action = ACTION_DOWN;
  } else if (key === "l" || keyCode === RIGHT_ARROW) {
    action = ACTION_RIGHT;
  } else if (key === "k" || keyCode === UP_ARROW) {
    action = ACTION_ROTATE;
  }
  performAction(action);
}

let coolDown = 30;
let dx = 0, dy = 0;

function touchMoved(e) {
  dx = e.movementX;
  dy = e.movementY;

  if (coolDown < 0) {
    if (dx < -10) {
      performAction(ACTION_LEFT);
    } else if (dx > 10) {
      performAction(ACTION_RIGHT);
    } 

    if (dy > 20) {
      performAction(ACTION_INSTANT_DOWN);
    } else if (dy < -10) {
      performAction(ACTION_ROTATE);
    }
  }
}

function performAction(action) {
  let tetromino = tetrominosQueue[0];
  if (action === ACTION_LEFT) {
    tetromino.left();
  } else if (action === ACTION_RIGHT) {
    tetromino.right();
  } else if (action === ACTION_DOWN) {
    tetromino.down();
  } else if (action === ACTION_INSTANT_DOWN) {
    tetromino.downInstant();
  } else if (action === ACTION_ROTATE) {
    tetromino.rotate();
  }
  coolDown = 30;
}

function randomTetromino() {
  let type = floor(random(0, 7));
  if (type == 0) return new I();
  if (type == 1) return new O();
  if (type == 2) return new T();
  if (type == 3) return new L();
  if (type == 4) return new J();
  if (type == 5) return new S();
  else return new Z();
}
