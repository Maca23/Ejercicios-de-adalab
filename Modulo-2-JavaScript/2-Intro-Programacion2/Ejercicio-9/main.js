'use strict';

const p = document.querySelector ('.text');
const namePair = 'Rocío Garrido Añón';

p.innerHTML = 'El nombre de mi compañera es ' + namePair + ' y está compuesto por ' + namePair.length + ' letras.';

console.log('El nombre de mi compañera es ' + `${namePair}` + ' y está compuesto por ' + namePair.length + ' letras');