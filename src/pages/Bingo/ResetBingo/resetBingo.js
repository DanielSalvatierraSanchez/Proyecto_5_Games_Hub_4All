import { menuOfButtonsOfReset } from "../../../../utils/function/menuButtonsOfBingo";
import { voiceOfReset } from "../../../../utils/function/voiceOfBingo";
import { createBingo } from "../bingo";
import { nextNumber } from "../PlayBingo/playBingo";

// crear funcion para evento del BUTTON RESET
export const resetBingo = (play, pause, reset) => {
  reset.addEventListener('click', () => {
    menuOfButtonsOfReset(play, pause, reset);
    voiceOfReset();
    
    clearInterval(nextNumber);
    
    const divContainer = document.querySelector('#divContainer');
    const bingoContainer = document.querySelector('#bingo-container');

    divContainer.innerHTML = '';
    bingoContainer.innerHTML = '';
    
    createBingo();
  });
};