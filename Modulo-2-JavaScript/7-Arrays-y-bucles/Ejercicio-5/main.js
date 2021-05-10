'use strict';

/* PRIMERA PARTE DEL EJERCICIO

let numbers = [3, 5, 1, 8, 9];

let acc = 0;

for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i]/5;
}

console.log('La media es ' + acc);*/


/* SEGUNDA PARTE DEL EJERCICIO
let numbers2 = [3, 5, 1, 8, 9, 2];

let acc2 = 0;

for (let i = 0; i < numbers2.length; i++) {
    acc2 += numbers2[i]/6;
}

console.log('La media es ' + acc2);*/

let numbers = [3, 5, 1, 8, 9];
let acc = 0;

function average(numbers){
    for (let i = 0; i<numbers.length;i++){
        acc += numbers[i];
    }
    let media = (acc/numbers.length);
    console.log('La media es '+ media);
}

const result = average(numbers);