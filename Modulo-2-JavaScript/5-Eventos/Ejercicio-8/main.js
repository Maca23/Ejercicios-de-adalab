'use strict';

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');

function handleButton(event) {
  const selectedButton = event.currentTarget;
  selectedButton.classList.toggle('button');
}

button1.addEventListener('click', handleButton);
button2.addEventListener('click', handleButton);