'use strict';

const year = 3;

const module = year % 4;

const remainingYear = 4 - module;

const nextYear = year + remainingYear;

console.log(nextYear);

//año = 3;

//resto = 3;

//lo que me queda = 4 - 3 = 1;

//año + lo que me queda = 3 + 1 - 4 =>OK

//---

//año = 25;

//resto = 1;

//lo que me queda = 4 - 1 = 3;

//año + lo que me queda = 25 + 3 = 28 =>OK

//---

//año = 16;

//resto = 0;

//lo que me queda = 4 - 0 = 3;

//año + lo que me queda = 16 + 4 = 20 =>OK

