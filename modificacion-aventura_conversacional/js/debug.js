//iniciamos habitacion
habitacion.iniciarDimensiones(5,5);
habitacion.rellenarMapaVacio();
//iniciamos personaje
personaje.iniciarPosicion(2,4);
habitacion.colocarElm(personaje.x,personaje.y,personaje.icono);
habitacion.pintarMapa();
//iniciamos la trampa
habitacion.colocarElm(trampa.ejx,trampa.ejy,trampa.pincho);

var accion="";
while(accion!="X"){
    accion=prompt();
    habitacion.moverJugador(accion,personaje,trampa);
    habitacion.pintarMapa();
        
}
