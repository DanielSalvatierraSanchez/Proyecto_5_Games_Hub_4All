import { allResultsPossible } from '../AllResults/allResults'
import { finishedGame } from '../FinishedGame/finishedGame'

let TIE = 0
let WIN = 1
let LOSE = 2
let playsWin = 0
let playsLose = 0

// crear VAR para cambiar el valor del resultado y se pueda asignar una imagen de la seleccion a los IMG
const imageNames = {
  0: 'rock',
  1: 'paper',
  2: 'scissors'
}

// crear funcionalidad de los botones
export const chooseOneOption = (playerOption) => {
  // seleccionar las imagenes donde aparecerá el resultado de los jugadores
  const opponentSelectionImage = document.querySelector(
    '#image-opponent-selection'
  )
  const playerSelectionImage = document.querySelector('#image-player-selection')
  let resultText = document.querySelector('#result-text')
  let gamesWin = document.querySelector('.games-win')
  let gamesLose = document.querySelector('.games-lose')

  // crear la aleatoriedad que puede sacar el oponente con 3 diferentes resultados
  const opponentOption = Math.floor(Math.random() * 3)

  // crear VAR con todos los resultados posibles
  const result = allResultsPossible(playerOption, imageNames[opponentOption])

  // asignar una imagen a los IMG del contenedor donde se verá el resultado
  opponentSelectionImage.src = `./../../../ppt/${imageNames[opponentOption]}.webp`
  playerSelectionImage.src = `./../../../ppt/${playerOption}.webp`

  gamesWin.textContent = `JUGADAS GANADAS: ${playsWin}`
  gamesLose.textContent = `JUGADAS PERDIDAS: ${playsLose}`

  // crear todos los resultados e imprimirlos en el HTML
  switch (result) {
    case TIE:
      resultText.innerHTML = '😅 EMPATE 😅'
      break
    case WIN:
      playsWin++
      resultText.innerHTML = '🤩 HAS GANADO 👍🏽'
      break
    case LOSE:
      playsLose++
      resultText.innerHTML = '👎🏽 HAS PERDIDO 😖'
      break
  }

  finishedGame(playsWin, playsLose)
}