import './menuOfOptions.css'
import { buttons } from "../../../../utils/dataPPT"
import { chooseOneOption } from "../ChooseOptions/chooseOptions"

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
}