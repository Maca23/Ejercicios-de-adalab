'use strict';

const book = document.querySelector('.book');
const film = document.querySelector('.film');
const button = document.querySelector('.button');
const message = document.querySelector('.message');

let arrayBooksFilms = [];

function getBooksFilms() {
    const bookValue = book.value;
    const filmValue = film.value;
    
    arrayBooksFilms.push(bookValue);
    arrayBooksFilms.push(filmValue);
}

for (let i of arrayBooksFilms) {
    message.innerHTML += `A mi también me encantó ${i}`;
};

button.addEventListener('click', getBooksFilms);