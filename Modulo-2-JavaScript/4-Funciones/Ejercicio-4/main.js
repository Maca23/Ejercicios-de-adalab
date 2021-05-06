'use strict';

function num(a) {
    if (a %2 === 0) {
        return 'El número es par';
    }else{
        return 'El número es impar'
    }
}

const result = num (2);
console.log(result);