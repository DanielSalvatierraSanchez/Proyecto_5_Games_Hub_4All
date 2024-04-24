import './memoryGame.css';
import { cards } from "../../../utils/dataMemoryGame";
import { buttonOfReset } from './Reset/buttonReset';
import { winGame } from './WinGame/winGame';
import { loadGameState, saveGameState } from './LocalStorage/localStorage';

// VAR con una imagen predefinida como carta por defecto o coveredCard
const imageDefaultCard = '../../../memory/tmnt.webp';

// VAR para comprobar si hay 2 cartas que sean iguales
const compareCards = (firstCard, secondCard) => firstCard === secondCard;

// crear contenedor de cartas para usarlo en la function inicial (checkWinGame)
let divCard;

// VAR para comprobar si el juego ha terminado y si las parejas son "length de cartas / 2" se limpiaran los DIVs
const checkWinGame = (pairsCount, totalPairs) => {
  if (pairsCount === totalPairs) {
      // function para crear mensaje de victoria 
    winGame(divCard);
      // crear Timeout para que vacie todo y crear nuevo juego
    setTimeout(() => {
      const divApp = document.querySelector("#app");
      divApp.innerHTML = '';
      createMemory(cards.sort(() => Math.round(Math.random() - 1)));
    }, 4000);
  };
};

const clearCard = (card) => {
  card.classList.add("card-off");
  card.classList.remove("card-on");
  card.src = imageDefaultCard;
};

// crear memory game
export function createMemory() {
  // seleccionar contenedores
  const divApp = document.querySelector("#app");
  const divContainer = document.querySelector('#divContainer');

  // vaciar contenedores para pintar nuevo contenido
  divApp.innerHTML = "";
  divContainer.innerHTML = "";
  
  // crear DIV de las cartas
  divCard = document.createElement('div');
  divCard.classList = "div-card";
  
  // crear VAR1 y VAR2 para las cartas que puedo seleccionar a la vez y controlar las parejas
  let firstCard = null;
  let secondCard = null;
  let pairsCount = 0;
  //let pairsCount = loadGameState();

  // crear bucle para pintar las cartas en los DIV y crear event
  cards.forEach(card => {
    const cardOff = document.createElement('img');
    cardOff.id = card.id;
    cardOff.classList = "card-off";
    cardOff.src = imageDefaultCard;
    
    const cardOn = document.createElement('img');
    cardOn.classList = "card-on";
    cardOn.src = card.img;

    // crear event
    cardOff.addEventListener('click', () => {
      // comprobar 1a carta, si no hay 1a carta se almacena en la VAR1 y se cambia la class de la carta
      if (cardOff.classList.contains('card-on')) {
        return;
      };
      if (!firstCard) {
        cardOff.classList.add('card-on');
        cardOff.classList.remove('card-off');
        cardOff.src = card.img;
        firstCard = cardOff;
      } else if (!secondCard && card !== firstCard) {
        // comprobar 2a carta, si no hay 2a carta se almacena en la VAR2 y se cambia la class de la carta
        cardOff.classList.add('card-on');
        cardOff.classList.remove('card-off');
        cardOff.src = card.img;
        secondCard = cardOff;
          // comparar las 2 cartas, si las 2 cartas son iguales por ID añadir 1 pareja (pairs)
          if (compareCards(firstCard.id, secondCard.id)) {
            pairsCount++;
              // function para guardar parejas descubiertas
            saveGameState(pairsCount);
            // comprobar fin del juego, si las parejas son length de cartas / 2 - limpiar DIVs
            checkWinGame(pairsCount, cards.length / 2);
            firstCard = null;
            secondCard = null;
          } else {
            // como las cartas no son iguales, voltearlas nuevamente después de un tiempo
            setTimeout(() => {
              clearCard(firstCard);
              clearCard(secondCard);
              firstCard = null;
              secondCard = null;
            }, 2000);
          }
        }
      });
    divCard.append(cardOff);
  });
  divContainer.append(divCard);
  buttonOfReset();
};