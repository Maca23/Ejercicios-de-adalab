'use strict';

const p = document.querySelector('.p');

function showOtherParragraph() {
    p.innerHTML = 'Corrupti accusamus, eius natus harum saepe qui sapiente porro ratione soluta obcaecati delectus modi itaque.';
}

p.addEventListener('mouseover', showOtherParragraph);