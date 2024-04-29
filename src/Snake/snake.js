import './snake.css';

export function createSnake() {
  // seleccionar contenedores
  const divApp = document.querySelector("#app");
  const divContainer = document.querySelector('#divContainer');

  // vaciar contenedores para pintar nuevo contenido
  divApp.innerHTML = "";
  divContainer.innerHTML = "";
  
createTableOfSnake(divContainer);
};

const createTableOfSnake = (divContainer) => {
  // const divContainer = document.querySelector('#divContainer');
  
  const gameSnake = document.createElement("section");
  const table = document.createElement("div");
  const ground = document.createElement("div");

  gameSnake.id = "game-snake";
  table.classList = "table";
  ground.classList = "ground";

  divContainer.append(gameSnake);
  gameSnake.append(table);
  table.append(ground);

  positionOfFood();
  positionOfSnake();
  initGame();
}; 

let foodX, foodY;
let snakeX = 5, snakeY = 5;
let snakeBody = [];
let directionX = 0, directionY = 0;

const positionOfSnake = () => {
  snakeX = Math.floor(Math.random() * 20) +1;
  snakeY = Math.floor(Math.random() * 20) +1;
  //console.log("coordenadas iniciales de SNAKE " + snakeX, snakeY);
};

const positionOfFood = () => {
  foodX = Math.floor(Math.random() * 20) + 1;
  foodY = Math.floor(Math.random() * 20) + 1;
  //console.log("coordenada de la RATA (ancho X) ", foodX);
  //console.log("coordenada de la RATA (alto Y) ", foodY);
};

const directionOfSnake = (e) => {
  //console.log(e);
  if (e.key === "ArrowUp") {
    directionX = 0;
    directionY = -1;
  } else if (e.key === "ArrowDown") {
    directionX = 0;
    directionY = 1;
  } else if (e.key === "ArrowRight") {
    directionX = 1;
    directionY = 0;
  } else if (e.key === "ArrowLeft") {
    directionX = -1;
    directionY = 0;
  }
  //initGame();
};

const snakeEatRats = () => {
  if (snakeX === foodX && snakeY === foodY) {
    snakeBody.push([foodX, foodY]);
    console.log(snakeBody.length); 
    positionOfFood();
  }
};

const snakeTail = () => {
  for (let i = 0; i < snakeBody.lenght; i++) {
    objectsHTML += `<div class="snakeHead" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}">🐍</div>`;
  }
};

const initGame = () => {
  const ground = document.querySelector(".ground");

  let objectsHTML = `<div class="food" style="grid-area: ${foodY} / ${foodX}">🐀</div>`;

  snakeEatRats();

  snakeBody[0] = [snakeX, snakeY];

  snakeX += directionX;
  snakeY += directionY;

  snakeTail();

  //objectsHTML += `<div class="snakeHead" style="grid-area: ${snakeY} / ${snakeX}">🐍</div>`;

  ground.innerHTML = objectsHTML;
  //console.log(objectsHTML);
};
setInterval(initGame, 500);
document.addEventListener("keydown", directionOfSnake);