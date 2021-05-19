const form = document.querySelector('.form');
const img = document.createElement('img');
const imgCity = document.querySelector('.imgCity');


function showImg(event){
    
    const imageCity = event.target.value;
    
    if(imageCity === '1'){
        img.src = './img/Madrid.jpg';
    
    }else if(imageCity === '2'){
        img.src = './img/Paris.jpg';
    
    }else{
        img.src = './img/NY.jpg';
    }

    imgCity.appendChild(img);
}


form.addEventListener('change', showImg);