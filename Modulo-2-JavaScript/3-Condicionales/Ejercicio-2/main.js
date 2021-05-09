'use strict';

let userName = "Macarena";
const body = document.querySelector('body');


if (userName === "Macarena" || userName === "Rocío") {
    console.log(`Bienvenida ${userName}`); //Esta línea se ejecuta solo si se cumple la condición
  } else {
    console.log('Lo siento pero el usuario que has introducido no está registrado'); //Esta línea se ejecuta solo si NO se cumple la condición
  }