let juego={
    player1:[],
 
    player2:[],

    contrincantes:[],
    
    crearEquipos(person){
        
    if(this.player1.length < 3 )
    {
        switch(person){
            case 'johnnyCage':
                johnnyCage = new personaje('Johnny Cage', 15 ,7 ,3);
                this.player1.push(johnnyCage);
                document.getElementById("boton1").style.display="none";
                   
                break
            case 'shangTsung':
                shangTsung= new personaje('Shang Tsung',17 ,7 ,1);   
                this.player1.push(shangTsung);
                document.getElementById("boton2").style.display="none";
                
                break
            case 'liuKang':
                liuKang= new personaje('Liu Kang',9 ,7 ,5);  
                this.player1.push(liuKang);
                document.getElementById("boton3").style.display="none";
                
                break
            case 'reptile':
                reptile= new personaje('Reptile',15 ,7 ,3);      
                this.player1.push(reptile);
                document.getElementById("boton4").style.display="none";
                
            break
            case 'raiden':
                raiden= new personaje('Raiden', 16 ,6 ,4);   
                this.player1.push(raiden);
                document.getElementById("boton5").style.display="none";
                 
                break
            case 'baraka':
                baraka= new personaje('Baraka', 18 ,8 ,2);   
                this.player1.push(baraka);
                document.getElementById("boton6").style.display="none";
                
            break
            case 'scorpion':
                scorpion= new personaje('Scorpion',20 ,5 ,1);   
                this.player1.push(scorpion);
                document.getElementById("boton7").style.display="none";
                
                break
            case 'kano':
                kano=new personaje('kano',19 ,8 ,8); 
                this.player1.push(kano);
                document.getElementById("boton8").style.display="none";
               
                break
            case 'kitana':
                kitana= new personaje('Kitana', 20 ,5 ,1);
                this.player1.push(kitana);
                document.getElementById("boton9").style.display="none";
                
                break
            case 'sonyaBlade':
                sonyaBlade= new personaje('Sonya Blade', 12 ,9 ,5);
                this.player1.push(sonyaBlade);
                document.getElementById("boton10").style.display="none";
               
                break
            default:
            console.log("ha habido un error en la seleccion de player1");
            

    }
    }else if(this.player2.length < 3){
        switch(person){
            case 'johnnyCage':
                johnnyCage = new personaje('Johnny Cage', 15 ,7 ,3);
                this.player2.push(johnnyCage);
                document.getElementById("boton1").style.display="none";
               break
            case 'shangTsung':
                shangTsung= new personaje('Shang Tsung',17 ,7 ,1); 
                this.player2.push(shangTsung);
                document.getElementById("boton2").style.display="none";
                  
                break
            case 'liuKang':
                liuKang= new personaje('Liu Kang',9 ,7 ,5);  
                this.player2.push(liuKang);
                document.getElementById("boton3").style.display="none";
                
                break
            case 'reptile':
                reptile= new personaje('Reptile',15 ,7 ,3);
                this.player2.push(reptile);
                document.getElementById("boton4").style.display="none";
                      
                break
            case 'raiden':
                raiden= new personaje('Raiden', 16 ,6 ,4);  
                this.player2.push(raiden);
                document.getElementById("boton5").style.display="none";
                  
                break
            case 'baraka':
                baraka= new personaje('Baraka', 18 ,8 ,2);   
                this.player2.push(baraka);
                document.getElementById("boton6").style.display="none";
                
                break
            case 'scorpion':
                scorpion= new personaje('Scorpion',20 ,5 ,1); 
                this.player2.push(scorpion);
                document.getElementById("boton7").style.display="none";
                  
                break
            case 'kano':
                kano=new personaje('kano',19 ,8 ,8); 
                this.player2.push(kano);
                document.getElementById("boton8").style.display="none";
                
                break
            case 'kitana':
                kitana= new personaje('Kitana', 20 ,5 ,1);
                this.player2.push(kitana);
                document.getElementById("boton9").style.display="none";
                
                break
            case 'sonyaBlade':
                sonyaBlade= new personaje('Sonya Blade', 12 ,9 ,5);
                this.player2.push(sonyaBlade);
                document.getElementById("boton10").style.display="none";
                
                break
            default:
                console.log("ha habido un error en seleccion player2");
               
    
        }
    }else{console.log("no se pueden seleccionar mas personajes")}  
        this.contrincantes.push(this.player1);
        this.contrincantes.push(this.player2);
        console.log(this.contrincantes);
    },

    


    pantallaCombate(){
        console.log(this.player1.length);
        console.log(this.player2.length);
        if(this.player1.length < 3 && this.player2.length < 3){
            alert("selecciona 3 personajes por jugador")
            pantallaSeleccion()
        }else{
        console.log("entra aqui");
        let turno;
        let contador1=0;
        let contador2=0;
        let tiempoAtaque=5000;
        //console.log(this.contrincantes);
        do{
            
            console.log(`vida de player1: ${this.player1[0].vida} ------------------- vida de player2: ${this.player2[0].vida}`)
            turno=Number(Math.floor(Math.random()*2+1));
    
            console.log("el turno es del jugador: player"+turno)
    
            if (turno == 1){
                contador1++;
                
                this.player2[0].vida = this.player1[0].atacar(this.player2[0]);
                console.log(`ha atacado player1 y ha hecho ${this.player1[0].danho-this.player2[0].armadura} puntos de daño`)
                console.log("la vida de player2 ahora es de " + this.player2[0].vida);
               

            }else if(turno == 2){
                contador2++;
                
                this.player1[0].vida = this.player2[0].atacar(this.player1[0]);
                console.log(`ha atacado player2 y ha hecho ${this.player2[0].danho-this.player1[0].armadura} puntos de daño`)
                console.log("la vida de player1 ahora es de "+ this.player1[0].vida);
              
            }
            
    

        }while(this.player1[0].vida > 0 && this.player2[0].vida > 0)
        console.log("----------------------------");
        if(this.player1[0].vida<=0){
            console.log(`HA GANADO player2`);
        }else if(this.player2[0].vida<=0){
            console.log(`HA GANADO player1`);
        }
        console.log("player1 ha atacado "+contador1+" veces");

        console.log("player2 ha atacado "+contador2+" veces");


    }

    }
}