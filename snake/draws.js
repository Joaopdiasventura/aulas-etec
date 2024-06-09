import {
  canvas,
  ctx,
  division,
  WidthSquare,
  HeigthSquare,
  snake,
  fruit,
} from "./script.js";

// funções para o desenho do jogo
export function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrades();
  drawSnake();
  ctx.fillStyle = "#f00";
  drawSquare(fruit.x, fruit.y);
  requestAnimationFrame(draw);
}

function drawGrades() {
  ctx.fillStyle = "#aaa";
  for (let i = 1; i < division; i++) {
    ctx.fillRect(0, i * WidthSquare, canvas.width, 0.8);
    ctx.fillRect(i * HeigthSquare, 0, 0.8, canvas.height);
  }
}

function drawSquare(x, y) {
  ctx.fillRect(x, y, WidthSquare, HeigthSquare);
}

function drawSnake() {
  ctx.fillStyle = "#0f0";
  for (let i = 0; i < snake.length; i++) {
    const { x, y } = snake[i];
    drawSquare(x, y);
  }
}
