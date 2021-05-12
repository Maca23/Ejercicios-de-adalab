"Use strict";

const adalabers = [
  {
    name: "María",
    age: 29,
    job: "diseñadora",
  },
  {
    name: "Lucía",
    age: 31,
    job: "ingeniera química",
  },
  {
    name: "Susana",
    age: 34,
    job: "periodista",
  },
  {
    name: "Rocío",
    age: 25,
    job: "actriz",
  },
  {
      name: "Inmaculada",
      age: 21,
      job: "diseñadora",
    },
];

function countAdalabers(adalabers) {
    const total = adalabers.length;
    return `Hay un total de: ${total} adalabers`;
};

console.log(countAdalabers(adalabers));

function averageAge(adalabers) {
  let acc = 0;
  let ageMedia = [];

  for (let i = 0; i < adalabers.length; i++) {
    ageMedia[i] = adalabers[i].age;
    acc += ageMedia[i];
  }
  const media = acc / adalabers.length;
  return `La media de edad es: ${media} años.`;
}

console.log(averageAge(adalabers));
