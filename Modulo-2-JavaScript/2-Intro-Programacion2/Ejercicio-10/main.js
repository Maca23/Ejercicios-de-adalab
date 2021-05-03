'use strict';

const p = document.querySelector('.age');
const age = parseInt(p.innerHTML);
const hoursDay = 24;
const daysYear = 365;

const totalHoursLife = age * hoursDay * daysYear;

p.innerHTML = ('Si tengo ' + p.innerHTML + ' años, he vivido: ' + totalHoursLife + ' horas.');