
let pantalla;
let inicio;
let xd;
let cas;
let cap;

function preload() {
    inicio = loadImage("data/inicio.jpg")
}

function setup() {
    createCanvas(375, 812);


}
function draw() {
    background(0);
    image(inicio, 0, 0);
    switch (pantalla){

        
    }

}

function mousePressed() {
    print(mouseX + " " + mouseY + " \n");
    //BOTÓN INSTRUCCIONES
    if (mouseX >= 90 && mouseX <= 282 && mouseY >= 543 && mouseY <= 589) {
 
      pantalla = 1;
 
    }

}

// alt shift f  para acomodar las lineas de código
