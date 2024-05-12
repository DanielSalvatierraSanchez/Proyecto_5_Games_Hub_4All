import './tabletOfBalls.css';
import { ballsOfTablet } from "../../../../utils/dataBingo";

// crear mediante bucle FOR OF el tablero de 90 bolas
export const createTableOfBalls = () => {
  for (const balls of ballsOfTablet) {
    const tableOfBalls = document.querySelector("#table-balls");

    const divBalls = document.createElement('div');
    const ballNumber = document.createElement('p');

    divBalls.classList = 'div-balls';
    ballNumber.classList = 'ball-number';
    ballNumber.textContent = balls;

    tableOfBalls.append(divBalls);
    divBalls.append(ballNumber);
  }
};

// crear funcion que cambie la ClassList de las bolas, haciendo un bucle FOR OF por todas las bolas del tablero
// y con un IF comparo el contenido de la bola con el resultado randomNumber hecho STRING y asi poder cambiar la clase si es igual
export const updateBallsClass = (randomNumber) => {
  const divBalls = document.querySelectorAll('.div-balls');

  for (const divBall of divBalls) {
    if (divBall.textContent === randomNumber.toString()) {
      divBall.classList.add('selected');
    };
  };
};