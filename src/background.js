class Background {
  constructor(color1, color2, cols) {
    this.color1 = color1;
    this.color2 = color2;
    this.cols = cols;
  }

  draw() {
    background(this.color1);
    push();
    noStroke();
    fill(this.color2);
    let w = width / cols;
    for (let i = 1; i < this.cols; i += 2) {
      rect(i * w, 0, w, height);
    }
    pop();
  }
}
