import { draw } from "./draws.js";

export const canvas = document.getElementById("game");
export const ctx = canvas.getContext("2d");

export const division = 20
export const WidthSquare = canvas.width / division;
export const HeigthSquare = canvas.height / division;

export let snake = [{ x: WidthSquare * Math.floor(division/2), y: HeigthSquare * Math.floor(division/2) }];

export const fruit = { x: WidthSquare * Math.floor(division/2), y: HeigthSquare };

let direction = "";
let lastDirection = "";

draw();

setInterval(game, 100);

function game() {
  moveSnake();
  hit();
  eat();
}

function changeY(y) {
  const newHead = { x: snake[0].x, y: (snake[0].y += y) };
  snake.unshift(newHead);
  snake.pop();
}

function changeX(x) {
  const newHead = { x: (snake[0].x += x), y: snake[0].y };
  snake.unshift(newHead);
  snake.pop();
}

function moveSnake() {
  if (direction && direction !== lastDirection) {
    lastDirection = direction;
  }

  switch (lastDirection) {
    case "up":
      changeY(-WidthSquare);
      break;

    case "down":
      changeY(WidthSquare);
      break;

    case "left":
      changeX(-HeigthSquare);
      break;

    case "right":
      changeX(HeigthSquare);
      break;

    default:
      break;
  }
}

function eat() {
  if (snake[0].x == fruit.x && snake[0].y == fruit.y) {
    switch (direction) {
      case "up":
        snake.push({
          y: (snake[snake.length - 1].y),
          x: snake[snake.length - 1].x,
        });
        break;

      case "down":
        snake.push({
          y: (snake[snake.length - 1].y),
          x: snake[snake.length - 1].x,
        });
        break;

      case "left":
        snake.push({
          x: (snake[snake.length - 1].x),
          y: snake[snake.length - 1].y,
        });
        break;

      case "right":
        snake.push({
          x: (snake[snake.length - 1].x),
          y: snake[snake.length - 1].y,
        });
        break;

      default:
        break;
    }
    changeFruitPosition();
  }
}

function hit() {
    for (let i = 0; i < snake.length; i++) {
        if (snake[i].x > canvas.width - WidthSquare) {
            snake[i].x = 0;
        }
        if (snake[i].x < 0) {
            snake[i].x = canvas.width;
        }
        if (snake[i].y > canvas.height - HeigthSquare) {
            snake[i].y = 0;
        }
        if (snake[i].y < 0) {
            snake[i].y = canvas.height;
        }
    }
}

function changeFruitPosition() {
  const max = division - 1;
  fruit.x = Math.floor(Math.random() * max) * WidthSquare;
  fruit.y = Math.floor(Math.random() * max) * HeigthSquare;

  for (let i = 0; i < snake.length; i++) {
    if (snake[i].x == fruit.x && snake[i].y == fruit.y) {
      changeFruitPosition();
    }
  }
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastDirection !== "down") {
        direction = "up";
      }
      break;

    case "ArrowDown":
      if (lastDirection !== "up") {
        direction = "down";
      }
      break;

    case "ArrowLeft":
      if (lastDirection !== "right") {
        direction = "left";
      }
      break;

    case "ArrowRight":
      if (lastDirection !== "left") {
        direction = "right";
      }
      break;

    default:
      break;
  }
});