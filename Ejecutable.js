let pantalla;
let inicio, acompa, acompaNumero, adiciones, alerta1, alerta2, perfil, confirmarDir, efectivo, pago, factura,
    historialPedido, menu, menuP, papitas, registro, sCriollo, sVegetariano, sQubano, sItaliano, tarjeta;
let platosArreglo;
let sandwichCriollo, sandwichCubano, sandwichItaliano, sandwichVegetariano;
let cantidad;
let plato1, plato2, plato3, plato4;
let arrayUsuario;


function preload() {
    inicio = loadImage("data/inicio.jpg");
    acompa = loadImage("data/Acompa.jpg");
    acompaNumero = loadImage("data/AcompaNumero.jpg");
    adiciones = loadImage("data/Adiciones.jpg");
    alerta1 = loadImage("data/Alerta1.jpg");
    alerta2 = loadImage("data/Alerta2.jpg");
    perfil = loadImage("data/perfil.jpg");
    confirmarDir = loadImage("data/ConfirmarDir.jpg");
    efectivo = loadImage("data/Efectivo.jpg");
    pago = loadImage("data/Pago.jpg");
    factura = loadImage("data/Factura.jpg");
    historialPedido = loadImage("data/HistorialPedido.jpg");
    menu = loadImage("data/Menu.jpg");
    menuP = loadImage("data/menuPerfil2.jpg");
    papitas = loadImage("data/Papitas.jpg");
    registro = loadImage("data/Registro.jpg");
    sCriollo = loadImage("data/SCriollo.jpg");
    sVegetariano = loadImage("data/SVegetariano.jpg");
    sQubano = loadImage("data/SQubano.jpg");
    sItaliano = loadImage("data/SItaliano.jpg");
    tarjeta = loadImage("data/Tarjeta.jpg");

}

function setup() {
    createCanvas(375, 812);
    pantalla = 0;
    userInput = createInput('');
    passwordInput = createInput('', 'password');
    userInput.position(66, 405);
    userInput.size(255, 15);
    passwordInput.position(66, 480);
    passwordInput.size(255, 15);
    cantidad = 0;

    plato1 = new Plato(1, "Sandwich Criollo", "Carne de res desmechada,hogo, maduro y maíz tierno", 13400, 0);
    plato2 = new Plato(2, "Sandwich Cubano", "Jamón de cerdo,queso mozzarella, lechuga,tomate", 9200, 0);
    plato3 = new Plato(3, "Sandwich Italiano", "Roast beff,jamón,salami,queso parmesano,pasta,tomate", 13400, 0);
    plato4 = new Plato(4, "Sandwich Vegetariano", "Pimentón,champiñones,tomate,maíz tierno y zanahoria", 11300, 0);

    arrayUsuario = [];
}
//platosArreglo = [];




