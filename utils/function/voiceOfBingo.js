// crear funciones para crear la voz para cuando los numeros vayan saliendo, cuando se inicie, pause, continue o se reinicie el juego.

export const voiceOfNumbers = (randomNumber) => {
  const numbers = new SpeechSynthesisUtterance(randomNumber);
  numbers.pitch = 2;
  //numbers.rate = 0.5;
  speechSynthesis.speak(numbers);
};

export const voiceOfStart = () => {
  const startGame = new SpeechSynthesisUtterance("Vamos a comenzar");
  startGame.pitch = 2;
  //startGame.rate = 0.7;
  speechSynthesis.speak(startGame);
};

export const voiceOfPause = () => {
  const pauseGame = new SpeechSynthesisUtterance("Juego Pausado");
  pauseGame.pitch = 2;
  speechSynthesis.speak(pauseGame);
};

export const voiceOfContinue = () => {
  const continueGame = new SpeechSynthesisUtterance("Continuamos para Bingo");
  continueGame.pitch = 2;
  speechSynthesis.speak(continueGame);
};

export const voiceOfReset = () => {
  const resetGame = new SpeechSynthesisUtterance("Partida reiniciada");
  resetGame.pitch = 2;
  speechSynthesis.speak(resetGame);
};