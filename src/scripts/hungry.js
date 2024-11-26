import hungryImgSrc from './assets/images/hungry.png';
import Monster from './monster';

export default class Hungry extends Monster{

    static HUNGRY_WIDTH = 48;

    constructor(canvas) {
        super();
        this.canvas = canvas;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.image = this.createImage(hungryImgSrc);
        this.x = this.alea(0, this.canvasWidth - this.image.width);
        this.y = this.alea(0, this.canvasHeight - this.image.height);
        this.deltaX=0;
        this.deltaY=0;
        this.target = null;
    }
    

    get width() {
        return this.image.width;
      }
    get height() {
        return this.image.height;
    }
    alea(min = 0,n){
        return Math.floor(Math.random() * (n-min +1)) + min -1;
    }

    chooseTarget(greedy,targets) {
        if (!this.target || !targets.includes(this.target)) {
            if (targets.length == 0) {
                this.target = greedy;
            } else {
                const randomIndex = Math.floor(Math.random() * targets.length);
                this.target = targets[randomIndex];
            }
        }
    }
    moveToTarget() {
        if (this.target) {
            const dx = this.target.x - this.x;
            const dy = this.target.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            this.deltaX = dx / distance;
            this.deltaY = dy / distance;
            this.x += this.deltaX;
            this.y += this.deltaY;
        }
    }
    collisionWith(greedy) {
        const a1 = { x: this.x, y: this.y };
        const a2 = { x: this.x + this.width, y: this.y + this.height };
        const a1_ = { x: greedy.x, y: greedy.y };
        const a2_ = { x: greedy.x + greedy.width, y: greedy.y + greedy.height };
        const p1 = { x: Math.max(a1.x, a1_.x), y: Math.max(a1.y, a1_.y) };
        const p2 = { x: Math.min(a2.x, a2_.x), y: Math.min(a2.y, a2_.y) };
        if(p1.x < p2.x && p1.y < p2.y){
            return true;
        }
    }
    







}