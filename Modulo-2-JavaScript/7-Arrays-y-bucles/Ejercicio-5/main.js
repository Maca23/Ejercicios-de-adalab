'use strict';

let numbers = [3, 5, 1, 8, 9];

let acc = 0;

for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i]/5;
}

console.log('La media es: ' + acc);