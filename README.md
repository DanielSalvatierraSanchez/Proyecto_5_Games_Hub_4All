# Proyecto_5_Games_Hub_4All
Proyecto 5 Games Hub, se realizara la creación de 3 juegos.

Requisitos | Entrega

Este será el último proyecto que realizaréis en javascript vanilla para obtener el certificado, para ello crearemos un proyecto en vite y desarrollaremos un mínimo de 3 juegos (os daremos una lista de posibles juegos y tenéis que elegir mínimo 2 para vuestro proyecto, el tercero puede ser de los sugeridos también o uno que os apetezca pero que tenga sentido y lógica).
Tened en cuenta que este proyecto es un reto, la gracia está en que sea complicado, y os costará, pero las herramientas para crear cualquiera de los juegos que os aportaremos ya las hemos aportado y con los conocimientos que tenéis se pueden completar todos los juegos que os aportaremos.


Para todos estos juegos tendréis que seguir una serie de pasos, estos pasos son:
1️⃣ Estudiar el funcionamiento lógico del juego que se quiere desarrollar
2️⃣ Pensar la mejor manera de manipular nuestros datos, tomar decisiones de que tipos de datos vamos a utilizar en nuestras variables
3️⃣ Dividir los problemas. Será muy importante ante un problema muy grande ir desgranando en problemas más pequeños, de los que primero necesitemos a los últimos
4️⃣ Plasmar nuestros datos de JS en elementos visuales de HTML que podemos maquetar con CSS

Los requisitos para aprobar el proyecto serán los siguientes:
1️⃣ Página Full responsive
2️⃣ Proyecto en Vite
3️⃣ Componentes
4️⃣ Los 3 juegos deberán estar en el mismo proyecto, así que tendremos botones que simulen una navegación en la página para mostrar los diferentes juegos
5️⃣ Ningún bug - El desarrollo de los juegos tiene que contemplar todos los casos posibles y que nosotros al evaluarlo no consigamos romperlo
6️⃣ Variables de colores y estilos reutilizables para el CSS
7️⃣ Un correcto uso de funciones en JavaScript



Posibles juegos a elegir
1️⃣ Tres en raya
2️⃣ Memory game
3️⃣ Whac a mole
4️⃣ Piedra papel o tijera
5️⃣ Trivial
6️⃣ Ahorcado
7️⃣ Bingo!


Memory Game

Para nuestro juego de memoria tendremos una serie de cartas, pueden ser imágenes o divs con colores, el apartado visual como siempre queda a vuestra elección.
Para el funcionamiento del juego tenemos que tener en cuenta que cuando hagamos click en una carta esta se dará la vuelta, controlaremos cuando el usuario hace el segundo click para levantar una segunda, se compararán y si son iguales se quedarán levantadas y ganaremos un punto, si no coinciden se volverán a dar la vuelta.


Piedra papel o tijera

Para este juego jugaremos contra la máquina, es decir, en nuestro código tendremos una aleatoriedad que será lo que saque la máquina.
El usuario podrá elegir que jugar en ese turno y tendremos dos contadores, uno de victorias y otro de derrotas.
Estas cantidades las guardaremos en el localStorage para que la siguiente vez que abramos la aplicación sigamos viendo el mismo conteo


Trivial

Para el trivial tendremos una serie de preguntas, cada pregunta tendrá "x" posibles respuestas y únicamente una de ellas será verdadera.
Además, tendremos un botón para comprobar todas las respuestas al mismo tiempo y ver la nota que hemos sacado en un alert, podéis elegir la temática y estilos que prefiráis, sin embargo aquí os mostramos un ejemplo funcional: ejemplo


Bingo!

Para el juego del Bingo tendremos un botón para iniciar el juego, una vez esté iniciado se quitará ese botón y aparecerá uno de pausar partida, si pausamos aparecerá uno de reiniciar partida y otro de reanudarla.
Además, tendremos una serie de números que irán saliendo en pantalla, los cuales NO se pueden repetir y un panel que me indique que números han ido saliendo.
Os aportamos un ejemplo: ejemplo
No hará falta que hagáis el tema de las voces, sin embargo os aportamos el nombre de la herramienta por si queréis buscar cómo poder hacer que la propia página os "hable" o "cante" los números: SpeechSynthesisUtterance
