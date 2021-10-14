// rose-pine colorscheme {{{
let p_base = "#232136";
let p_surface = "#2a273f";
let p_overlay = "#393552";
let p_inactive = "#59546d";
let p_subtle = "#817c9c";
let p_text = "#e0def4";
let p_love = "#eb6f92";
let p_gold = "#f6c177";
let p_rose = "#ea9a97";
let p_pine = "#3e8fb0";
let p_foam = "#9ccfd8";
let p_iris = "#c4a7e7";
let p_highlight = "#312f44";
let p_highlight_inactive = "#2a283d";
let p_highlight_overlay = "#3f3c53";

// let p_base = "#faf4ed";
// let p_surface = "#fffaf3";
// let p_overlay = "#f2e9de";
// let p_inactive = "#9893a5";
// let p_subtle = "#6e6a86";
// let p_text = "#575279";
// let p_love = "#b4637a";
// let p_gold = "#ea9d34";
// let p_rose = "#d7827e";
// let p_pine = "#286983";
// let p_foam = "#56949f";
// let p_iris = "#907aa9";
// let p_highlight = "#eee9e6";
// let p_highlight_inactive = "#f2ede9";
// let p_highlight_overlay = "#e4dfde";
// }}}

// Gui setup {{{
let gui;
let sidebarWidth;
let sidebarHeight;
let sketchWidth;
let sketchHeight;
let isStart = false;

function createGUI() {
  gui = createGui();
  gui.loadStyle("Seafoam");

  sidebarWidth = width * 0.4;
  sidebarHeight = height;
  sketchWidth = width - sidebarWidth;
  sketchHeight = height;

  // define control button
  const buttonStyle = {
    textSize: 12,
    rounding: 6,
  };
  const buttons = [
    {
      lable: "PLAY",
      onPressed: onPlayButtonPressed,
    },
    {
      lable: "STOP",
      onPressed: onStopButtonPressed,
    },
    {
      lable: "RESET",
      onPressed: onResetButtonPressed,
    },
  ];

  const buttonGap = 16;
  const buttonWidth =
    (sidebarWidth - buttonGap * (buttons.length + 1)) / buttons.length;

  buttons.forEach((item, index) => {
    let x = index * buttonWidth + buttonGap * (index + 1);
    let button = createButton(item.lable, x, 16, buttonWidth, 32);
    button.setStyle(buttonStyle);
    button.onPress = item.onPressed;
  });

  sidebarGui(0, 64);
}

function drawGUI() {
  drawGui();

  stroke(p_overlay);
  strokeWeight(2);
  line(sidebarWidth, 0, sidebarWidth, height);
  line(0, 64, sidebarWidth, 64);
}
// }}}

// Callback functions {{{
function onPlayButtonPressed() {
  isStart = true;
}

function onStopButtonPressed() {
  isStart = false;
}

function onResetButtonPressed() {
  isStart = false;
  background(p_base);
  resetSketch();
}
// }}}

// Internal {{{
function setup() {
  createCanvas(600, 400);
  createGUI();
  background(p_base);
}

function draw() {
  if (isStart) {
    background(p_base);
  }

  push();
  {
    translate(sidebarWidth, 0);
    if (isStart) {
      drawSketch();
    } else {
      drawPausedOverlay();
    }
  }
  pop();

  drawGUI();
}

function drawPausedOverlay() {
  push();
  {
    translate(sketchWidth / 2, sketchHeight / 2);
    rotate(PI / 2);
    noStroke();
    fill(p_overlay);
    ellipse(0, 0, 64, 64);
    fill(p_subtle);
    triangle(-15, 10, 0, -20, 15, 10);
  }
  pop();
}
// }}}

function resetSketch() {
}

function sidebarGui(originX, originY) {
}

function drawSketch() {
}
