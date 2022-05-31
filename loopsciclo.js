var estudiantes = ["Maria", "Barbara", "Natalia", "Eliezer"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`); 
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

/* alt una comilla invertida alt+96*/

/* otra manera */

var estudiantes = ["Maria", "Barbara", "Natalia", "Eliezer"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`); 
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}