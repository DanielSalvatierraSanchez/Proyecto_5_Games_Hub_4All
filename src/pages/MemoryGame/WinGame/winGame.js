import './winGame.css';


export const winGame = (divCard) => {
  divCard = document.createElement('div');
  divCard.innerHTML = "";
  const divContainer = document.querySelector('#divContainer');
  divContainer.innerHTML = `
  <h2 class="win-memory-game" >¡¡¡ HAS GANADO !!!</h2><br></br><h2 class="win-memory-game" >CARGANDO NUEVA PARTIDA...</h2>`;
};