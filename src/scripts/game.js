import Greedy from "./greedy";
import Fruit from "./fruit";
import KeyManager from './keyManager';
import Hungry from "./hungry";


export default class Game {

    static FRUIT_WIDTH = 60;
   
   // à compléter

   constructor(canvas) {
      this._canvas = canvas;
      this._greedy = null;
      this._fruit = new Array();
      this._hungry = [];
      const newHungry= new Hungry(canvas);
      this._hungry.push(newHungry);
      this.context = this._canvas.getContext("2d");
      this.keyManager = new KeyManager();
      this.requete = null;
      this.point=0;
      this.fruitsInterval=null;
      this.lifePoints_greedy=3;
      this.fruitsEaten=0;
      // à compléter
   }
    get vies(){
        return this.lifePoints_greedy;
    }
    decreaseLifePoints() {
        this.lifePoints_greedy--;
    }
    increasePointNbFruitEaten(){
        this.fruitsEaten++;
    }
   /** donne accès au canvas correspondant à la zone de jeu */
   get canvas() {
      return this._canvas;
   }
   set canvas(canvas){
    this._canvas=canvas;
   }
   get greedy(){
      return this._greedy;
   }
   set greedy(greedy){
    this._greedy = greedy;
    }
    increasePoint(){
        this.point+=100;
    }
    get Point(){
        return this.point;
    }
    set Point(x){
        this.point+=x;
    }
    start() {
        if(this.requete == null){
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this._greedy = new Greedy(this.canvas.width / 2, this.canvas.height / 2,this.canvas);
            this._greedy.draw(this.context);
            this._hungry.forEach(hungry => hungry.draw(this.context));
            this.fruitsInterval=setInterval(() => {this.generateRandomFruit();}, 1000);
            this.requete = window.requestAnimationFrame(this.animate.bind(this));
            const button = document.getElementById("stopAndStartGame");
            button.textContent = "Stop";
        }else{
            window.cancelAnimationFrame(this.requete);
            this.requete = null;
            clearInterval(this.fruitsInterval);
            const button = document.getElementById("stopAndStartGame");
            button.textContent = "Start";
        }
    }


    animate() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.processInput();
        // Dessine l'élément _greedy sur le canvas
        this._greedy.draw(this.context);
        // Dessine les fruits et gère les collisions avec _greedy
        if (this._fruit) {
            this._fruit.forEach(fruit => {
                fruit.draw(this.context);
                if (fruit.collisionWith(this._greedy)) {
                    this.increasePoint();
                }
            });
        }
        // Dessine et gère les mouvements des hungrys, supprime les fruits mangé et cree un hungry à chaque 7 fruits mangé
        this._hungry.forEach(hngry => {
            hngry.draw(this.context);
            hngry.chooseTarget(this._greedy,this._fruit);
            hngry.moveToTarget();
       
            this._fruit.forEach(fruit => {
                if (fruit.collisionWith(hngry)) {
                    this.fruitsEaten++;
                    if (this.fruitsEaten % 7 == 0) {
                        this.createNewHungrie();
                        // console.log(this.fruitsEaten); affiche 7,14,21 à chaque 7 fruits mangés (console.log utilisé pour déboguer suite au problèmes rencontrer)
                    }
                }
                this._fruit = this._fruit.filter(elt => !elt.collisionWith(hngry));
            });
        });
        // Gère les collisions entre _hungry et _greedy
        this._hungry.forEach(hungry => {
            if (hungry.collisionWith(this.greedy) ) {
                this.decreaseLifePoints();
                this.updateLife();
                this._hungry.pop(hungry);
                const newHungry= new Hungry(this.canvas);
                this._hungry.push(newHungry);
            }
        });
        this._fruit = this._fruit.filter(fruit => !fruit.collisionWith(this._greedy));
        this.requete = window.requestAnimationFrame(this.animate.bind(this));
    }





    createNewHungrie(){
        const newHungry = new Hungry(this.canvas);
        this._hungry.push(newHungry);
    }   
  processInput() {
    if (this.keyManager.left ) {
        this.greedy.moveLeft();
    }
    if (this.keyManager.right) {
        this.greedy.moveRight();
    }
    if (this.keyManager.up) {
        this.greedy.moveUp();
    }
    if (this.keyManager.down) {
        this.greedy.moveDown();
    }
    }
    keyDownHandler(event) {
        switch (event.key) {
            case "ArrowLeft":
                this.keyManager.leftPressed();
                break;
            case "ArrowRight":
                this.keyManager.rightPressed();
                break;
            case "ArrowUp":
                this.keyManager.upPressed();
                break;
            case "ArrowDown":
                this.keyManager.downPressed();
                break;
            default:
                break;
        }
    }

    keyUpHandler(event) {
        switch (event.key) {
            case "ArrowLeft":
                this.keyManager.leftReleased();
                break;
            case "ArrowRight":
                this.keyManager.rightReleased();
                break;
            case "ArrowUp":
                this.keyManager.upReleased();
                break;
            case "ArrowDown":
                this.keyManager.downReleased();
                break;
            default:
                break;
        }
    }
    alea(min = 0,n){
        return Math.floor(Math.random() * (n-min +1)) + min -1;
    }

    generateRandomFruit() {
        const x = this.alea(0,this.canvas.width-Game.FRUIT_WIDTH);
        const y = this.alea(0,this.canvas.height-Game.FRUIT_WIDTH);
    
        let newFruit = new Fruit(x, y);
    
        this._fruit.push(newFruit);
    
        newFruit.draw(this.context);

        this.deleteFruit();
    }

    deleteFruit(){
        this._fruit.forEach(fruit => {
            if (fruit.affiche) {
                let i = this._fruit.indexOf(fruit);
                this._fruit.splice(i, 1);
            }
        });
    }
    endOfGame(){
        if (this.lifePoints_greedy<=0) {
            alert("Partie terminé.");
            window.cancelAnimationFrame(this.requete);
        }
    }
    updateLife() {
        const lifeImages = ["life-1", "life-2", "life-3"];
    
        for (let i = 0; i < lifeImages.length; i++) {
            const image = document.getElementById(lifeImages[i]);
            if (i < this.lifePoints_greedy) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        }
        if (this.lifePoints_greedy <= 0) {
            this.endOfGame();
        }
    }
}



