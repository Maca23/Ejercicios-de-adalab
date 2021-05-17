'use strict';

const nickname = document.querySelector('.js-nickname');

function paintNick(nickna) {
    nickname.innerHTML = nickna;
}

fetch('./file.json')
.then((response) => response.json())
.then((data) => {
    console.log(data.configEntities.identityStore.nickname);
    const nick = data.configEntities.identityStore.nickname;
    paintNick(nick);
})