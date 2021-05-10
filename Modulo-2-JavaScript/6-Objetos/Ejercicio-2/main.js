'use strict';

const adalaber1 = {
    name: "Susana",
    age: 34,
    job: "periodista",
  };

adalaber1.run = () => `Estoy corriendo`;
console.log(adalaber1.run());

adalaber1.runAMarathon = distance => `Estoy corriendo una maratón de ${distance} kilómetros`;
console.log(adalaber1.runAMarathon(50));