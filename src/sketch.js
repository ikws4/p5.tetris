/// <reference path="../node_modules/@types/p5/global.d.ts" />

// rose-pine colorscheme {{{
let p_base = "#191724";
let p_surface = "#1f1d2e";
let p_overlay = "#26233a";
let p_inactive = "#555169";
let p_subtle = "#6e6a86";
let p_text = "#e0def4";
let p_love = "#eb6f92";
let p_gold = "#f6c177";
let p_rose = "#ebbcba";
let p_pine = "#31748f";
let p_foam = "#9ccfd8";
let p_iris = "#c4a7e7";
let p_highlight = "#2a2837";
let p_highlight_inactive = "#211f2d";
let p_highlight_overlay = "#3a384a";

// let p_base = "#232136";
// let p_surface = "#2a273f";
// let p_overlay = "#393552";
// let p_inactive = "#59546d";
// let p_subtle = "#817c9c";
// let p_text = "#e0def4";
// let p_love = "#eb6f92";
// let p_gold = "#f6c177";
// let p_rose = "#ea9a97";
// let p_pine = "#3e8fb0";
// let p_foam = "#9ccfd8";
// let p_iris = "#c4a7e7";
// let p_highlight = "#312f44";
// let p_highlight_inactive = "#2a283d";
// let p_highlight_overlay = "#3f3c53";

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

function setup() {
  createCanvas(400, 400);
}

function draw() {
  stroke(p_text);
  ellipse(10, 10, 20, 20);
}
