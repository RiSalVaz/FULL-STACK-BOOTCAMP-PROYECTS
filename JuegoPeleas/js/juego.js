let juego={
    player1:["","",""],

    player2:["","",""],
    
    crearEquipos(person){
        console.log("entra aqui")
    johnnyCage = new personaje('Johnny Cage', 15 ,7 ,3);      
    shangTsung= new personaje('Shang Tsung',17 ,7 ,1);   
    liuKang= new personaje('Liu Kang',9 ,7 ,5);   
    reptile= new personaje('Reptile',15 ,7 ,3);      
    raiden= new personaje('Raiden', 16 ,6 ,4);    
    baraka= new personaje('Baraka', 18 ,8 ,2);   
    scorpion= new personaje('Scorpion',20 ,5 ,1);   
    kano=new personaje('kano',19 ,8 ,8);  
    kitana= new personaje('Kitana', 20 ,5 ,1);
    sonyaBlade= new personaje('Sonya Blade', 12 ,9 ,5);
    console.log(this.player1.lenght);
    if(this.player1.length<3){
       this.player1.push(person);
    }else if(this.player2.length<3){
        this.player2.push(person);
    }else{
        //this.jugar();
        console.log(this.player1);
         //this.jugar();
         console.log(this.player2);
    }
    
      
    },

    


    jugar(){
       
        
        
        let turno;
        player1= new personaje(30,30);
        player2= new personaje(40,25);
        let contador1=0;
        let contador2=0;
        do{
            console.log(`vida de player1: ${player1.vida} ------------------- vida de player2: ${player2.vida}`)
            turno=Number(Math.floor(Math.random()*2+1));
    
            console.log("el turno es del jugador: player"+turno)
    
            if (turno == 1){
                contador1++;
                player2.vida = player1.atacar(player2);
                console.log(`ha atacado player1 y ha hecho ${player1.daño-player2.armadura} puntos de daño`)
                console.log("la vida de player2 ahora es de " +player2.vida);

            }else if(turno == 2){
                contador2++;
                player1.vida = player2.atacar(player1);
                console.log(`ha atacado player2 y ha hecho ${player2.daño-player1.armadura} puntos de daño`)
                console.log("la vida de player1 ahora es de "+player1.vida);

            }
            


        }while(player1.vida > 0 && player2.vida > 0)
        console.log("----------------------------");
        if(player1.vida<=0){
            console.log(`HA GANADO player2`);
        }else if(player2.vida<=0){
            console.log(`HA GANADO player1`);
        }
        console.log("player1 ha atacado "+contador1+" veces");

        console.log("player2 ha atacado "+contador2+" veces");


    }

}