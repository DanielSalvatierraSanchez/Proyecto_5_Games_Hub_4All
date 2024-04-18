import './style.css';
import { Header } from "./src/components/Header/header";
import { createMenuGames } from "./src/components/Menu/menuGames";
import { Footer } from "./src/components/Footer/footer";
import { createMemory } from './src/pages/MemoryGame/memoryGame';
import { buttonOfReset } from './src/pages/MemoryGame/Reset/buttonReset';
import { createPpt } from './src/pages/PPT/ppt';
import { createBingo } from './src/pages/Bingo/bingo';

const divApp = document.querySelector("#app")

const divContainer = document.createElement('div');
divContainer.id = 'divContainer';
document.body.appendChild(divContainer);

Header();
createMenuGames(divApp);
//createMemory(divApp, divContainer);
//buttonOfReset(divContainer, divApp);
//createPpt(divApp, divContainer);
//createBingo(divApp, divContainer);
Footer();