import './ppt.css';

let ROCK = "rock";
let PAPER = "paper";
let SCISSORS = "scissors";
let TIE = 0;
let WIN = 1;
let LOSE = 2;
let playsWin = 0;
let playsLose = 0;

// crear VAR para cambiar el valor del resultado y se pueda asignar una imagen de la seleccion a los IMG
const imageNames = {
  0: "rock",
  1: "paper",
  2: "scissors",
};


// crear juego PPT, crear TITLE e IMAGES para después añadir funciones
export function createPpt() {
  // seleccionar contenedores
  const divApp = document.querySelector("#app");
  const divContainer = document.querySelector('#divContainer');
  
  // vaciar contenedores para pintar nuevo contenido
  divApp.innerHTML = "";
  divContainer.innerHTML = "";
  
  // crear DIV para almacenar todo en él
  const divPpt = document.createElement('div');
  divPpt.id = "div-ppt";

  // crear titulo e imagenes
  const playersSelection = document.createElement('div'); 
  const imageOpponentSelection = document.createElement('img');
  const resultText = document.createElement('h3');
  const imagePlayerSelection = document.createElement('img');
  const title = document.createElement('h2');
  // let resultsOfGame = document.createElement('h4');
  let gamesWin = document.createElement('h4');
  let gamesLose = document.createElement('h4');

  playersSelection.id = "players-selection";
  imagePlayerSelection.id = "image-player-selection";
  resultText.id = 'result-text';
  imageOpponentSelection.id = "image-opponent-selection";
  title.id = "title-ppt";
  // resultsOfGame.id = "results-game";
  gamesWin.classList = "games-win";
  gamesLose.classList = "games-lose";

  imageOpponentSelection.src = './../../../ppt/pptimage.webp';
  resultText.textContent = "";
  imagePlayerSelection.src = './../../../ppt/pptimage.webp';
  title.textContent = "Elige una opción: ";
  //resultsOfGame.textContent = `JUGADAS GANADAS: ${playsWin} JUGADAS PERDIDAS: ${playsLose}`;
  gamesWin.textContent = `JUGADAS GANADAS: ${playsWin}`;
  gamesLose.textContent = `JUGADAS PERDIDAS: ${playsLose}`;

  divContainer.append(divPpt);
  divPpt.append(playersSelection, title);
  playersSelection.append(imageOpponentSelection, resultText, imagePlayerSelection);

  createMenuOfOptions();

  divPpt.append(gamesWin, gamesLose);
};


// crear un menu con las opciones que seleccionaremos y crear los eventos
function createMenuOfOptions() {
    // seleccionar contenedor del juego
  const divPpt = document.querySelector('#div-ppt');

  // crear un menu para poner los botones y las imagenes
  const menuBtn = document.createElement('div');
  const buttonRock = document.createElement('button');
  const buttonPaper = document.createElement('button');
  const buttonScissors = document.createElement('button');
  const imageRock = document.createElement('img');
  const imagePaper = document.createElement('img');
  const imageScissors = document.createElement('img');
  
  menuBtn.id = 'menu-btn';
  buttonRock.id = 'button-rock';
  buttonPaper.id = 'button-paper';
  buttonScissors.id = 'button-scissors';
  imageRock.id = 'image-rock';
  imagePaper.id = 'image-paper';
  imageScissors.id = 'image-scissors';

  imageRock.src = "./../../../ppt/rock.webp";
  imagePaper.src = "./../../../ppt/paper.webp";
  imageScissors.src = "./../../../ppt/scissors.webp";

  divPpt.append(menuBtn);
  menuBtn.append(buttonRock, buttonPaper, buttonScissors);
  buttonRock.append(imageRock);
  buttonPaper.append(imagePaper);
  buttonScissors.append(imageScissors);

  // añadir 3 eventos de los 3 botones creados
  buttonRock.addEventListener('click', () => {
    chooseOneOption(ROCK);
  })

  buttonPaper.addEventListener('click', () => {
    chooseOneOption(PAPER);
  })

  buttonScissors.addEventListener('click', () => {
    chooseOneOption(SCISSORS);
  })
};


// crear funcionalidad de los botones
function chooseOneOption(playerOption) {
  // seleccionar las imagenes donde aparecerá el resultado de los jugadores
  const opponentSelectionImage = document.querySelector('#image-opponent-selection');
  const playerSelectionImage = document.querySelector('#image-player-selection');
  let resultText = document.querySelector('#result-text');
  // let resultsOfGame = document.querySelector('#results-game');
  let gamesWin = document.querySelector('.games-win');
  let gamesLose = document.querySelector('.games-lose');

  // crear la aleatoriedad que puede sacar el oponente con 3 diferentes resultados
  const opponentOption = Math.floor(Math.random() * 3);
  console.log('OPCION aleatoria del OPPONENT: ' + opponentOption);
  console.log('OPCION escogida por el PLAYER: ' + playerOption);

  // crear VAR con todos los resultados posibles
  const result = allResultsPossible(playerOption, imageNames[opponentOption]);
  console.log("RESULTADO: " + result);

  // asignar una imagen a los IMG del contenedor donde se verá el resultado
  opponentSelectionImage.src = `./../../../ppt/${imageNames[opponentOption]}.webp`;
  console.log('SELECCION del OPPONENT: ' + opponentOption);
  playerSelectionImage.src = `./../../../ppt/${playerOption}.webp`;
  console.log('SELECCION del PLAYER: ' + playerOption);

  //resultsOfGame.textContent = `JUGADAS GANADAS: ${playsWin} VS JUGADAS PERDIDAS: ${playsLose}`;
  gamesWin.textContent = `JUGADAS GANADAS: ${playsWin}`;
  gamesLose.textContent = `JUGADAS PERDIDAS: ${playsLose}`;
  
  // crear todos los resultados e imprimirlos en el HTML
  switch(result){
      case TIE:
        resultText.innerHTML = "😅 EMPATE 😅";
        break;
      case WIN:
        playsWin++;
        console.log("partidas ganadas PLAYER: " + playsWin);
        resultText.innerHTML = "🤩 HAS GANADO 👍🏽";
        break;
      case LOSE:
        playsLose++;
        console.log("partidas ganadas OPONENTE: " + playsLose);
        resultText.innerHTML = "👎🏽 HAS PERDIDO 😖";
        break;
    };
    
    finishedGame();
};


// crear funcion donde crear un condicional con todos los resultados posibles que hay
function allResultsPossible(playerOption, opponentOption) {
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


// crear funcion para que ponga a 0 los contadores al terminar el juego
function resetCounterOfPlays() {
  playsWin = 0;
  playsLose = 0;
};

// crear funcion para que termine el juego y tenga alguna funcionalidad posterior
function finishedGame() {
  const divPpt = document.querySelector('#div-ppt');

  if (playsWin === 10) {
    divPpt.innerHTML = "<h1 class='play-win'> YOU WIN !!! </h1>";
  
    setTimeout(() => {
      divPpt.innerHTML = '';
      window.addEventListener('beforeunload', resetCounterOfPlays());
      createPpt();
    }, 4000);
  } else if (playsLose === 10) {
    divPpt.innerHTML = "<h1 class='play-lose'> GAME OVER </h1>";

    setTimeout(() => {
      divPpt.innerHTML = '';
      window.addEventListener('beforeunload', resetCounterOfPlays());
      createPpt(); 
    }, 4000);
  }
};