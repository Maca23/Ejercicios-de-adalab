'use strict';

const result = document.querySelector('.js-text');
const title = document.querySelector('.js-title');

function iva(price) {
    const iva = price * 0.21;
    const total = price + iva;
    result.innerHTML += `El precio es: ${price}, el iva es: ${iva}, el total a pagar es: ${total}`;
}

iva(100);
iva(1000);
iva(500);


//función arrow-flechas
const saludar = hora => {
    if (hora < 13) {
        return "buenos días";
    } else if (hora < 20) {
        return "buenas tardes";
    }
    else {
        return "buenas noches";
    }
}

title.innerHTML = saludar(8);