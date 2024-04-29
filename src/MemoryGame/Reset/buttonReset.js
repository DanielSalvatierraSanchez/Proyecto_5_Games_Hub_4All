import './buttonReset.css';
import { cards } from "../../../../utils/dataMemoryGame";
import { createMemory } from '../memoryGame';

export function buttonOfReset() {
  // seleccionar contenedores
  const divApp = document.querySelector("#app");
  const divContainer = document.querySelector('#divContainer');

  const buttonReset = document.createElement('button');
  
  buttonReset.classList = 'button-reset';
  buttonReset.type = 'button';
  buttonReset.textContent = 'REINICIAR JUEGO';
  
  buttonReset.addEventListener('click', () => {
    divContainer.innerHTML = `
    <h2 class="reset-memory-game" >¡¡¡ JUEGO REINICIADO !!!<br></br><br></br><br></br>CARGANDO NUEVA PARTIDA...</h2>`;
    setTimeout(() => {
      divApp.innerHTML = '';
      createMemory(cards.sort(() => Math.random() - 0.5 ));
    }, 4000);
  });

  divContainer.append(buttonReset);
};