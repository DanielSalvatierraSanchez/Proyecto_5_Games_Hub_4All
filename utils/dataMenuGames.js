import { createBingo } from "../src/pages/Bingo/bingo";
import { createMemory } from "../src/pages/MemoryGame/memoryGame";
import { createPpt } from "../src/pages/PPT/ppt";
//import { createSnake } from "../src/pages/Snake/snake";

export const menuGames = [
  { title: 'Memory Game', classMenu: 'menu-game-memory', img: '../memory/gameboymemory.webp', classImg: 'image-menu-game-memory', description: 'Levanta las cartas y encuenta las parejas.', link: createMemory, url: '#', },
  { title: 'Piedra Papel Tijera', classMenu: 'menu-game-ppt', img: '../ppt/gameboyppt.webp', classImg: 'image-menu-game-ppt', description: 'Un juego clásico de nuestra infancia pero... ¿ganarás a la máquina?', link: createPpt, url: '#', },
  { title: 'Bingooo!!!', classMenu: 'menu-game-bingo', img: '../bingo/gameboybingo.webp', classImg: 'image-menu-game-bingo', description: '¡Qué nervios! A ver quién se lleva la línea o el bingo.', link: createBingo, url: '#', },
  //{ title: 'Snake', classMenu: 'menu-game-snake', img: '../snake/gameboysnake.webp', classImg: 'image-menu-game-snake', description: 'Un juego clasico de los antiguos moviles NOKIA ¿Cuánto serás capaz de hacer crecer la serpiente?', link: createSnake, url: '#', },
];