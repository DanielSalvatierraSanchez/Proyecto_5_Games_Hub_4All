import { cards } from "../../../../utils/dataMemoryGame";
import { compareCards, checkWinGame, clearCard } from "../memoryGame";

// crear event
export const eventOfCards = (cardOff, card, firstCard, secondCard) => {
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
      if (compareCards(firstCard.src, secondCard.src)) {
        pairsCount++;
        console.log(pairsCount);
        console.log('NUMERO DE PAREJAS ACERTADAS: ' + pairsCount);
        // comprobar fin del juego, si las parejas son length de cartas / 2 - limpiar DIVs
        checkWinGame(pairsCount, cards.length / 2);
        firstCard = null;
        secondCard = null;
        /*
        //if (pairs === cards.length / 2) {
          //console.log('¡¡¡ HAS GANADO !!! JUEGO TERMINADO');
          //divCard.innerHTML = "";
          //divContainer.innerHTML = `<h2 class="win-memory-game" >¡¡¡ HAS GANADO !!! JUEGO TERMINADO</h2>`;
        //}
        */
      } else {
        // como las cartas no son iguales, voltearlas nuevamente después de un tiempo
        setTimeout(() => {
          clearCard(firstCard);
          clearCard(secondCard);
          /*cardOff.classList.add('card-off');
          cardOff.classList.remove('card-on');
          cardOff.src = imageDefaultCard;
          cardOff.previousElementSibling.classList.add('card-off');
          cardOff.previousElementSibling.classList.remove('card-on');
          cardOff.previousElementSibling.src = imageDefaultCard;*/
          firstCard = null;
          secondCard = null;
        }, 1000);
      }
    }
  };