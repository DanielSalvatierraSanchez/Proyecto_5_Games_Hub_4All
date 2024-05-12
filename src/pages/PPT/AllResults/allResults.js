let ROCK = "rock";
let PAPER = "paper";
let SCISSORS = "scissors";
let TIE = 0;
let WIN = 1;
let LOSE = 2;


// crear funcion donde crear un condicional con todos los resultados posibles que hay
export const allResultsPossible = (playerOption, opponentOption) => {
  if (playerOption === opponentOption) {
  return TIE;
  } else if (playerOption === ROCK) {
    if (opponentOption === PAPER) return LOSE;
    if (opponentOption === SCISSORS) return WIN;
  } else if (playerOption === PAPER) {
    if (opponentOption === ROCK) return WIN;
    if (opponentOption === SCISSORS) return LOSE;
  } else if (playerOption === SCISSORS) {
    if (opponentOption === ROCK) return LOSE;
    if (opponentOption === PAPER) return WIN;
  };
};