let pantalla;
let inicio, acompa, acompaNumero, adiciones, alerta1, alerta2, perfil, confirmarDir, efectivo, pago, factura,
    historialPedido, menu, menuP, papitas, registro, sCriollo, sVegetariano, sQubano, sItaliano, tarjeta;
let platosArreglo;
//let sandwichCriollo, sandwichCubano, sandwichItaliano, sandwichVegetariano;
let cantidad;
let plato1, plato2, plato3, plato4;
let adicion1, adicion2, adicion3, adicion4, adicion5, adicion6;
let loginScreen;
let registroScreen;
let efectivoScreen;
let tarjetaScreen;
let direccionScreen;
let arrayUsuario;
let cantidadA;
//let usuarios =[];


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
    /*userInput = createInput('');
    passwordInput = createInput('', 'password');
    userInput.position(66, 405);
    userInput.size(255, 15);
    passwordInput.position(66, 480);
    passwordInput.size(255, 15);*/
    cantidad = 0;
    cantidadA = 0;
    plato1 = new Plato(1, "Sandwich Criollo", "Carne de res desmechada,hogo, maduro y maíz tierno", 13400, 0);
    plato2 = new Plato(2, "Sandwich Cubano", "Jamón de cerdo,queso mozzarella, lechuga,tomate", 9200, 0);
    plato3 = new Plato(3, "Sandwich Italiano", "Roast beff,jamón,salami,queso parmesano,pasta,tomate", 13400, 0);
    plato4 = new Plato(4, "Sandwich Vegetariano", "Pimentón,champiñones,tomate,maíz tierno y zanahoria", 11300, 0);

    loginScreen = new Login();
    registroScreen = new Registro();
    efectivoScreen = new Efectivo();
    tarjetaScreen = new Tarjeta();
    direccionScreen = new Direccion();
    arrayUsuario = [];


    adicion1 = new Adicion(1, "Pan integral", 1500, 0);
    adicion2 = new Adicion(2, "Pan común", 1000, 0);
    adicion3 = new Adicion(3, "Tomate", 500, 0);
    adicion4 = new Adicion(4, "Queso", 1000, 0);
    adicion5 = new Adicion(5, "Salsa", 100, 0);
    adicion6 = new Adicion(6, "proteinas", 2000, 0);
    //  let usuariosGuardados=localStorage.getItem('usuarios');
    //  if (usuariosGuardados){

    //       usuarios=JSON.parse(usuariosGuardados);
    //  }

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

            noStroke();
            fill(0);
            textSize(15);
            text("Usuario", 63, 385);

            noStroke();
            fill(0);
            textSize(15);
            text("Contraseña", 60, 466);
            loginScreen.paint();
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
            registroScreen.paint();
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

            //BOTONES PAN INTEGRAL
            if (mouseX >= 290 && mouseX <= 313 && mouseY >= 320 && mouseY <= 345) {
                cursor(HAND);
            }

            fill(255);
            textSize(22);
            text(adicion1.cantidad, 268, 340);

            if (mouseX >= 216 && mouseX <= 241 && mouseY >= 328 && mouseY <= 339) {
                cursor(HAND);
            }

            //BOTONES PAN COMUN
            //SUMA
            if (mouseX >= 291 && mouseX <= 314 && mouseY >= 382 && mouseY <= 405) {
                cursor(HAND);
            }

            fill(255);
            textSize(22);
            text(adicion2.cantidad, 268, 400);
            //RESTA
            if (mouseX >= 218 && mouseX <= 240 && mouseY >= 388 && mouseY <= 395) {
                cursor(HAND);
            }

            //BOTONES TOMATE 
            //SUMA
            if (mouseX >= 291 && mouseX <= 316 && mouseY >= 441 && mouseY <= 464) {
                cursor(HAND);
            }

            fill(255);
            textSize(22);
            text(adicion3.cantidad, 268, 459);
            //RESTA
            if (mouseX >= 217 && mouseX <= 241 && mouseY >= 447 && mouseY <= 459) {
                cursor(HAND);
            }

            //BOTONES QUESO 
            //SUMA
            if (mouseX >= 290 && mouseX <= 314 && mouseY >= 502 && mouseY <= 523) {
                cursor(HAND);
            }

            fill(255);
            textSize(22);
            text(adicion4.cantidad, 268, 518);
            //RESTA
            if (mouseX >= 216 && mouseX <= 240 && mouseY >= 501 && mouseY <= 515) {
                cursor(HAND);
            }

            //BOTONES SALSAS 
            //SUMA
            if (mouseX >= 292 && mouseX <= 316 && mouseY >= 561 && mouseY <= 582) {
                cursor(HAND);
            }

            fill(255);
            textSize(22);
            text(adicion5.cantidad, 268, 578);
            //RESTA
            if (mouseX >= 216 && mouseX <= 242 && mouseY >= 563 && mouseY <= 573) {
                cursor(HAND);
            }


            //BOTONES PROTEÍNA 
            //SUMA
            if (mouseX >= 291 && mouseX <= 314 && mouseY >= 619 && mouseY <= 640) {
                cursor(HAND);
            }

            fill(255);
            textSize(22);
            text(adicion6.cantidad, 268, 635);
            //RESTA
            if (mouseX >= 216 && mouseX <= 240 && mouseY >= 625 && mouseY <= 633) {
                cursor(HAND);
            }

            if (mouseX >= 129 && mouseX <= 249 && mouseY >= 732 && mouseY <= 768) {
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

            if (mouseX >= 64 && mouseX <= 303 && mouseY >= 201 && mouseY <= 376) {
                cursor(HAND);
            }
            if (mouseX >= 69 && mouseX <= 305 && mouseY >= 478 && mouseY <= 657) {
                cursor(HAND);
            }
            break;


        case 16:

            //PANTALLA  PAGO EFECTIVO
            image(efectivo, 0, 0);
            if (mouseX >= 22 && mouseX <= 66 && mouseY >= 24 && mouseY <= 61) {
                cursor(HAND);
            }
            if (mouseX >= 128 && mouseX <= 248 && mouseY >= 694 && mouseY <= 734) {
                cursor(HAND);
            }

            efectivoScreen.paint();
            break;


        case 17:

            //PANTALLA   PAGO TARJETA
            image(tarjeta, 0, 0);
            if (mouseX >= 22 && mouseX <= 66 && mouseY >= 24 && mouseY <= 61) {
                cursor(HAND);
            }
            if (mouseX >= 128 && mouseX <= 248 && mouseY >= 694 && mouseY <= 734) {
                cursor(HAND);
            }

            tarjetaScreen.paint();
            break;

        case 18:
            //PANTALLA  CONFIRMAR
            image(confirmarDir, 0, 0);
            if (mouseX >= 165 && mouseX <= 205 && mouseY >= 582 && mouseY <= 632) {
                cursor(HAND);
            }
            fill(0);
            textSize(16);
            textAlign(CENTER);
            text("Especificación:", 109, 466);
            direccionScreen.paint()
            break;
        case 19:
            //PANTALLA  FACTURA
            image(factura, 0, 0);
            if (mouseX >= 320 && mouseX <= 340 && mouseY >= 70 && mouseY <= 93) {
                cursor(HAND);
            }
            break;



    }

}

