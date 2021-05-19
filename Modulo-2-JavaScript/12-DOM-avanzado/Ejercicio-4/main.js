"use strict";

const paragraphs = document.querySelectorAll(".paragraph");

for (const par of paragraphs) {
  let intElemOffsetHeight = par.offsetHeight;
  par.style.height = `${intElemOffsetHeight / 3}px`;
}
