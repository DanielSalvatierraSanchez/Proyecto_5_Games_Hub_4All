import { createMemory } from "../src/pages/MemoryGame/memoryGame";
import { createPpt } from "../src/pages/PPT/ppt";
import { createBingo } from "../src/pages/Bingo/bingo";

export const menuGames = [
  { title: 'Memory Game', classMenu: 'menu-game-memory', img: '../memory/gameboymemory.webp', classImg: 'image-menu-game-memory', description: 'Levanta las cartas y encuenta las parejas', link: createMemory, url: '#', },
  { title: 'Piedra Papel Tijera', classMenu: 'menu-game-ppt', img: '../ppt/gameboyppt.webp', classImg: 'image-menu-game-ppt', description: 'Un juego clásico de nuestra infancia pero... ¿ganarás a la máquina?', link: createPpt, url: '#', },
  { title: 'Bingooo!!!', classMenu: 'menu-game-bingo', img: '../bingo/gameboybingo.webp', classImg: 'image-menu-game-bingo', description: '¡Que nervios! A ver quién se lleva la linea o el bingo.', link: createBingo, url: '#', },
];