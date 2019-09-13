class Adicion {
    constructor(idAdiciones, nombre, precioA, cantidadA) {
        this.idAdiciones = idAdiciones;
        this.nombre = nombre;
        this.cantidadA = cantidadA;
        this.precioA = precioA;

    }
    calcularPrecioTotalA() {
        this.precioTA = (this.precioA * this.cantidadA);
    }
}

