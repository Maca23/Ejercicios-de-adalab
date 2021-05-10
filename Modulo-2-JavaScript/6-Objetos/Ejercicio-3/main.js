'use strict';

const adalaber1 = {
    name: "Susana",
    age: 34,
    job: "periodista",
};

adalaber1.showBio = function() {
  return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.job;
};

console.log(adalaber1.showBio());

const adalaber2 = {
    name: "Rocío",
    age: 25,
    job: "actriz",
};

adalaber2.showBio = function() {
    return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.job;
  };
  
  console.log(adalaber2.showBio());