function keyPressed() {
    switch (pantalla) {
        case 0:
            if (keyCode != BACKSPACE && keyCode != DELETE && keyCode != ENTER && keyCode != RETURN && keyCode != TAB && keyCode != ESCAPE
                && keyCode != OPTION && keyCode != UP_ARROW && keyCode != DOWN_ARROW && keyCode != LEFT_ARROW && keyCode != RIGHT_ARROW
                && keyCode != CONTROL && keyCode != SHIFT && keyCode != ALT && keyCode != 20) {
                loginScreen.writeTextInput(key);
            } else if (keyCode == BACKSPACE) {
                loginScreen.eraseTextInput();
            }
            break;

        case 2:
            if (keyCode != BACKSPACE && keyCode != DELETE && keyCode != ENTER && keyCode != RETURN && keyCode != TAB && keyCode != ESCAPE
                && keyCode != OPTION && keyCode != UP_ARROW && keyCode != DOWN_ARROW && keyCode != LEFT_ARROW && keyCode != RIGHT_ARROW
                && keyCode != CONTROL && keyCode != SHIFT && keyCode != ALT && keyCode != 20) {
                registroScreen.writeTextInput(key);
            } else if (keyCode == BACKSPACE) {
                registroScreen.eraseTextInput();
            }
            break;
        case 16:
            if (keyCode != BACKSPACE && keyCode != DELETE && keyCode != ENTER && keyCode != RETURN && keyCode != TAB && keyCode != ESCAPE
                && keyCode != OPTION && keyCode != UP_ARROW && keyCode != DOWN_ARROW && keyCode != LEFT_ARROW && keyCode != RIGHT_ARROW
                && keyCode != CONTROL && keyCode != SHIFT && keyCode != ALT && keyCode != 20) {
                efectivoScreen.writeTextInput(key);
            } else if (keyCode == BACKSPACE) {
                efectivoScreen.eraseTextInput();
            }
            break;
        case 17:
            if (keyCode != BACKSPACE && keyCode != DELETE && keyCode != ENTER && keyCode != RETURN && keyCode != TAB && keyCode != ESCAPE
                && keyCode != OPTION && keyCode != UP_ARROW && keyCode != DOWN_ARROW && keyCode != LEFT_ARROW && keyCode != RIGHT_ARROW
                && keyCode != CONTROL && keyCode != SHIFT && keyCode != ALT && keyCode != 20) {
                tarjetaScreen.writeTextInput(key);
            } else if (keyCode == BACKSPACE) {
                tarjetaScreen.eraseTextInput();
            }
            break;
        case 18:
            if (keyCode != BACKSPACE && keyCode != DELETE && keyCode != ENTER && keyCode != RETURN && keyCode != TAB && keyCode != ESCAPE
                && keyCode != OPTION && keyCode != UP_ARROW && keyCode != DOWN_ARROW && keyCode != LEFT_ARROW && keyCode != RIGHT_ARROW
                && keyCode != CONTROL && keyCode != SHIFT && keyCode != ALT && keyCode != 20) {
                direccionScreen.writeTextInput(key);
            } else if (keyCode == BACKSPACE) {
                direccionScreen.eraseTextInput();
            }
            break;
    }
}

