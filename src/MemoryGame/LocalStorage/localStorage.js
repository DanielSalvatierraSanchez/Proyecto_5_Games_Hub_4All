export const saveGameState = (pairsCount) => {
  localStorage.setItem('savePairsCount', pairsCount);
};

export const loadGameState = () => {
  const savedPairsCount = localStorage.getItem('savePairsCount');
  return savedPairsCount ? parseInt(savedPairsCount) : 0;
};