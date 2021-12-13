class Tetromino {
  constructor(color, states) {
    this.x = (cols / 2 - floor(states[0].length / 2)) * cellSize;
    this.y = 0;
    this.color = color;
    this.states = states;
    this.currentState = 0;
  }

  draw() {
    push();
    fill(this.color);
    for (let i = 0; i < this.states[this.currentState].length; i++) {
      for (let j = 0; j < this.states[this.currentState][i].length; j++) {
        if (this.states[this.currentState][i][j] === 1) {
          rect(
            this.x + j * cellSize,
            this.y + i * cellSize,
            cellSize,
            cellSize
          );
        }
      }
    }
    pop();
  }

  rotate() {
    let nextState = (this.currentState + 1) % this.states.length;

    if (this._isValidState(this.states[nextState])) {
      this.currentState = nextState;
    }
  }

  _isValid(state, x, y) {
    for (let i = 0; i < state.length; i++) {
      for (let j = 0; j < state[0].length; j++) {
        if (state[i][j] === 1) {
          let x_left = x + j * cellSize;
          let x_right = x + (j + 1) * cellSize;
          let y_bottom = y + (i + 1) * cellSize;
          if (x_left < 0 || x_right > width || y_bottom > height) {
            return false;
          }
        }
      }
    }
    return true;
  }

  _isValidState(state) {
    return this._isValid(state, this.x, this.y);
  }

  _isValidXY(x, y) {
    let state = this.states[this.currentState];
    return this._isValid(state, x, y);
  }
  
  left() {
    if (this._isValidXY(this.x - cellSize, this.y)) {
      this.x -= cellSize;
    }
  }

  down() {
    if (this._isValidXY(this.x, this.y + cellSize)) {
      this.y += cellSize;
    }
  }

  right() {
    if (this._isValidXY(this.x + cellSize, this.y)) {
      this.x += cellSize;
    }
  }
}

// oooo
class I extends Tetromino {
  constructor() {
    // prettier-ignore
    super(p.foam, [
      [
        [0, 0, 0, 0],
        [1, 1, 1, 1]
      ], 
      [
        [0, 1], 
        [0, 1], 
        [0, 1], 
        [0, 1],
      ],
    ]);
  }
}

// oo
// oo
class O extends Tetromino {
  constructor() {
    super(p.gold, [
      [
        [1, 1],
        [1, 1],
      ],
    ]);
  }
}

// ooo
//  o
class T extends Tetromino {
  constructor() {
    super(p.iris, [
      [
        [0, 1, 0],
        [1, 1, 1],
      ],
      [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0],
      ],
      [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [0, 1],
      ],
    ]);
  }
}

// o
// o
// oo
class L extends Tetromino {
  constructor() {
    super(p.rose, [
      [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ],
      [
        [0, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
      ],
      [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
      ],
      [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0],
      ],
    ]);
  }
}

//  oo
// oo
class S extends Tetromino {
  constructor() {
    super(p.love, [
      [
        [0, 1, 1],
        [1, 1, 0],
      ],
      [
        [1, 0],
        [1, 1],
        [0, 1],
      ],
    ]);
  }
}