function mousePressed() {
    print(" X" + mouseX + " Y" + mouseY);
    print("P " + pantalla);

    if (pantalla == 0) {
        loginScreen.focusInputs(mouseX, mouseY);
    }

    if (pantalla == 2) {
        registroScreen.focusInputs(mouseX, mouseY);
    }

    if (pantalla == 16) {
        efectivoScreen.focusInputs(mouseX, mouseY);
    }

    if (pantalla == 17) {
        tarjetaScreen.focusInputs(mouseX, mouseY);
    }

    if (pantalla == 18) {
        direccionScreen.focusInputs(mouseX, mouseY);
    }

    switch (pantalla) {
        case 0:
            //BOTÓN ENTRAR
            if (mouseX >= 90 && mouseX <= 282 && mouseY >= 543 && mouseY <= 589) {
                pantalla = 1;
            }
            // BOTÓN ENTRAR REGISTRO
            if (mouseX >= 124 && mouseX <= 246 && mouseY >= 623 && mouseY <= 646) {
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
            break;
        case 1:
            //BOTÓN SANDWICH ITALIANO
            if (mouseX >= 34 && mouseX <= 343 && mouseY >= 570 && mouseY <= 652) {
                pantalla = 6;
            }
            //BOTÓN SANDWICH CRIOLLO
            if (mouseX >= 34 && mouseX <= 343 && mouseY >= 336 && mouseY <= 417) {
                pantalla = 4;
            }
            //BOTÓN SANDWICH CUBANO
            if (mouseX >= 34 && mouseX <= 343 && mouseY >= 456 && mouseY <= 536) {
                pantalla = 5;
            }
            //BOTÓN SANDWICH VEGETARIANO
            if (mouseX >= 35 && mouseX <= 345 && mouseY >= 689 && mouseY <= 765) {
                pantalla = 7;
            }
            //BOTÓN MENÚ PERFIL
            if (mouseX >= 0 && mouseX <= 67 && mouseY >= 1 && mouseY <= 66) {
                pantalla = 3;
            }
            break;
        case 2:
            // BOTÓN REGISTRO VOLVER 
            if (mouseX >= 0 && mouseX <= 67 && mouseY >= 1 && mouseY <= 66) {
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
            if (mouseX >= 159 && mouseX <= 214 && mouseY >= 551 && mouseY <= 608) {
                pantalla = 1;
                emailInput.hide();
                createPassword.hide();
                nombreInput.hide();
            }
            break;
        case 3:
            //BOTÓN FACTURA
            if (mouseX >= 0 && mouseX <= 264 && mouseY >= 14 && mouseY <= 90) {
                pantalla = 9;
            }
            //DEVOLVER MENÚ
            if (mouseX >= 265) {
                pantalla = 1;
            }
            //BOTÓN IR AL HISTORIAL DE PEDIDO
            if (mouseX >= 0 && mouseX <= 266 && mouseY >= 96 && mouseY <= 162) {
                pantalla = 10;
            }
            //BOTÓN CERRAR SESIÓN
            if (mouseX >= 2 && mouseX <= 257 && mouseY >= 196 && mouseY <= 261) {
                pantalla = 0;
                userInput = createInput('');
                passwordInput = createInput('', 'password');
                userInput.position(66, 405);
                userInput.size(255, 15);
                passwordInput.position(66, 480);
                passwordInput.size(255, 15);
            }
            break;
        case 4:
            //BOTÓN DEVOLVER SANDWICH CRIOLLO
            if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59) {
                pantalla = 1;
                plato1.cantidad = 0;
                plato2.cantidad = 0;
                plato3.cantidad = 0;
                plato4.cantidad = 0;
            }

            //INCREMENTAR CANTIDAD DE SANDWICH CRIOLLO
            if (mouseX >= 230 && mouseX <= 271 && mouseY >= 485 && mouseY <= 532) {
                plato1.cantidad++;
            }
            //DISMINUCIÓN CANTIDAD DE SANDWICH CRIOLLO
            if (mouseX >= 103 && mouseX <= 145 && mouseY >= 501 && mouseY <= 513) {
                plato1.cantidad--;
            }
            if (plato1.cantidad < 0) {
                plato1.cantidad = 0;
            }
            //BOTÓN COMPRAR SANDWICH CRIOLLO
            if (mouseX >= 147 && mouseX <= 226 && mouseY >= 631 && mouseY <= 692) {
                pantalla = 11;
            }
            break;
        case 5:
            //BOTÓN DEVOLVER SANDWICH CUBANO
            if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59) {
                pantalla = 1;
                plato1.cantidad = 0;
                plato2.cantidad = 0;
                plato3.cantidad = 0;
                plato4.cantidad = 0;
            }
            //INCREMENTAR CANTIDAD DE SANDWICH CUBANO
            if (mouseX >= 230 && mouseX <= 271 && mouseY >= 485 && mouseY <= 532) {
                plato2.cantidad++;
            }
            //DISMINUIR CANTIDAD DE SANDWICH CUBANO
            if (mouseX >= 103 && mouseX <= 145 && mouseY >= 501 && mouseY <= 513) {
                plato2.cantidad--;
            }
            if (plato2.cantidad < 0) {
                plato2.cantidad = 0;
            }
            //BOTÓN COMPRAR SANDWICH CUBANO
            if (mouseX >= 147 && mouseX <= 226 && mouseY >= 631 && mouseY <= 692) {
                pantalla = 11;
            }
            break;
        case 6:
            //BOTÓN DEVOLVER SANDWICH ITALIANO
            if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59) {
                pantalla = 1;
                plato1.cantidad = 0;
                plato2.cantidad = 0;
                plato3.cantidad = 0;
                plato4.cantidad = 0;
            }
            //INCREMENTAR CANTIDAD DE SANDWICH ITALIANO
            if (mouseX >= 230 && mouseX <= 271 && mouseY >= 485 && mouseY <= 532) {
                plato3.cantidad++;
            }
            //DISMINUIR CANTIDAD DE SANDWICH ITALIANO
            if (mouseX >= 103 && mouseX <= 145 && mouseY >= 501 && mouseY <= 513) {
                plato3.cantidad--;
            }
            if (plato3.cantidad < 0) {
                plato3.cantidad = 0;
            }
            //BOTÓN COMPRAR SANDWICH ITALIANO
            if (mouseX >= 147 && mouseX <= 226 && mouseY >= 631 && mouseY <= 692) {
                pantalla = 11;
            }
            break;
        case 7:
            //BOTÓN DEVOLVER SANDWICH VEGETARIANO
            if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59) {
                pantalla = 1;
                plato1.cantidad = 0;
                plato2.cantidad = 0;
                plato3.cantidad = 0;
                plato4.cantidad = 0;
            }
            //INCREMENTAR CANTIDAD DE SANDWICH VEGETARIANO
            if (mouseX >= 230 && mouseX <= 271 && mouseY >= 485 && mouseY <= 532) {
                plato4.cantidad++;
            }
            //DISMINUIR CANTIDAD DE SANDWICH VEGETARIANO
            if (mouseX >= 103 && mouseX <= 145 && mouseY >= 501 && mouseY <= 513) {
                plato4.cantidad--;
            }
            if (plato4.cantidad < 0) {
                plato4.cantidad = 0;
            }
            //BOTÓN COMPRAR SANDWICH VEGETARIANO
            if (mouseX >= 147 && mouseX <= 226 && mouseY >= 631 && mouseY <= 692) {
                pantalla = 11;
            }
            break;
        case 8:
            break;
        case 9:
            //BOTÓN DEVOLVER CERRAR SESIÓN
            if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59) {
                pantalla = 1;
            }
            //BOTÓN CERRAR DEFINITIVAMENTE SESIÓN
            if (mouseX >= 161 && mouseX <= 224 && mouseY >= 533 && mouseY <= 589) {
                pantalla = 0;
                userInput = createInput('');
                passwordInput = createInput('', 'password');
                userInput.position(66, 405);
                userInput.size(255, 15);
                passwordInput.position(66, 480);
                passwordInput.size(255, 15);
            }
            break;
        case 10:
            //BOTÓN DEVOLVER HISTORIAL DE PEDIDO
            if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59) {
                pantalla = 1;
            }
            break;
        case 11:
            //BOTÓN SÍ ADICIONES 
            if (mouseX >= 230 && mouseX <= 280 && mouseY >= 434 && mouseY <= 472) {
                pantalla = 13;
            }

            //BOTÓN NO  ADICIONES
            if (mouseX >= 93 && mouseX <= 140 && mouseY >= 431 && mouseY <= 476) {
                pantalla = 15;
            }
            break;
        case 12:
            break;
        case 13:
            //BOTÓN DEVOLVER ADICIONES
            if (mouseX >= 22 && mouseX <= 66 && mouseY >= 24 && mouseY <= 61) {
                pantalla = 1;
            }
            //INCREMENTAR CANTIDAD DE ADICIONES PAN INTEGRAL
            if (mouseX >= 290 && mouseX <= 313 && mouseY >= 320 && mouseY <= 345) {
                adicion1.cantidad++;
            }
            //DISMINUIR CANTIDAD DE ADICIONES DE PAN INTEGRAL
            if (mouseX >= 216 && mouseX <= 241 && mouseY >= 328 && mouseY <= 339) {
                adicion1.cantidad--;
            }
            if (adicion1.cantidad < 0) {
                adicion1.cantidad = 0;
            }
            //INCREMENTAR CANTIDAD DE ADICIONES PAN COMUN
            if (mouseX >= 291 && mouseX <= 314 && mouseY >= 382 && mouseY <= 405) {
                adicion2.cantidad++;
            }
            //DISMINUIR CANTIDAD DE ADICIONES PAN COMUN
            if (mouseX >= 218 && mouseX <= 240 && mouseY >= 388 && mouseY <= 395) {
                adicion2.cantidad--;
            }
            if (adicion2.cantidad < 0) {
                adicion2.cantidad = 0;
            }
            //INCREMENTAR CANTIDAD DE ADICIONES TOMATE
            if (mouseX >= 291 && mouseX <= 316 && mouseY >= 441 && mouseY <= 464) {
                adicion3.cantidad++;
            }
            //DISMINUIR CANTIDAD DE ADICIONES TOMATE
            if (mouseX >= 217 && mouseX <= 241 && mouseY >= 447 && mouseY <= 459) {
                adicion3.cantidad--;
            }
            if (adicion3.cantidad < 0) {
                adicion3.cantidad = 0;
            }
            //INCREMENTAR CANTIDAD DE ADICIONES QUESO
            if (mouseX >= 290 && mouseX <= 314 && mouseY >= 502 && mouseY <= 523) {
                adicion4.cantidad++;
            }
            //DISMINUIR CANTIDAD DE ADICIONES QUESO
            if (mouseX >= 216 && mouseX <= 240 && mouseY >= 501 && mouseY <= 515) {
                adicion4.cantidad--;
            }
            if (adicion4.cantidad < 0) {
                adicion4.cantidad = 0;
            }
            //INCREMENTAR CANTIDAD DE ADICIONES SALSAS
            if (mouseX >= 292 && mouseX <= 316 && mouseY >= 561 && mouseY <= 582) {
                adicion5.cantidad++;
            }
            //DISMINUIR CANTIDAD DE ADICIONES SALSAS
            if (mouseX >= 216 && mouseX <= 242 && mouseY >= 563 && mouseY <= 573) {
                adicion5.cantidad--;
            }
            if (adicion5.cantidad < 0) {
                adicion5.cantidad = 0;
            }
            //INCREMENTAR CANTIDAD DE ADICIONES PROTEÍNAS
            if (mouseX >= 291 && mouseX <= 314 && mouseY >= 619 && mouseY <= 640) {
                adicion6.cantidad++;
            }
            //DISMINUIR CANTIDAD DE ADICIONES PROTEÍNAS
            if (mouseX >= 216 && mouseX <= 240 && mouseY >= 625 && mouseY <= 633) {
                adicion6.cantidad--;
            }
            if (adicion6.cantidad < 0) {
                adicion6.cantidad = 0;
            }
            //BOTÓN CONTINUAR ADICIONES
            if (mouseX >= 129 && mouseX <= 249 && mouseY >= 732 && mouseY <= 768) {
                pantalla = 15;
            }
            break;
        case 14:
            break;
        case 15:
            //DEVOLVER PAGO
            if (mouseX >= 22 && mouseX <= 66 && mouseY >= 24 && mouseY <= 61) {
                pantalla = 1;
            }
            //BOTÓN EFECTIVO
            if (mouseX >= 64 && mouseX <= 303 && mouseY >= 201 && mouseY <= 376) {
                pantalla = 16;
            }
            //BOTÓN TARJETA
            if (mouseX >= 69 && mouseX <= 305 && mouseY >= 478 && mouseY <= 657) {
                pantalla = 17;
            }
            break;
        case 16:
            //DEVOLVER PAGO EFECTIVO
            if (mouseX >= 22 && mouseX <= 66 && mouseY >= 24 && mouseY <= 61) {
                pantalla = 15;
            }
            //BOTON CONTINUAR EFECTIVO
            if (mouseX >= 128 && mouseX <= 248 && mouseY >= 694 && mouseY <= 734) {
                pantalla = 18;
            }
            break;
        case 17:
            //DEVOLVER PAGO TARJETA
            if (mouseX >= 22 && mouseX <= 66 && mouseY >= 24 && mouseY <= 61) {
                pantalla = 15;
            }
            //BOTÓN CONTINUAR TARJETA
            if (mouseX >= 128 && mouseX <= 248 && mouseY >= 694 && mouseY <= 734) {
                pantalla = 18;
            }
            break;
        case 18:
            //BOTON CONTINUAR DIRECCION
            if (mouseX >= 165 && mouseX <= 205 && mouseY >= 582 && mouseY <= 632) {
                pantalla = 19;
            }
            //BOTON CONTINUAR DIRECCION
            if (mouseX >= 165 && mouseX <= 205 && mouseY >= 582 && mouseY <= 632) {
                pantalla = 19;
            }
            break;
        case 19:
            //BOTÓN CERRAR FACTURA
            if (mouseX >= 320 && mouseX <= 340 && mouseY >= 70 && mouseY <= 93) {
                pantalla = 1;
            }
            break;
        default:
            break;
    }
}



// alt shift f  para acomodar las lineas de código