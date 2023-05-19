import PromptSync from "prompt-sync";
const prompt = PromptSync();

let cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas: "));
let sumaEdades = 0;
let contador = 0;

for(let i = 0; i < cantidadPersonas; i++){
    
    let anioNacimiento = parseInt(prompt("Ingrese el año de nacimiento: "));
    if (anioNacimiento >= 1981 && anioNacimiento <= 1999) {
        let edad = 2023 - anioNacimiento;
        sumaEdades = sumaEdades + edad;
        contador+=1;
    }
}
let promedioEdades = sumaEdades / contador;
console.log("El promedio de edad de los millenials es: " + promedioEdades);
