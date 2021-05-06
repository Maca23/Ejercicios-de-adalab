'use strict';

const button = document.querySelector('.button');

function showName() {
    let name = document.querySelector('.name').value;
    console.log(`Hola ${name}`);
}

button.addEventListener('click', showName);