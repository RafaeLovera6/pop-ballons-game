/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let balloons = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "pink",
  "black",
  "white",
  "blue",
  "green",
  "blue",
  "blue",
  "yellow",
  "purple",
  "black",
  "white",
  "blue",
  "green",
  "purple",
  "red"
];
window.onload = render;

function render() {
  document.querySelector(".container").innerHTML = balloons
    .map(elm => drawGrid(elm))
    .join("");
}
function drawGrid() {
  return `<div class="balloon">
</div>`;
}
