let alumno1 = {
    name: "Alejandro",
    Age: 21,
}

let alumno2 = {
    name: "Santiago",
    Age: 18,
}

let alumnos = [alumno1,alumno2];
let mayor = "";
let alumnoMayor = 0;

alumnos.forEach((alumno) => {
    if(alumnoMayor < alumno.Age){
        alumnoMayor = alumno.Age;
    }
    if(alumno.Age == alumnoMayor){
        mayor = alumno.name;   
    }
});


console.log(`El nombre del alumno de mayor edad es ${mayor}`);