function draw() {
    background(0);
    cursor(ARROW);
    switch (pantalla) {


        case 0:
            //PANTALLA INICIO
            image(inicio, 0, 0);
            if (mouseX >= 90 && mouseX <= 282 && mouseY >= 543 && mouseY <= 589) {
                cursor(HAND);
            }
            if (mouseX >= 124 && mouseX <= 246 && mouseY >= 623 && mouseY <= 646) {
                cursor(HAND);
            }

            fill(0);
            textSize(15);
            text("Usuario", 63, 385);

            fill(0);
            textSize(15);
            text("Contraseña", 60, 466);
            var inputVal = document.getElementById('<%=userInput.Ejecutable%>').value;
            console.log(inputVal);
            break;


        case 1:

            //PANTALLA MENU
            image(menu, 0, 0);

            //textAlign(CENTER);
            //text(this.nombre,178,365);
            // textSize(16);

            if (mouseX >= 0 && mouseX <= 67 && mouseY >= 1 && mouseY <= 66) {
                cursor(HAND);
            }
            if (mouseX >= 34 && mouseX <= 343 && mouseY >= 336 && mouseY <= 417) {
                cursor(HAND);
            }
            if (mouseX >= 34 && mouseX <= 343 && mouseY >= 456 && mouseY <= 536) {
                cursor(HAND);
            }
            if (mouseX >= 34 && mouseX <= 343 && mouseY >= 570 && mouseY <= 652) {
                cursor(HAND);
            }
            if (mouseX >= 35 && mouseX <= 345 && mouseY >= 689 && mouseY <= 765) {
                cursor(HAND);
            }

            fill(0);
            textSize(16);
            textAlign(LEFT);
            text(plato1.nombre, 176, 370);

            text(plato1.precio, 176, 395);
            //textSize(16);

            text(plato2.nombre, 176, 490);
            //textSize(16);
            text(plato2.precio, 176, 515);
            //textSize(16);

            text(plato3.nombre, 176, 608);
            //textSize(16);
            text(plato3.precio, 176, 632);
            //textSize(16);

            text(plato4.nombre, 176, 726);
            //textSize(16);
            text(plato4.precio, 176, 750);
            //textSize(16);


            /*
            switch (this.idSandwich) {

                case 1:
                        this.nombre = "Sandwich Criollo";
                        this.precio = 13400;
                        textAlign(CENTER);
            text(this.nombre,232,362);
            textSize(16);
            text(this.precio,229,389);
            textSize(16);
    
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
    
    
    
            }
*/
            break;

        case 2:

            //PANTALLA REGISTRO
            image(registro, 0, 0);
            if (mouseX >= 0 && mouseX <= 67 && mouseY >= 1 && mouseY <= 66 && pantalla == 2) {
                cursor(HAND);
            }
            if (mouseX >= 159 && mouseX <= 214 && mouseY >= 551 && mouseY <= 608) {
                cursor(HAND);
            }
            // if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59 ) {
            //     cursor(HAND);
            // }

            fill(0);
            textSize(15);
            text("Nombre", 60, 270);

            textSize(15);
            text("Correo electrónico", 60, 365);

            textSize(15);
            text("Contraseña", 60, 456);
            break;

        case 3:

            //PANTALLA MENU PERFIL
            image(menuP, 0, 0);
            if (mouseX >= 0 && mouseX <= 266 && mouseY >= 96 && mouseY <= 162) {
                cursor(HAND);
            }
            if (mouseX >= 2 && mouseX <= 257 && mouseY >= 196 && mouseY <= 261) {
                cursor(HAND);
            }
            if (mouseX >= 0 && mouseX <= 264 && mouseY >= 14 && mouseY <= 90) {
                cursor(HAND);
            }
            break;

        case 4:

            //PANTALLA SANDWICH CRIOLLO
            image(sCriollo, 0, 0);
            if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59) {
                cursor(HAND);
            }

            fill(0);
            textSize(16);
            textAlign(CENTER);
            text(plato1.idSandwich, 79, 130);

            fill(0);
            textSize(13);
            text(plato1.ingredientes, 190, 371);

            fill(255);
            textSize(22);
            text(plato1.cantidad, 188, 510);


            if (mouseX >= 147 && mouseX <= 226 && mouseY >= 631 && mouseY <= 692) {
                cursor(HAND);
            }
            break;

        case 5:

            //PANTALLA SANDWICH CUBANO
            image(sQubano, 0, 0);
            if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59) {
                cursor(HAND);
            }

            fill(0);
            textSize(16);
            textAlign(CENTER);
            text(plato2.idSandwich, 79, 130);

            fill(0);
            textSize(13);
            text(plato2.ingredientes, 190, 371);

            fill(255);
            textSize(22);
            text(plato2.cantidad, 188, 510);
            if (mouseX >= 147 && mouseX <= 226 && mouseY >= 631 && mouseY <= 692) {
                cursor(HAND);
            }
            break;

        case 6:

            //PANTALLA SANDWICH CUBANO
            image(sItaliano, 0, 0);
            if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59) {
                cursor(HAND);

            }

            fill(0);
            textSize(16);
            textAlign(CENTER);
            text(plato3.idSandwich, 79, 130);

            fill(0);
            textSize(13);
            text(plato3.ingredientes, 190, 371);

            fill(255);
            textSize(22);
            text(plato3.cantidad, 188, 510);

            if (mouseX >= 147 && mouseX <= 226 && mouseY >= 631 && mouseY <= 692) {
                cursor(HAND);
            }
            break;

        case 7:

            //PANTALLA SANDWICH VEGETARIANO
            image(sVegetariano, 0, 0);
            if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59) {
                cursor(HAND);

            }

            fill(0);
            textSize(16);
            textAlign(CENTER);
            text(plato4.idSandwich, 79, 130);

            fill(0);
            textSize(13);
            text(plato4.ingredientes, 190, 371);

            fill(255);
            textSize(22);
            text(plato4.cantidad, 188, 510);
            if (mouseX >= 147 && mouseX <= 226 && mouseY >= 631 && mouseY <= 692) {
                cursor(HAND);
            }
            break;

        case 8:

            //PANTALLA FACTURA
            break;

        case 9:

            //PANTALLA CERRAR SESION
            image(perfil, 0, 0);
            if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59) {
                cursor(HAND);
            }

            if (mouseX >= 161 && mouseX <= 224 && mouseY >= 533 && mouseY <= 589) {
                cursor(HAND);
            }
            break;

        case 10:

            //PANTALLA HISTORIAL PEDIDO
            image(historialPedido, 0, 0);
            if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59) {
                cursor(HAND);
            }
            break;

        case 11:

            //PANTALLA ALERTA ADICIONES

            image(alerta1, 0, 0);
            if (mouseX >= 93 && mouseX <= 140 && mouseY >= 431 && mouseY <= 476) {
                cursor(HAND);
            }
            if (mouseX >= 230 && mouseX <= 280 && mouseY >= 434 && mouseY <= 472) {
                cursor(HAND);
            }
            break;

        case 12:

            //PANTALLA  ALERTA ACOMPAÑAMIENTOS
            image(alerta2, 0, 0);
            if (mouseX >= 93 && mouseX <= 140 && mouseY >= 431 && mouseY <= 476) {
                cursor(HAND);
            }
            if (mouseX >= 230 && mouseX <= 280 && mouseY >= 434 && mouseY <= 472) {
                cursor(HAND);
            }
            break;

        case 13:

            //PANTALLA   ADICIONES
            image(adiciones, 0, 0);
            if (mouseX >= 22 && mouseX <= 66 && mouseY >= 24 && mouseY <= 61) {
                cursor(HAND);
            }
            break;

        case 14:

            //PANTALLA   ACOMPAÑAMIENTOS
            image(acompa, 0, 0);
            break;

        case 15:

            //PANTALLA   PAGO
            image(pago, 0, 0);
            if (mouseX >= 22 && mouseX <= 66 && mouseY >= 24 && mouseY <= 61) {
                cursor(HAND);
            }
            break;

    }

}

