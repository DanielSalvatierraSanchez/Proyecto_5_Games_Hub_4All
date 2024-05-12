import { menuOfButtonsOfPause } from "../../../../utils/menuButtonsOfBingo";
import { voiceOfPause } from "../../../../utils/voiceOfBingo";
import { nextNumber } from "../PlayBingo/playBingo";

// crear funcion para evento del BUTTON PAUSE
export const pauseBingo = (play, pause, reset) => {
  pause.addEventListener('click', () => {
    menuOfButtonsOfPause(play, pause, reset);
    voiceOfPause();

    clearInterval(nextNumber);
  });
};