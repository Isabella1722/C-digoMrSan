class Input {

    Input (posX,posY){
this.posX=posX;
this.posY=posY;
this.focus = false;
		this.text = "";

    }





}

function pintar() {
    if(focus) {
        stroke(255,0,0);
        
    }else {
       stroke(0);
    }
    fill(255);
    rect(posX,posY,200,30);
    
    fill(0);
    textSize(16);
    text(text,posX+10,posY+20);
}
function  getPosX() {
    return posX;
}

function  setPosX( posX) {
    this.posX = posX;
}

function  getPosY() {
    return posY;
}

function  setPosY( posY) {
    this.posY = posY;
}

function  isFocus() {
    return focus;
}

function  setFocus(focus) {
    this.focus = focus;
}

function  getText() {
    return text;
}

function  setText(this.text) {
    this.text = text;
}