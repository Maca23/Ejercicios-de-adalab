'use strict';

const button = document.querySelector('.button');
const name = document.querySelector('.name');

function showName() {
    console.log('Hola ' + name.value);
}

button.addEventListener('click', showName);