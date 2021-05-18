"use strict";

function getCharacter() {
  let character = document.querySelector(".js-character").value;
  fetch(`https://swapi.dev/api/people/?search=${character}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let result = document.querySelector(".js-result");
      for(let i = 0; i < data.results.length; i++) {
      result.innerHTML += `<p>Personaje: ${data.results[i].name}. Género: ${data.results[i].gender}</p>`;
      }
    });
}
const button = document.querySelector(".js-btn");
button.addEventListener("click", getCharacter);
