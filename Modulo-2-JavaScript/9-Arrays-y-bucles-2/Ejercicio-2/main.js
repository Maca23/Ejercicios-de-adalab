"use strict";

let arr = [];

function getReversed100Numbers() {
  for (let i = 0; i < 100; i++) {
    arr.push(i);
  }
}

getReversed100Numbers();

console.log(arr.reverse());