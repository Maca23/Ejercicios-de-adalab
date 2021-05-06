'use strict';

const button = document.querySelector('.change');

function showChange() {
    console.log('Mi primer click, ¡ole yo y la mujer que me parió!');
  }

button.addEventListener('click', showChange);