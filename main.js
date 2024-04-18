import './style.css';
import { Header } from "./src/components/Header/header";
import { createMenuGames } from "./src/components/Menu/menuGames";
import { Footer } from "./src/components/Footer/footer";

// seleccionar contenedor
const divApp = document.querySelector("#app")

// crear contenedor de los games
const divContainer = document.createElement('div');
divContainer.id = 'divContainer';
document.body.appendChild(divContainer);

Header();
createMenuGames(divApp);
Footer();