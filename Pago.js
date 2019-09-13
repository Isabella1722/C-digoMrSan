class Pago {
    constructor(costoTotal,monto) {
        this.costoTotal = costoTotal;
        this.monto = monto;
    }
    pagoRecibido (){
        
        if(costoTotal>monto){
       Text("Pago sin éxito",250,520);


        }else{
        Text("Pago éxitoso",300,520);

        }
    
    }


}