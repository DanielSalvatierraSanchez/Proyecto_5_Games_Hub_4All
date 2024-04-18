import './memoryGame.css';
import { cards } from "../../../utils/dataMemoryGame";
import { buttonOfReset } from './Reset/buttonReset';

// imagen predefinida como carta por defecto
const imageDefaultCard = '../../../memory/tmnt.webp';

// VAR para comprobar si 2 cartas si son iguales
const compareCards = (firstCard, secondCard) => firstCard === secondCard;

// crear contenedor de cartas para usarlo en las function inicial (checkWinGame)
// VAR para comprobar si el juego ha terminado y si las parejas son "length de cartas / 2" se limpiaran los DIVs
let divCard;
const checkWinGame = (pairsCount, totalPairs) => {
  if (pairsCount === totalPairs) {
    console.log('¡¡¡ HAS GANADO !!! JUEGO TERMINADO');
    divCard = document.createElement('div');
    divCard.innerHTML = "";
    const divContainer = document.querySelector('#divContainer');
    divContainer.innerHTML = `
    <h2 class="win-memory-game" >¡¡¡ HAS GANADO !!! JUEGO TERMINADO</h2>
    <h2 class="win-memory-game" >CARGANDO NUEVA PARTIDA...</h2>
    `;

    // crear Timeout para que vacie todo y crear nuevo juego
    setTimeout(() => {
      const divApp = document.querySelector("#app");
      divApp.innerHTML = '';
      createMemory(cards.sort(() => Math.random() - 0.5 ));
    }, 4000);
  };
};

const clearCard = (card) => {
  console.log(card);
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
  //let pairsCount = [];
  let pairsCount = 0;

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
        return console.log('CARTA DESCUBIERTA, ELIGE OTRA');
      };
      if (!firstCard) {
        cardOff.classList.add('card-on');
        cardOff.classList.remove('card-off');
        cardOff.src = card.img;
        firstCard = cardOff; 
        console.log(card);
        console.log(cardOff);
        console.log(firstCard);
        console.log(secondCard);
        console.log('HAS LEVANTADO UNA CARTA, LEVANTA OTRA');
      } else if (!secondCard && card !== firstCard) {
        // comprobar 2a carta, si no hay 2a carta se almacena en la VAR2 y se cambia la class de la carta
        cardOff.classList.add('card-on');
        cardOff.classList.remove('card-off');
        cardOff.src = card.img;
        secondCard = cardOff;
        console.log(card);
        console.log(cardOff);
        console.log(firstCard);
        console.log(secondCard);
          console.log('HAS LEVANTADO LA SEGUNDA CARTA, SIGUE JUGANDO');
          // comparar las 2 cartas, si las 2 cartas son iguales por ID añadir 1 pareja (pairs)
          //if (firstCard.id === secondCard.id) {
          if (compareCards(firstCard.id, secondCard.id)) {
            pairsCount++;
            console.log(pairsCount);
            console.log('NUMERO DE PAREJAS ACERTADAS: ' + pairsCount);
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