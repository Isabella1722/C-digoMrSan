class Input {
    constructor(posX, posY, tipo) {
        this.posX = posX;
        this.posY = posY;
        this.focus = false;
        this.text = "";
    }

    paint() {
        if (this.focus) {
            stroke(255, 0, 0);
        } else {
            stroke(0);
        }
        fill(255);
        rect(this.posX, this.posY, 260, 20);
    }

    displayText() {
        fill(0);
        noStroke();
        textSize(13);
        text(this.text, this.posX + 7, this.posY + 15);
    }

    displayPassword() {
        fill(0);
        noStroke();
        textSize(16);
        let incrementarX = 0;
        for (let i = 0; i < this.text.length; i++) {
            text("•", this.posX + 7 + incrementarX, this.posY + 15);
            incrementarX += 10;
        }
    }

    getPosX() {
        return this.posX;
    }

    setPosX(posX) {
        this.posX = posX;
    }

    getPosY() {
        return this.posY;
    }

    setPosY(posY) {
        this.posY = posY;
    }

    isFocus() {
        return this.focus;
    }

    setFocus(focus) {
        this.focus = focus;
    }

    getText() {
        return this.text;
    }

    setText(text) {
        this.text = text;
    }
}