class Pago {
    constructor(costoTotal, monto) {
        this.costoTotal = costoTotal;
        this.monto = monto;
        this.validarPago = false;
    }
    pagoRecibido() {
        text("Pago sin éxito", 250, 520);
    }
}
