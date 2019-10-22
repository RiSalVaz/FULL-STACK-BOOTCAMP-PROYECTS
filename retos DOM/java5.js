

const numRandom=Math.floor(Math.random()*(10+1));
console.log(numRandom);
var numAciertos=0;
var numIntentos=0;
var ganador=document.getElementById("resultado");
var introduce=document.getElementById("introducir");

var numAleatorio;

console.log(numAleatorio);


    function comprobarResultado(){
        numAleatorio=parseInt(introduce.value);
        //console.log("HAS INTRODUCIDO: " + numAleatorio);
         if(numRandom==numAleatorio){
                //console.log("has acertado ");
                ganador.innerHTML="HAS GANANDO";
                
            }else{
                //console.log("has fallado ");
        
           }
       }

    
document.write('numero de intentos ='+numIntentos);

