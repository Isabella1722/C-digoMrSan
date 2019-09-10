class Input{
    constructor(posX,posY,tipo){
        this.posX=posX;
        this.posY=posY;
        this.tipo=tipo;
    }

    pintar(){
        let input;
        input = createInput('',this.tipo);
        input.position(this.posX,this.posY);
    }
}