let p = new Palette("base");

let fps = 60;

let rows = 22;
let cols = 12;
let cellSize = 30;

let board = [];
let tetrominosQueue = [];

let score = 0;

let bg;

function setup() {
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

  if (frameCount % (floor((fps - level) / 2)) === 0 && currentTetromino.isCannotFalling(board)) {
    currentTetromino.place(board);
    tetrominosQueue.shift();
    tetrominosQueue.push(randomTetromino());
    checkFilledRow();
  } else {
    if (frameCount % (fps - level) === 0) {
      currentTetromino.down();
      score++;
    }
  }

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
  performMoveAction();
  performRotateAction();
}

function performMoveAction() {
  if (key === "h" || keyCode === LEFT_ARROW) {
    tetrominosQueue[0].left();
  } else if (key === "J" || keyIsDown(SHIFT) && keyCode === DOWN_ARROW) {
    tetrominosQueue[0].downInstant();
  } else if (key === "j" || keyCode === DOWN_ARROW) {
    tetrominosQueue[0].down();
  } else if (key === "l" || keyCode === RIGHT_ARROW) {
    tetrominosQueue[0].right();
  }
}

function performRotateAction() {
  if (key === "k" || keyCode === UP_ARROW) {
    tetrominosQueue[0].rotate();
  }
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
