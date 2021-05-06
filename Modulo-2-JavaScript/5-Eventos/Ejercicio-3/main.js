'use strict';

const p = document.querySelector('.pepito');

function showOtherParragraph() {
    const copyParragraph = document.createElement('p');
    copyParragraph.innerHTML = 'Lorem Ipsum';
    p.appendChild(copyParragraph);
}

p.addEventListener('click', showOtherParragraph);