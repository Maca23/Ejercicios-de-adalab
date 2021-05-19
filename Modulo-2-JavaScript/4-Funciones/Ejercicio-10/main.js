'use strict';

function getBoxWidth(borderBox, width, padding, borderSize) {
    if (borderBox === true) {
        console.log(`El ancho del contenido es: ${width - padding - borderSize}px y el ancho total de la caja es: ${width}px`);
    } else {
        console.log(`El ancho del contenido es: ${width}px y el ancho total de la caja es: ${width + padding + borderSize}px`);
    }
    // si es borderBox
    // ancho - padding - borderSize

    // no es borderBox
    // ancho + padding + borderSize 
}

getBoxWidth(true, 100, 10, 3);
getBoxWidth(false, 100, 10, 3);