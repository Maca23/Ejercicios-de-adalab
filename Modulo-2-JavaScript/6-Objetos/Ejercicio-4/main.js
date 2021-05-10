'use strict';

const button = document.querySelector(".button");

function getButton(event){
    console.log(event);
}

button.addEventListener('click', getButton);