


export default class Monster{

    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    createImage(imageSource) {
        const newImg = new Image();
        newImg.src = imageSource;
        return newImg;
    }

    draw(context){
        context.drawImage(this.image,this.x,this.y)
    }
}