do{
    var opcion;
    var buscarMas;
    do{
      opcion=prompt("Que gestion deseas hacer? \n 1: Introducir datos de alumno \n 2: Visualizar datos de alumno.\n 3: Salir");
    
    }while(opcion !=='1' && opcion!=='2' && opcion!=='3');
  

    switch(opcion){
        case '1': 
            window.open("html/introducirDatos.html");
            alumno.introducirDatos();
            break;
        case '2': 
            alumno.visualizarDatos();
            break;
        case '3':
            break;

        default:
                
    }

   
    buscarMas=prompt("Deseas hacer otra gestion? s/n")
}while(buscarMas==='s' || buscarMas==='S' && buscarMas!=='n' && buscarMas!=='N');