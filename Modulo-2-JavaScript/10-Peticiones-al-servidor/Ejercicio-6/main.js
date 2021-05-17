"use strict";

const breedList = document.querySelector(".js-breedList");

fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (const key in data.message) {
      //breedList.innerHTML += `<li>${breed}</li>`;
      let url = `https://dog.ceo/api/breed/${breed}/images/random`;
      fetch(url)
        .then((result) => result.json())
        .then((dataImage) => {
          breedList.innerHTML += `<li>${breed} <img src="${dataImage.message}"></li>`;
        });
    }
  });
