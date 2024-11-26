
export default class KeyManager {
    #left;
    #right;
    #up; 
    #down;
 
    constructor() {
       this.#left = false;
       this.#right = false;
       this.#up = false;
       this.#down = false;
    }
    get left() {
       return this.#left;
    }
    /* setter for left key */
    set left(value) {
       this.#left = value;
    }
    leftPressed() {
       this.#left = true;
    }
    leftReleased() {
       this.#left = false;
    }
 
    get right() {
       return this.#right;
    }
    set right(value) {
       this.#right = value;
    }
    rightPressed() {
       this.#right = true;
    }
    rightReleased() {
       this.#right = false;
    }
    
    get up() {
       return this.#up;
    }
    set up(value) {
       this.#up = value;
    }
    upPressed() {
       this.#up = true;
    }
    upReleased() {
       this.#up = false;
    }
 
    get down() {
       return this.#down;
    }
    set down(value) {
       this.#down = value;
    }
    downPressed() {
       this.#down = true;
    }
    downReleased() {
       this.#down = false;
    }
 
    oneKeyPressed() {
       return this.#left || this.#right || this.#up || this.#down;
    }
    noKeyPressed() {
       return ! this.oneKeyPressed();
    }
 }