//esta funcion pasa el array con los valores que han salido de todos los dados de colores y los compara 
//con los valores introducidos por el jugador para verificar que son valores validos.
function juego(valorDados,dadoObjetivo){


let operacionIntroducida = '';
let valoresValidos=["1","2","3","4","5","6"];
let arrayIntroducidos=[];
let arrayValido=[];
let resultado=0;
do{
    //operacionIntroducida=prompt("INTRODUCE UNA OPERACION QUE SU RESULTADO SEA:  " + dadoObjetivo);
    console.log(operacionIntroducida);
    if(arrayValido.length > valorDados.lenght){
        //operacionIntroducida=prompt("HAS INTRODUCIDO DEMASIADOS VALORES O ALGUNOS SON INCORRECTOS");
    }

    arrayIntroducidos=operacionIntroducida.split('');
    console.log(arrayIntroducidos);
 
    console.log(valoresValidos)
    arrayValido=arrayIntroducidos.filter(item => valoresValidos.includes(item) );
    console.log(valorDados.length);
    
}while(arrayValido.length>valorDados.length);   

console.log(eval(operacionIntroducida));
resultado=eval(operacionIntroducida);
return resultado;
}   
