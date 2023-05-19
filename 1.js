let numeros = [20,-3,57,-11,42,-98];
let positivos = 0;

for(let i = 0; i <= numeros.length; i++){
    if(numeros[i] > 0){
        positivos += 1
    }
}

console.log("La cantidad de números positivos dentro del array es de " + positivos);