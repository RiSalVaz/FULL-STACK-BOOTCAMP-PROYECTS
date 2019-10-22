var alumno={
    nombre: "",
    
    apellidos: "",
    
    curso: "",
    
    calificaciones: [],

    observaciones: "Alumno muy aplicado, proactivo, con gran capadicad de aprendizaje y facilidad para trabajar en equipo.",
    
    visualizarDatos (){
        window.open("html/visualizarDatos.html");
        document.getElementById('nombre').write=alumno.nombre;
        document.getElementById('apellidos').write = alumno.apellidos;
        document.getElementById('curso').write=alumno.curso;
        document.getElementById('observaciones').write=alumno.observaciones;
        for(var i = 0 ; i < 6 ; i++){
            document.getElementById('nota'+(i+1)).write=alumno.calificaciones[i];
        }
    },
    salvarDatos(){
        alumno.nombre=document.getElementById('dameNombre').value;
        alumno.apellidos=document.getElementById('dameApellidos').value;
        alumno.curso=document.getElementById('dameCurso').value;
        alumno.observaciones=document.getElementById('dameObservaciones').value;
        for(var i = 0 ; i < 6 ; i++){
            alumno.calificaciones[i]= document.getElementById('dameNota'+(i+1)).value;
        }
    },
    introducirDatos(){
        
        const guardarDatos=document.querySelector('.guardarDatos');
        if(guardarDatos){
            guardarDatos.addEventListener('click',salvarDatos);
        }
    }

}