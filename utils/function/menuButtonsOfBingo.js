// crear funciones del menu de botones de la parte inferior del Bingo

export const menuOfButtonsOfPlay = (play, pause, reset) => {
  play.style.display = 'none';
  play.disabled = true;

  pause.style.display = "initial";
  pause.disabled = false;

  reset.style.display = 'none';
  reset.disabled = true;
};

export const menuOfButtonsOfPause = (play, pause, reset) => {
  play.style.display = 'initial';
  play.textContent = 'Continuar';
  play.disabled = false;
  play.classList.add('new-background');

  pause.style.display = 'none';
  pause.disabled = true;

  reset.style.display = 'initial';
  reset.disabled = false;
};

export const menuOfButtonsOfReset = (play, pause, reset) => {
  play.disabled = false;
  pause.disabled = true;
  reset.disabled = true;
};