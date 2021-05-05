'use strict';

const input = document.querySelector(".js-age");
const ageValue = parseInt(input.value);
const nombre = "Iván"

const resultStop = document.querySelector(".js-result-stop");
const resultGo = document.querySelector(".js-restult-go");
const resultMax = document.querySelector(".js-result-max");

if(ageValue < 18) {
    resultStop.classList.remove("hidden");
}
else if(ageValue <= 100) {
    resultGo.classList.remove("hidden");
}
else {
    resultMax.classList.remove("hidden");
}

/* operador ternario, para casos muy muy específicos */

const msj = (nombre === 'Miguel')? "no te hace falta ir al barbero": "haces millonario al barbero";