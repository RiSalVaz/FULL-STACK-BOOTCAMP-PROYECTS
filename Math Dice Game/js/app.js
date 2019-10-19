var jugar="";
var dado=[];
var dadoDoce;
var resultado;
var valoresPlayer;
do{
   //saca por pantalla los resultados arrojados por todos los dados, los 5 de colores y el blanco
   
        dado.push(tirarDados(dadoRojo.numValores));
        dado.push(tirarDados(dadoAmarillo.numValores));
        dado.push(tirarDados(dadoAzul.numValores));
        dadoDoce=(tirarDados(dadoBlanco.numValores));
        dado.push(tirarDados(dadoMorado.numValores));
        dado.push(tirarDados(dadoVerde.numValores));
   
    
        for (let i=0;i<5;i++){

            console.log("Dado nº " + [i+1] + " : " + dado[i]);
    
        }
        console.log("Dado blanco: " + dadoDoce);

    /*SI SE QUITA EL COMENTARIO DE LAS TRES LINEAS DE CODIGO SIGUIENTES NO ME
    APARECE NADA POR CONSOLA Y ME ES IMPOSIBE DEBUGUEAR, A QUE ES DEBIDO?LE HE DADO MILES DE VUELTAS
    Y NO CONSIGO ENCONTRAR LA CAUSA*/
    
    valoresPlayer=pedirNumeros(dado);//almacena en la variable valoresPlayer un array con todos los valores introducidos por el jugador
    console.log(resultadoJuego(valoresPlayer,dadoDoce));
    jugar=prompt("Quieres seguir jugando? s/n");
    console.clear();
}while(jugar!="n" && jugar=="s");


