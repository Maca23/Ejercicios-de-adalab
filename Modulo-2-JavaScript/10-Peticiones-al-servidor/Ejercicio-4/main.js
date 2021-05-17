"use strict";

//Recoger la información de la URL donde consultar la información de los repositorios de la organización en la respuesta del servidor (en la propiedad repos_url) y hacer una nueva petición a esa URL.

function getOrgs() {
  const inputValue = document.querySelector(".js-text").value;
  fetch("https://api.github.com/orgs/" + inputValue)
    .then((firstResponse) => firstResponse.json())
    .then((firstData) => {
      const repos = firstData.repos_url;
      console.log(repos);
      return fetch(repos);
    })
    //En el último then pintar en nuestra web el nombre de todos los repositorios de la organización en una lista (propiedad name de cada objeto repositorio).
    .then((secondResponse) => secondResponse.json())
    .then((secondData) => {
      const list = document.querySelector(".list");
      for (let i = 0; i < secondData.length; i++) {
        list.innerHTML += `<li>${secondData[i].name}</li>`;
      }
    });
}
const btn = document.querySelector(".js-btn");
btn.addEventListener("click", getOrgs);
