//esta funcion comprueba que la suma de los valores introducidos corresponda con el resultado del dado blanco de 12 caras
function resultadoJuego(valPlay,doce){
    var sumaTotal=0;
    for(i=0;i<valPlay.length;i++){
            console.log("tu " + (i+1) + "º numero elegido: " +  valPlay[i]);
            sumaTotal=sumaTotal+valPlay[i];
         }
         console.log("suma de tus valores elegidos: " + sumaTotal);
         console.log(sumaTotal + " ***=*** " + doce)

         if (sumaTotal==doce){

           return "ACERTASTE, CONSEGUISTE SUMAR EL VALOR DEL DADO BLANCO. ENHORABUENA!!!!!";
        }
         else{
            return "FALLASTE, COMETISTE UN ERROR EN LA SUMA, " + sumaTotal + " NO ES IGUAL QUE " + doce + " . VUELVE A INTENTARLO SI QUIERES";
        }
}