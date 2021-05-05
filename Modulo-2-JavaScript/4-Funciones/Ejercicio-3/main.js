'use strict';

function IVA(a, b) {
    return 'El precio sin IVA es: ' + a + ' El IVA es: ' + (a * b)/100 + ' El precio total con IVA es: ' + (a + (a * b)/100);
}

let result = IVA(15, 21);
console.log(result);