function mousePressed() {
    print(" X" + mouseX + " Y" + mouseY);
    print("P " + pantalla);

    //BOTÓN IR A PERFIL
    if (mouseX >= 0 && mouseX <= 264 && mouseY >= 14 && mouseY <= 90 && pantalla == 3) {
        pantalla = 9;
    }

    //BOTÓN SANDWICH ITALIANO
    if (mouseX >= 34 && mouseX <= 343 && mouseY >= 570 && mouseY <= 652 && pantalla == 1) {
        pantalla = 6;
    }

    //BOTÓN ENTRAR
    if (mouseX >= 90 && mouseX <= 282 && mouseY >= 543 && mouseY <= 589 && pantalla == 0) {
        pantalla = 1;
        userInput.remove();
        passwordInput.remove();
    }

    //BOTÓN MENÚ PERFIL
    if (mouseX >= 0 && mouseX <= 67 && mouseY >= 1 && mouseY <= 66 && pantalla == 1) {
        pantalla = 3;
    }
    if (mouseX >= 265 && pantalla == 3) {
        pantalla = 1;
    }

    // BOTÓN ENTRAR REGISTRO
    if (mouseX >= 124 && mouseX <= 246 && mouseY >= 623 && mouseY <= 646 && pantalla == 0) {
        pantalla = 2;
        userInput.remove();
        passwordInput.remove();
        emailInput = createInput('', 'email');
        createPassword = createInput('');
        direccionInput = createInput('', 'adress');
        emailInput.position(66, 285);
        emailInput.size(255, 15);
        createPassword.position(66, 380);
        createPassword.size(255, 15);
        direccionInput.position(66, 475);
        direccionInput.size(255, 15);

    }

    // BOTÓN REGISTRO VOLVER 
    if (mouseX >= 0 && mouseX <= 67 && mouseY >= 1 && mouseY <= 66 && pantalla == 2) {
        pantalla = 0;
        emailInput.remove();
        createPassword.remove();
        direccionInput.remove();
        userInput = createInput('');
        passwordInput = createInput('', 'password');
        userInput.position(66, 405);
        userInput.size(255, 15);
        passwordInput.position(66, 480);
        passwordInput.size(255, 15);

    }

    // BOTÓN REGISTRO
    if (mouseX >= 159 && mouseX <= 214 && mouseY >= 551 && mouseY <= 608 && pantalla == 2) {
        //arrayUsuario.push(new Usuario(emailInput.value(), createPassword.value(), direccionInput.value()));
        /*for (let i = 0; i < arrayUsuario.lenght; i++) {
            arrayUsuario.push(new Usuario(emailInput.value(), createPassword.value(), direccionInput.value()));
            console.log(arrayUsuario.lenght);
        }*/
        pantalla = 1;
        emailInput.hide();
        createPassword.hide();
        direccionInput.hide();


    }

    //BOTÓN SANDWICH CRIOLLO
    if (mouseX >= 34 && mouseX <= 343 && mouseY >= 336 && mouseY <= 417 && pantalla == 1) {
        pantalla = 4;
    }

    //BOTÓN SANDWICH CUBANO
    if (mouseX >= 34 && mouseX <= 343 && mouseY >= 456 && mouseY <= 536 && pantalla == 1) {
        pantalla = 5;
    }

    //BOTÓN SANDWICH VEGETARIANO
    if (mouseX >= 35 && mouseX <= 345 && mouseY >= 689 && mouseY <= 765 && pantalla == 1) {
        pantalla = 7;
    }

    //BOTÓN DEVOLVER SANDWICH CUBANO
    if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59 && pantalla == 5) {
        pantalla = 1;
        plato1.cantidad = 0;
        plato2.cantidad = 0;
        plato3.cantidad = 0;
        plato4.cantidad = 0;
    }

    //BOTÓN DEVOLVER SANDWICH ITALIANO
    if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59 && pantalla == 6) {
        pantalla = 1;
        plato1.cantidad = 0;
        plato2.cantidad = 0;
        plato3.cantidad = 0;
        plato4.cantidad = 0;

    }

    //BOTÓN DEVOLVER SANDWICH CRIOLLO
    if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59 && pantalla == 4) {
        pantalla = 1;
        plato1.cantidad = 0;
        plato2.cantidad = 0;
        plato3.cantidad = 0;
        plato4.cantidad = 0;
    }

    //BOTÓN DEVOLVER SANDWICH VEGETARIANO
    if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59 && pantalla == 7) {
        pantalla = 1;
        plato1.cantidad = 0;
        plato2.cantidad = 0;
        plato3.cantidad = 0;
        plato4.cantidad = 0;
    }

    //BOTÓN DEVOLVER HISTORIAL DE PEDIDO
    if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59 && pantalla == 10) {
        pantalla = 1;

    }

    //BOTÓN IR AL HISTORIAL DE PEDIDO
    if (mouseX >= 0 && mouseX <= 266 && mouseY >= 96 && mouseY <= 162 && pantalla == 3) {
        pantalla = 10;
    }
    //BOTÓN CERRAR SESION
    if (mouseX >= 2 && mouseX <= 257 && mouseY >= 196 && mouseY <= 261 && pantalla == 3) {
        pantalla = 0;
        userInput = createInput('');
        passwordInput = createInput('', 'password');
        userInput.position(66, 405);
        userInput.size(255, 15);
        passwordInput.position(66, 480);
        passwordInput.size(255, 15);
    }

    //BOTÓN DEVOLVER CERRAR SESION
    if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59 && pantalla == 9) {
        pantalla = 1;
    }

    //BOTÓN CERRAR DEFINITIVAMENTE SESION
    if (mouseX >= 161 && mouseX <= 224 && mouseY >= 533 && mouseY <= 589 && pantalla == 9) {
        pantalla = 0;
        userInput = createInput('');
        passwordInput = createInput('', 'password');
        userInput.position(66, 405);
        userInput.size(255, 15);
        passwordInput.position(66, 480);
        passwordInput.size(255, 15);
    }

    //INCREMENTAR CANTIDAD DE SANDWICH CRIOLLO
    if (mouseX >= 230 && mouseX <= 271 && mouseY >= 485 && mouseY <= 532 && pantalla == 4) {
        //  console.log(plato1.cantidad);
        plato1.cantidad++;
    }

    if (mouseX >= 103 && mouseX <= 145 && mouseY >= 501 && mouseY <= 513 && pantalla == 4) {
        plato1.cantidad--;
    }

    if (plato1.cantidad < 0) {
        plato1.cantidad = 0;
    }

    //INCREMENTAR CANTIDAD DE SANDWICH CUBANO
    if (mouseX >= 230 && mouseX <= 271 && mouseY >= 485 && mouseY <= 532 && pantalla == 5) {
        //   console.log(plato1.cantidad);
        plato2.cantidad++;
    }

    if (mouseX >= 103 && mouseX <= 145 && mouseY >= 501 && mouseY <= 513 && pantalla == 5) {
        plato2.cantidad--;
    }

    if (plato2.cantidad < 0) {
        plato2.cantidad = 0;
    }

    //INCREMENTAR CANTIDAD DE SANDWICH ITALIANO
    if (mouseX >= 230 && mouseX <= 271 && mouseY >= 485 && mouseY <= 532 && pantalla == 6) {
        //  console.log(plato1.cantidad);
        plato3.cantidad++;
    }
    
    if (mouseX >= 103 && mouseX <= 145 && mouseY >= 501 && mouseY <= 513 && pantalla == 6) {
        plato3.cantidad--;
    }

    if (plato3.cantidad < 0) {
        plato3.cantidad = 0;
    }

    //INCREMENTAR CANTIDAD DE SANDWICH VEGETARIANO
    if (mouseX >= 230 && mouseX <= 271 && mouseY >= 485 && mouseY <= 532 && pantalla == 7) {
        //  console.log(plato1.cantidad);
        plato4.cantidad++;
    }

    if (mouseX >= 103 && mouseX <= 145 && mouseY >= 501 && mouseY <= 513 && pantalla == 7) {
        plato4.cantidad--;
    }

    if (plato4.cantidad < 0) {
        plato4.cantidad = 0;
    }

    //BOTÓN COMPRAR SANDWICH CRIOLLO
    if (mouseX >= 147 && mouseX <= 226 && mouseY >= 631 && mouseY <= 692 && pantalla == 4) {
        pantalla = 11;
    }

    //BOTÓN COMPRAR SANDWICH CUBANO
    if (mouseX >= 147 && mouseX <= 226 && mouseY >= 631 && mouseY <= 692 && pantalla == 5) {
        pantalla = 11;
    }

    //BOTÓN COMPRAR SANDWICH ITALIANO
    if (mouseX >= 147 && mouseX <= 226 && mouseY >= 631 && mouseY <= 692 && pantalla == 6) {
        pantalla = 11;
    }

    //BOTÓN COMPRAR SANDWICH VEGETARIANO
    if (mouseX >= 147 && mouseX <= 226 && mouseY >= 631 && mouseY <= 692 && pantalla == 7) {
        pantalla = 11;
    }

    //BOTÓN NO  ACOMPAÑAMIENTOS
    if (mouseX >= 96 && mouseX <= 142 && mouseY >= 430 && mouseY <= 472 && pantalla == 12) {
        pantalla = 15;
    }

    //BOTÓN SI ADICIONES 
    if (mouseX >= 230 && mouseX <= 280 && mouseY >= 434 && mouseY <= 472 && pantalla == 11) {
        pantalla = 13;
    }

    //BOTÓN NO  ADICIONES
    if (mouseX >= 93 && mouseX <= 140 && mouseY >= 431 && mouseY <= 476 && pantalla == 11) {
        pantalla = 12;
    }

    //BOTÓN DEVOLVER ADICIONES
    if (mouseX >= 22 && mouseX <= 66 && mouseY >= 24 && mouseY <= 61 && pantalla == 13) {
        pantalla = 1;
    }

    //BOTÓN SI ACOMPAÑAMIENTOS 
    if (mouseX >= 230 && mouseX <= 280 && mouseY >= 434 && mouseY <= 472 && pantalla == 12) {
        pantalla = 14;
    }

    //BOTÓN DEVOLVER ACOMPAÑAMIENTOS
    if (mouseX >= 22 && mouseX <= 66 && mouseY >= 24 && mouseY <= 61 && pantalla == 12) {
        pantalla = 1;
    }

    //DEVOLVER PAGO
    if (mouseX >= 22 && mouseX <= 66 && mouseY >= 24 && mouseY <= 61 && pantalla == 15) {
        pantalla = 1;
    }

}

// alt shift f  para acomodar las lineas de código
