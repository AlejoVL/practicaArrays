const array1 = [4,5,1,3]
const array2 = [1,2,6]

let minLength = Math.min(array1.length, array2.length);
let maxLength = Math.max(array1.length, array2.length);

let minArray = []
let maxArray = []
let newArray = []

if(array1.length > maxLength){
    maxArray = array1;
    minArray = array2;
} else{
    maxArray = array2;
    minArray = array1;
}

for(let i = 0; i < minLength; i++){
    newArray.push(maxArray[i] + minArray[i]);
}

for(let j = minLength; j <= maxLength - 1; j++){
    newArray.push(maxArray[j]);
}

console.log(newArray);