'use strict';

const people = 9;
const totalDinner = 128;
const priceShot = 2;

const totalPricePerson = (totalDinner / people);

console.log('Total cada persona: ' + totalPricePerson + '€');

const totalPriceAna = (totalPricePerson + priceShot);

console.log('Total a pagar Ana: ' + totalPriceAna + '€');