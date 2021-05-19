'use strict';

const bodyElement = document.querySelector('.body');

function handleBodyScroll() {
    console.log('scrolleando...', window.scrolly);
    const currentScroll = window.scrollY;
    if (currentScroll > 250) {
        bodyElement.classList.add('red');
        console.log('es mayor');
    } else {
        bodyElement.classList.add('purple');
        console.log('es menor');
    }
}

window.addEventListener('scroll', handleBodyScroll);