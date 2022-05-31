var estudiantes = ["Maria", "Barbara", "Natalia", "Eliezer"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`); 
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

/* paso a paso*/

var estudiantes = ["Maria", "Barbara", "Natalia", "Eliezer"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`); 
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}



