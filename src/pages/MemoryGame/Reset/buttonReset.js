import './buttonReset.css';
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
    console.log('¡¡¡ JUEGO REINICIADO !!!');
    divContainer.innerHTML = `
    <h2 class="reset-memory-game" >¡¡¡ JUEGO REINICIADO !!!</h2>
    <h2 class="reset-memory-game" >CARGANDO NUEVA PARTIDA...</h2>`;
    setTimeout(() => {
      divApp.innerHTML = '';
      createMemory();
    }, 4000);
  });

  divContainer.append(buttonReset);
};