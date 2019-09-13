class Direccion {
    constructor() {
        this.incrementPosY = 0;
        this.arrayInputs = [];
        this.arrayLong = [];
        for (let i = 0; i < 2; i++) {
            this.arrayInputs[i] = new Input(140, 284 + this.incrementPosY, 185);
            this.incrementPosY += 91
        }
        for (let i = 0; i < 1; i++) {
            this.arrayLong[i] = new Input(58, 472, 268);
        }
    }

    paint() {
        for (let i = 0; i < this.arrayInputs.length; i++) {
            this.arrayInputs[i].paint();
            this.arrayInputs[i].displayText();
        }
        for (let i = 0; i < this.arrayLong.length; i++) {
            this.arrayLong[i].paint();
            this.arrayLong[i].displayText();
        }
    }

    focusInputs(mX, mY) {
        for (let i = 0; i < this.arrayInputs.length; i++) {
            if (mX >= this.arrayInputs[i].getPosX() && mX <= this.arrayInputs[i].getPosX() + 185
                && mY >= this.arrayInputs[i].getPosY() && mY <= this.arrayInputs[i].getPosY() + 20) {
                this.arrayInputs[i].setFocus(true);
            } else {
                this.arrayInputs[i].setFocus(false);
            }
        }

        for (let i = 0; i < this.arrayLong.length; i++) {
            if (mX >= this.arrayLong[i].getPosX() && mX <= this.arrayLong[i].getPosX() + 268
                && mY >= this.arrayLong[i].getPosY() && mY <= this.arrayLong[i].getPosY() + 20) {
                this.arrayLong[i].setFocus(true);
            } else {
                this.arrayLong[i].setFocus(false);
            }
        }
    }

    writeTextInput(k) {
        for (let i = 0; i < this.arrayInputs.length; i++) {
            if (this.arrayInputs[i].isFocus() && this.arrayInputs[i].getText().length < 25) {
                this.arrayInputs[i].setText(this.arrayInputs[i].getText() + k);
            }
        }

        for (let i = 0; i < this.arrayLong.length; i++) {
            if (this.arrayLong[i].isFocus() && this.arrayLong[i].getText().length < 25) {
                this.arrayLong[i].setText(this.arrayLong[i].getText() + k);
            }
        }
    }

    eraseTextInput() {
        for (let i = 0; i < this.arrayInputs.length; i++) {
            if (this.arrayInputs[i].isFocus() && this.arrayInputs[i].getText().length - 1 >= 0) {
                let indice = this.arrayInputs[i].getText().length - 1;
                this.arrayInputs[i].setText(this.arrayInputs[i].getText().substring(0, indice));
            }
        }

        for (let i = 0; i < this.arrayLong.length; i++) {
            if (this.arrayLong[i].isFocus() && this.arrayLongs[i].getText().length - 1 >= 0) {
                let indice = this.arrayLong[i].getText().length - 1;
                this.arrayLong[i].setText(this.arrayLong[i].getText().substring(0, indice));
            }
        }
    }
}