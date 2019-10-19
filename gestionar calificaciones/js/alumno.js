var alumno={
    nombre: "Ricardo",
    
    apellidos: "Salas",
    
    curso: 2,
    
    calificaciones: [8,6,5.5,7,6,8],
    
    visualizarDatos(){
        document.getElementById('nombre').value=this.nombre;
        document.getElementById('apellidos').value = this.apellidos;
        document.getElementById('curso').value=this.curso;
        for(var i = 0 ; i < 6 ; i++){
            document.getElementById('nota'+(i+1)).value=this.calificaciones[i];
        }
    }
    
}