document.getElementById("seccion1").style.display="none";
document.getElementById("seccion3").style.display="none";
document.getElementById("seccion4").style.display="none";

function pantallaSeleccion(){
    document.getElementById("seccion2").style.display="none";
    document.getElementById("seccion4").style.display="grid";
    document.body.style.backgroundImage = "url(imagenes/pantalla2.png)";
    
}

function pantallaCombate(){
    document.body.style.backgroundImage = "url(imagenes/pantalla3.jpg)";
    document.getElementById("seleccionPersonajes").style.display="none";
    document.getElementById("seccion1").style.display="flex";
    document.getElementById("seccion2").style.display="grid";
    document.getElementById("seccion3").style.display="grid";
    document.getElementById("botonJugar").style.display="none";
    document.getElementById("botonComenzarJugar").style.display="none";
}

