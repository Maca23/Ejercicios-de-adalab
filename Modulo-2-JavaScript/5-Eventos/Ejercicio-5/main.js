'use strict';

const antonia = document.querySelector('body');

function changeColor(event) {
    if (event.key === 'r') {
        antonia.classList.add('rojo');
        antonia.classList.remove('morado');
    } else if (event.key === 'm') {
        antonia.classList.add('morado');
        antonia.classList.remove('rojo');
    }
}

document.addEventListener('keydown', changeColor);