import greedyImgSrc from './assets/images/greedy.png';
import Monster from './monster';

export default class Greedy extends Monster{

    constructor(x,y,canvas){
        super();
        this.image = this.createImage(greedyImgSrc);
        this.x = x;
        this.y = y;
        this.canvas = canvas;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
    }
    get width() {
        return this.image.width;
      }
    get height() {
        return this.image.height;
    }
    moveLeft() {
        if (this.x > 0){
            this.x -= 5; 
        }
    }

    moveRight() {
        if (this.x + this.width < this.canvasWidth) { 
            this.x += 5;
        }
    }

    moveUp() {
        if (this.y > 0){
            this.y -= 5;
        }
    }

    moveDown() {
        if (this.y + this.height < this.canvasHeight) { 
            this.y += 5;
        }
    }

    collisionWith(actor) {
        const a1 = { x: this.x, y: this.y };
        const a2 = { x: this.x + this.width, y: this.y + this.height };
        const a1_ = { x: actor.x, y: actor.y };
        const a2_ = { x: actor.x + actor.width, y: actor.y + actor.height };
        const p1 = { x: Math.max(a1.x, a1_.x), y: Math.max(a1.y, a1_.y) };
        const p2 = { x: Math.min(a2.x, a2_.x), y: Math.min(a2.y, a2_.y) };
        return p1.x < p2.x && p1.y < p2.y;
    }
}