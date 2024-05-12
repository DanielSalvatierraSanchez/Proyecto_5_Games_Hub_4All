import './bingo.css';
import { createTableOfBalls } from './TabletOfBalls/tabletOfBalls';
import { playBingo } from './PlayBingo/playBingo';
import { pauseBingo } from './PauseBingo/pauseBingo';
import { resetBingo } from './ResetBingo/resetBingo';


// crear juego del Bingo y agregarle funciones componentizadas
export const createBingo = () => {
  const divApp = document.querySelector('#app');
  const divContainer = document.querySelector('#divContainer');

  divApp.innerHTML = "";
  divContainer.innerHTML = "";
  
  const bingoContainer = document.createElement('section');
  const tableOfBalls = document.createElement('div');
  const actualBall = document.createElement('div');
  let numberOfBall = document.createElement('h2');
  //let lastBalls = document.createElement('div');
  const menuOptions = document.createElement('section');
  const playButton = document.createElement('button');
  const pauseButton = document.createElement('button');
  const resetButton = document.createElement('button');

  bingoContainer.id = 'bingo-container';
  tableOfBalls.id = 'table-balls';
  actualBall.id = 'actual-ball';
  numberOfBall.id = 'number-ball';
  //lastBalls.classList = 'last-balls';
  menuOptions.id = 'menu-options';
  playButton.classList = 'play-button';
  pauseButton.classList = 'pause-button';
  resetButton.classList = 'reset-button';
  
  playButton.textContent = 'Iniciar';
  pauseButton.style.display = 'none';
  pauseButton.textContent = 'Pausar';
  pauseButton.disabled = true;
  resetButton.style.display = 'none';
  resetButton.textContent = 'Reiniciar';
  resetButton.disabled = true;

  divContainer.append(bingoContainer, menuOptions);
  bingoContainer.append(actualBall, tableOfBalls);
  //bingoContainer.append(lastBalls);
  actualBall.append(numberOfBall);
  menuOptions.append(playButton, pauseButton, resetButton);
  
  createTableOfBalls();

  const play = document.querySelector('.play-button');
  const pause = document.querySelector('.pause-button');
  const reset = document.querySelector('.reset-button');
  
  playBingo(play, pause, reset);
  pauseBingo(play, pause, reset);
  resetBingo(play, pause, reset);
};