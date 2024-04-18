import './ppt.css';

export function createPpt() {
  const divContainer = document.querySelector('#divContainer');

  divContainer.innerHTML = "";
  
  const p = document.createElement('p');
  
  p.textContent = 'JUEGO DE PPT O TAL VEZ DEL SNAKE...';
  
  divContainer.append(p);
};