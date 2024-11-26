import ananasImgSrc from './assets/images/ananas.png';
import citronImgSrc from './assets/images/citron.png';
import pommeImgSrc from './assets/images/pomme.png';

export default class Fruit{


    constructor(x,y){
        this.image = this.#createImage(this.fruitSrcImage());
        this.x=x;
        this.y=y;
        this.affiche=false;
        setTimeout(() => { this.affiche = true; }, 8000);

    }
    get visible(){
        return this.affiche;
    }
    
    fruitSrcImage(){
        let listeSrc = [ananasImgSrc,citronImgSrc,pommeImgSrc];
        let indiceAleatoire = Math.floor(Math.random()*listeSrc.length);
        return listeSrc[indiceAleatoire];
    }

    draw(context) {
            context.drawImage(this.image, this.x, this.y);
    }
    
    #createImage(imageSource) {
        const newImg = new Image();
        newImg.src = imageSource;
        return newImg;
    }

    get width() {
        return this.image.width;
    }
    get height() {
        return this.image.height;
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