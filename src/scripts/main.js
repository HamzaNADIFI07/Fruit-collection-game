
// importation de la classe Game.js
import Game from './game.js';
import Greedy from './greedy.js';
import Fruit from './fruit.js';


// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler Greedy
const init = () => {
   const canvas = document.getElementById("playfield");
   const game = new Game(canvas);
   
   document.getElementById("stopAndStartGame").addEventListener("click", () => game.start(),game.generateRandomFruit());
   const scoreElement = document.getElementById("score");

   const updateScore = () => {
       scoreElement.textContent = `${game.point}`;
   };

   window.addEventListener('keydown', game.keyDownHandler.bind(game)); 
   window.addEventListener('keyup', game.keyUpHandler.bind(game));
   setInterval(updateScore, 100);

}

window.addEventListener("load", init);

//
console.log('le bundle a été généré');
