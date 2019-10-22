
var numCorrecto=true;
var numRandom=Math.floor(Math.random(10+1));
console.log(numRandom);
do{
    var numAleatorio=prompt(parseInt("dime un numero entre 1 y 10"));
    if(numAleatorio < 1 && numAleatorio >10){
        document.write("<p>el numero introducido es erroneo</p>");
        numCorrecto=false;
    }
    else{
        numCorrecto=true
    }
}while(numCorrecto==false)

