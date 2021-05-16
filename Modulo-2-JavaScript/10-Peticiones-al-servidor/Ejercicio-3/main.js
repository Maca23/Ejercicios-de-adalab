'use strict';

function getUser() {
  const inputValue = document.querySelector(".js-text").value;
  console.log(inputValue);
  fetch("https://api.github.com/users/" + inputValue)
    .then((response) => response.json())
    .then((data) => {
      const name = document.querySelector(".js-name");
      name.innerHTML = data.login;
      const img = document.querySelector("img");
      img.src = data.avatar_url;
      img.alt = "Avatar";
      const number = document.querySelector(".js-number_repos");
      number.innerHTML = data.public_repos;
    });
}
const btn = document.querySelector(".js-btn");
btn.addEventListener("click", getUser);
