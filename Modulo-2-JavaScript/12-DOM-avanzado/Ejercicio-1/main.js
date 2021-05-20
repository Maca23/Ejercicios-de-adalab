const list = document.querySelector('.js-list');
const numbers = [1, 2, 3];

for (const number of numbers){
    
    const newItem = document.createElement('li');
    const newContent = document.createTextNode(number);
    newItem.appendChild(newContent);
    
    list.appendChild(newItem);
}