import './playBingo.css';
import { updateBallsClass } from "../TabletOfBalls/tabletOfBalls";
import { voiceOfContinue, voiceOfNumbers, voiceOfStart } from '../../../../utils/function/voiceOfBingo';
import { menuOfButtonsOfPlay } from '../../../../utils/function/menuButtonsOfBingo';
import { finishedBingo } from '../../../../utils/function/finishedBingo';


export let nextNumber;
let randomNumber;

// crear funcion para evento del BUTTON PLAY
export const playBingo = (play, pause, reset) => {
  // crear VAR para crear otra variable que almacene numeros no repetidos
  let generatedNumbers = new Set();

  // todo intentare a partir de aqui generar las tres ultimas bolas
  //let showLastNumbers = Array.from(generatedNumbers);
  
  play.addEventListener('click', () => {
    menuOfButtonsOfPlay(play, pause, reset);
    if (play.classList.contains('new-background')) {
      voiceOfContinue();
    } else { voiceOfStart(randomNumber);
    };
    // crear intervalo entre una bola y otra
    nextNumber = setInterval(() => {
      // crear DO WHILE ejecuta una VAR creando un numero random y se comprueba si tiene ese numero random y si no se lo añade
      do {
        randomNumber = Math.floor(Math.random() * 90) + 1;
      } while (generatedNumbers.has(randomNumber));
      generatedNumbers.add(randomNumber);

      // he realizado lo mismo pero con un condicional y es menos eficiente ya que sobre todo casi al final de la partida se comporta muy lento cuando agregas un timeout corto
      // if (!generatedNumbers.has(randomNumber)) {
      //   generatedNumbers.add(randomNumber);
      // }

        const numberOfBall = document.querySelector('#number-ball');
        numberOfBall.textContent = randomNumber;

        updateBallsClass(randomNumber);
        voiceOfNumbers(randomNumber);
        finishedBingo(generatedNumbers, pause, reset, nextNumber);

        return randomNumber;
    }, 4000);
  });
};