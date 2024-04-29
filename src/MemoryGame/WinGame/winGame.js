import './winGame.css';

export const winGame = (divCard) => {
  divCard = document.createElement('div');
  divCard.innerHTML = "";
  const divContainer = document.querySelector('#divContainer');
  divContainer.innerHTML = `
  <h2 class="win-memory-game" >¡¡¡ HAS GANADO !!!<br></br><br></br><br></br>CARGANDO NUEVA PARTIDA...</h2>`;
};