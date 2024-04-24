export const winGame = (divCard) => {
  divCard = document.createElement('div');
  divCard.innerHTML = "";
  const divContainer = document.querySelector('#divContainer');
  divContainer.innerHTML = `
  <h2 class="win-memory-game" >¡¡¡ HAS GANADO !!! JUEGO TERMINADO</h2>
  <h2 class="win-memory-game" >CARGANDO NUEVA PARTIDA...</h2>
  `;
};