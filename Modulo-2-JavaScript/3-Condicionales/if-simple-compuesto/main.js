'use strict';

const input = document.querySelector('.js-hour');
const inputValue = parseInt(input.value);
const result = document.querySelector('.js-result');
const namePerson = "Josefina";

/*if simple*/
if(inputValue > 9) {
    result.innerHTML = "estás llegando tarde"
}

/*if compuesto IF-ELSE*/
if(namePerson === "Josefina" && inputValue > 9) {
    result.innerHTML = " estás despedida";
}
else {
    result.innerHTML = "estás llegando tarde";
}