'use strict';
/*
const p = document.querySelector('.pepito');

function showOtherParragraph() {
    const copyParragraph = document.createElement('p');
    copyParragraph.innerHTML = 'Lorem Ipsum';
    p.appendChild(copyParragraph);
}

p.addEventListener('click', showOtherParragraph);
*/
const p = document.querySelector('.pepito');
const m = document.querySelector('.main');

const showOtherParragraph = () => {
    console.log("Hola?")
    m.innerHTML += `<p class="pepito">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas maxime consequatur autem sunt provident! Corrupti accusamus, eius natus harum saepe qui sapiente porro ratione soluta obcaecati delectus modi itaque.</p>`;
    
    const p = document.querySelector('.pepito');
    p.addEventListener('click', showOtherParragraph);
};

p.addEventListener('click', showOtherParragraph);