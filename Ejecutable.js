
let pantalla;
let inicio, acompa, acompaNumero, adiciones, alerta1, alerta2, cerrarSesion, confirmarDir, efectivo, pago, factura,
    historialPedido, menu, menuH, papitas, registro, sCriollo, sVegetariano, sQubano, sItaliano, tarjeta;

function preload() {
    inicio = loadImage("data/inicio.jpg");
    acompa = loadImage("data/Acompa.jpg");
    acompaNumero = loadImage("data/AcompaNumero.jpg");
    adiciones = loadImage("data/Adiciones.jpg");
    alerta1 = loadImage("data/Alerta1.jpg");
    alerta2 = loadImage("data/Alerta2.jpg");
    cerrarSesion = loadImage("data/CerrarSesion.jpg");
    confirmarDir = loadImage("data/ConfirmarDir.jpg");
    efectivo = loadImage("data/Efectivo.jpg");
    pago = loadImage("data/Pago.jpg");
    factura = loadImage("data/Factura.jpg");
    historialPedido = loadImage("data/HistorialPedido.jpg");
    menu = loadImage("data/Menu.jpg");
    menuH = loadImage("data/MenuHamburguesa.jpg");
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


}
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


            break;


        case 1:

            //PANTALLA Menu
            image(menu, 0, 0);
            
            break;


        case 2:

            //PANTALLA Registro
            image(registro, 0, 0);
            break;

        case 3:

            //PANTALLA MENU HAMBURGUES
            image(menuH, 0, 0);
            break;

        case 4:

            //PANTALLA SANDWICH

            break;


        case 5:

            //PANTALLA ALERTA ADICIONES
            break;

        case 6:

            //PANTALLA ALERTA ACOMPAÑAMIENTOS
            break;

        case 7:

            //PANTALLA PAGO
            break;
        case 8:

            //PANTALLA FACTURA
            break;
        case 9:

            //PANTALLA CERRAR SESION
            break;

        case 10:

            //PANTALLA HISTORIAL PEDIDO
            break;


    }

}

function mousePressed() {
    print(mouseX + " " + mouseY + " \n");
    //BOTÓN ENTRAR 
    if (mouseX >= 90 && mouseX <= 282 && mouseY >= 543 && mouseY <= 589 && pantalla == 0) {
        cursor(HAND);
        pantalla = 1;


    }
    //BOTÓN MENÚ HAMBURGUESA
   if (mouseX >= 0 && mouseX <= 67 && mouseY >= 1 && mouseY <= 66 && pantalla == 1) {
        cursor(HAND);
        pantalla = 3;


    }
  // BOTÓN REGISTRO
    if (mouseX >= 124 && mouseX <= 246 && mouseY >= 623 && mouseY <= 646 && pantalla == 0 ) {
        cursor(HAND);
        pantalla = 2;


    }
  // BOTÓN REGISTRO VOLVER MENU
    if (mouseX >= 0 && mouseX <= 67 && mouseY >= 1 && mouseY <= 66 && pantalla == 2) {
        cursor(HAND);
        pantalla = 1 ;


    }

}

// alt shift f  para acomodar las lineas de código
