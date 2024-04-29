import './menuGames.css';
import { menuGames } from "../../../utils/dataMenuGames";

// crear menu de los 3 juegos
export const createMenuGames = (divApp) => {
  for (const menuGame of menuGames) {
    const imageCard = document.createElement('img');
    const linkCard = document.createElement('a');

    imageCard.classList = menuGame.classImg;
    linkCard.classList = menuGame.classMenu;

    imageCard.src = menuGame.img;
    imageCard.alt = menuGame.title;
    linkCard.url = menuGame.url;

    linkCard.append(imageCard);
    divApp.append(linkCard);
    
    linkCard.addEventListener('click', menuGame.link);
    linkCard.addEventListener('click', () => {
      footer.style.display = 'none';
      app.style.display = 'none';
    });
  };
};