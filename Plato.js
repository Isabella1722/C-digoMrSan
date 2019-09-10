class Plato {
    constructor(idSandwich, nombre, ingredientes,/* idAdiciones, idComplementos*/ precio, cantidad, /*evaluarAdicion, evaluarComplemento*/) {
        this.idSandwich = idSandwich;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        //this.idAdiciones = idAdiciones;
       // this.idComplementos = idComplementos;
        this.precio = precio;
        this.cantidad =0;
       // this.evaluarAdicion = evaluarAdicion;
       // this.evaluarComplemento = evaluarComplemento;
/*
        switch (this.idSandwich) {

            case 1:
                    this.nombre = "Sandwich Criollo";
                    this.precio = 13400;

            break;


            case 2:
                    this.nombre = "Sandwich Cubano";
                    this.precio = 9200;

            break;



            case 3:

                    this.nombre = "Sandwich Italiano";
                    this.precio = 13400;
            break;



            case 4:
                    this.nombre = "Sandwich Vegetariano";
                    this.precio = 11300;


            break;



        }*/
/*
        switch (this.nombre) {
            case "Sandwich Criollo":
                this.idSandwich = 01;
                this.nombre = "Sandwich Criollo";
                this.ingredientes= "Carne de res desmechada,hogo, maduro y maíz tierno";
                this.precio = 13400;
               

                break;
            case "Sandwich Cubano":
                this.idSandwich = 02;
                this.nombre = "Sandwich Cubano";
                this.ingredientes= "Jamón de cerdo,queso mozzarella, lechuga,tomate";
                this.precio = 9200;
                break;

            case "Sandwich Italiano":
                this.idSandwich = 03;
                this.nombre = "Sandwich Italiano";
                this.ingredientes= "Roast beff,jamón,salami,queso parmesano,pasta,tomate";
                this.precio = 13400;
                break;

            case "Sandwich Vegetariano":
                this.idSandwich = 04;
                this.nombre = "Sandwich Vegetariano";
                this.ingredientes= "Pimentón, cebolla, champiñones,tomate,maíz tierno,pimienta y zanahoria";
                this.precio = 11300;
                break;



        }*/
    }
}