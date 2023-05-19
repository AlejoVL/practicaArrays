const temperaturas = [25,30,28,32,29,27];
let mayor = 25;

for(let i = 0; i <= temperaturas.length; i++){
    if(temperaturas[i] > mayor){
        mayor = temperaturas[i];
    }
}

console.log("La temperatura mayor dentro del arreglo es " + mayor)