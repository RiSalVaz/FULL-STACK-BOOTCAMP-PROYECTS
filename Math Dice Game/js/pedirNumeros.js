//esta funcion pasa el array con los valores que han salido de todos los dados de colores y los compara 
//con los valores introducidos por el jugador para verificar que son valores validos.
function pedirNumeros(valorDados){

var arrayNumeros=[];
var numeroIntroducido;
var seguir="s";

    do{
        numeroIntroducido=parseInt(prompt("INTRODUCE EL VALOR DE UNO DE LOS DADOS PARA LLEGAR A SUMAR " + dadoDoce));
        if(valorDados.indexOf(numeroIntroducido)==-1){
            do{

            numeroIntroducido = parseInt(prompt("EL VALOR INTRODUCIDO NO CORRESPONDE CON NINGUNO DE LOS DADOS, INTRODUCE UN NUMERO VALIDO. " + dadoDoce)); 

            }while(valorDados.indexOf(numeroIntroducido)==-1);
        }else{
            arrayNumeros.push(numeroIntroducido);
         seguir=prompt("QUIERES SEGUIR INTRODUCIENDO NUMEROS? s/n");
        }
         
        }while(seguir==="s" && seguir!=="n");
             
    return arrayNumeros;
    } 