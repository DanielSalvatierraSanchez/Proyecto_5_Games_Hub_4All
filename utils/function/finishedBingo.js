import { createBingo } from "../../src/pages/Bingo/bingo";

// crear funcionalidad para cuando salgan los 90 numeros
export const finishedBingo = (generatedNumbers, pause, reset, nextNumber) => {
  if (generatedNumbers.size === 90) {
    pause.disabled = true;
    reset.disabled = false;

    clearInterval(nextNumber);

    const bingoContainer = document.querySelector('#bingo-container');
    bingoContainer.innerHTML = '<h1 class="the-end"><img class="image-the-end" src=./../../../../bingo/bombo4.webp> Bingo Terminado <img class="image-the-end" src=./../../../../bingo/bombo4.webp></h1>';
    
    setTimeout(() => {
      createBingo();
    }, 5000);
  };
};