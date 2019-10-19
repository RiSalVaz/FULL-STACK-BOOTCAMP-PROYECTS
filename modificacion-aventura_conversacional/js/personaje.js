
var personaje={
    icono:"P",
    x:-1,
    y:-1,
    vida:1,
    nombre:"",
    suerte: Math.floor((Math.random()*10+1)) ,
    iniciarPosicion(x,y){
        this.x=x;
        this.y=y;
    }
}

 