import './bingo.css';

export function createBingo() {
  const divContainer = document.querySelector('#divContainer');

  divContainer.innerHTML = "";
  
  const p = document.createElement('p');
  
  p.textContent = 'ESTE ES EL JUEGO DEL BINGO';
  
  divContainer.append(p);
};