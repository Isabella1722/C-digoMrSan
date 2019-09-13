class Tarjeta {
    constructor(fechaCaducidad, claveTarjeta, tipoTarjeta) {
        this.fechaCaducidad = fechaCaducidad;
        this.claveTarjeta = claveTarjeta;
        this.tipoTarjeta = tipoTarjeta;
        this.incrementPosY = 0;
        this.incrementPosX = 0;
        this.arrayInputs = [];
        this.arrayMini = [];
        for (let i = 0; i < 2; i++) {
            this.arrayInputs[i] = new Input(136, 405 + this.incrementPosY, 203);
            this.incrementPosY += 116;

        }
        for (let i = 0; i < 3; i++) {
            this.arrayMini[i] = new Input(136 + this.incrementPosX, 463, 60);
            this.incrementPosX += 71;
        }
    }

    paint() {
        for (let i = 0; i < this.arrayInputs.length; i++) {
            this.arrayInputs[i].paint();
            this.arrayInputs[i].displayText();
        }

        for (let i = 0; i < this.arrayMini.length; i++) {
            this.arrayMini[i].paint();
            this.arrayMini[i].displayText();
        }
    }

    focusInputs(mX, mY) {
        for (let i = 0; i < this.arrayInputs.length; i++) {
            if (mX >= this.arrayInputs[i].getPosX() && mX <= this.arrayInputs[i].getPosX() + 200
                && mY >= this.arrayInputs[i].getPosY() && mY <= this.arrayInputs[i].getPosY() + 20) {
                this.arrayInputs[i].setFocus(true);
            } else {
                this.arrayInputs[i].setFocus(false);
            }
        }

        for (let i = 0; i < this.arrayMini.length; i++) {
            if (mX >= this.arrayMini[i].getPosX() && mX <= this.arrayMini[i].getPosX() + 60
                && mY >= this.arrayMini[i].getPosY() && mY <= this.arrayMini[i].getPosY() + 30) {
                this.arrayMini[i].setFocus(true);
            } else {
                this.arrayMini[i].setFocus(false);
            }
        }
    }

    writeTextInput(k) {
        for (let i = 0; i < this.arrayInputs.length; i++) {
            if (this.arrayInputs[i].isFocus() && this.arrayInputs[i].getText().length < 25) {
                this.arrayInputs[i].setText(this.arrayInputs[i].getText() + k);
            }
        }

        for (let i = 0; i < this.arrayMini.length; i++) {
            if (this.arrayMini[i].isFocus() && this.arrayMini[i].getText().length < 4) {
                this.arrayMini[i].setText(this.arrayMini[i].getText() + k);
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

        for (let i = 0; i < this.arrayMini.length; i++) {
            if (this.arrayMini[i].isFocus() && this.arrayMini[i].getText().length - 1 >= 0) {
                let indice = this.arrayMini[i].getText().length - 1;
                this.arrayMini[i].setText(this.arrayMini[i].getText().substring(0, indice));
            }
        }
    }
}