import './finishedGame.css'
import { createPpt } from '../ppt'


// crear funcion para que termine el juego y tenga alguna funcionalidad posterior
export const finishedGame = (playsWin, playsLose) => {
  const divPpt = document.querySelector('#div-ppt')

  if (playsWin === 10) {
    divPpt.innerHTML = "<h1 class='play-win'> YOU WIN !!! </h1>"
    
    setTimeout(() => {
      divPpt.innerHTML = ''
      window.addEventListener('beforeunload', resetCounterOfPlays())
      createPpt()
    }, 4000)
  } else if (playsLose === 10) {
    divPpt.innerHTML = "<h1 class='play-lose'> GAME OVER </h1>"

    setTimeout(() => {
      divPpt.innerHTML = ''
      window.addEventListener('beforeunload', resetCounterOfPlays())
      createPpt()
    }, 4000)
  }
}


// crear funcion para que ponga a 0 los contadores al terminar el juego
const resetCounterOfPlays = () => {
  playsWin = 0
  playsLose = 0
};