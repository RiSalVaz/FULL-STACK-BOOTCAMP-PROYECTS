


   //saca por pantalla los resultados arrojados por todos los dados, los 5 de colores y el blanco
  function jugada(){
    let dado=[];
    let dadoDoce;
    let valoresPlayer;
    

        dado.push(Math.floor(Math.random()*3+1));
        dado.push(Math.floor(Math.random()*3+1));
        dado.push(Math.floor(Math.random()*3+1));
        dado.push(Math.floor(Math.random()*6+1));
        dado.push(Math.floor(Math.random()*6+1));
        dadoDoce=(Math.floor(Math.random()*12+1));
  
        
        for (let i=1;i<6;i++){

            document.getElementById("valor"+i).innerHTML="resultado: " + dado[i-1];
            document.getElementById("dado"+i).src="dados/"+i+dado[i-1]+".png";
            
        }
        document.getElementById("valorDadoObjetivo").innerHTML="objetivo: " + dadoDoce;
        document.getElementById("dadoObjetivo").src="dados/dadoBlanco"+dadoDoce+".png";
        


    
     this.valoresPlayer=juego(dado,dadoDoce);//almacena en la variable valoresPlayer un array con todos los valores introducidos por el jugador
    
  }


