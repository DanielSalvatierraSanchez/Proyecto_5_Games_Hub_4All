import './ppt.css'
import { createMenuOfOptions } from './CreateMenuOfOptions/menuOfOptions'


let playsWin = 0
let playsLose = 0


// crear juego PPT, crear TITLE e IMAGES para después añadir funciones
export const createPpt = () => {
  // seleccionar contenedores
  const divApp = document.querySelector('#app')
  const divContainer = document.querySelector('#divContainer')

  // vaciar contenedores para pintar nuevo contenido
  divApp.innerHTML = ''
  divContainer.innerHTML = ''

  // crear DIV para almacenar todo en él
  const divPpt = document.createElement('div')
  divPpt.id = 'div-ppt'

  // crear titulo e imagenes
  const playersSelection = document.createElement('div')
  const imageOpponentSelection = document.createElement('img')
  const nameOpponent = document.createElement('h4')
  const resultText = document.createElement('h3')
  const imagePlayerSelection = document.createElement('img')
  const namePlayer = document.createElement('h4')
  const title = document.createElement('h2')
  let gamesWin = document.createElement('h4')
  let gamesLose = document.createElement('h4')

  playersSelection.id = 'players-selection'
  imagePlayerSelection.id = 'image-player-selection'
  namePlayer.classList = 'name-player'
  resultText.id = 'result-text'
  imageOpponentSelection.id = 'image-opponent-selection'
  nameOpponent.classList = 'name-opponent'
  title.id = 'title-ppt'
  gamesWin.classList = 'games-win'
  gamesLose.classList = 'games-lose'

  imageOpponentSelection.src = './../../../ppt/pptimage.webp'
  nameOpponent.textContent = 'OPONENTE'
  resultText.textContent = ''
  imagePlayerSelection.src = './../../../ppt/pptimage.webp'
  namePlayer.textContent = 'JUGADOR'
  title.textContent = 'Elige una opción: '
  gamesWin.textContent = `JUGADAS GANADAS: ${playsWin}`
  gamesLose.textContent = `JUGADAS PERDIDAS: ${playsLose}`

  divContainer.append(divPpt)
  divPpt.append(playersSelection, title)
  playersSelection.append(
    nameOpponent,
    imageOpponentSelection,
    resultText,
    imagePlayerSelection,
    namePlayer
  )

  createMenuOfOptions()

  divPpt.append(gamesWin, gamesLose)
}
/*
// crear un menu con las opciones que seleccionaremos y crear los eventos
export const createMenuOfOptions = () => {
  // seleccionar contenedor del juego
  const divPpt = document.querySelector('#div-ppt')

  // crear un menu para poner los botones y las imagenes
  const menuBtn = document.createElement('div')
  menuBtn.id = 'menu-btn'

  for (const button of buttons) {
    const btn = document.createElement('button')
    const image = document.createElement('img')

    btn.id = button.classButton
    image.id = button.classImage
    image.src = button.image

    divPpt.append(menuBtn)
    menuBtn.append(btn)
    btn.append(image)

    // añadir 3 eventos de los 3 botones creados
    btn.addEventListener('click', () => {
      chooseOneOption(button.value)
    })
  }
}*/