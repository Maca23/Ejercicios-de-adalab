'use strict';

const nameInput = document.querySelector(".js-name");

function handlerInput() {
    const inputValue = nameInput.value;
    console.log(inputValue);
    const pa = document.querySelector(".js-greeting");
    pa.innerHTML += inputValue + '!';
}

nameInput.addEventListener("", handlerInput);