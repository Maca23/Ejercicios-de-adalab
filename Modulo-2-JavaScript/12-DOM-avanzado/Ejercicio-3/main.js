const form = document.querySelector(".form");
const users = [
  {
    nombre: "Macarena",
    apellido: "González",
    teléfono: "647171621",
  },
  {
    nombre: "Leo",
    apellido: "Alonso",
    teléfono: "635072500",
  },
  {
    nombre: "Diego",
    apellido: "Ortega",
    teléfono: "685968098",
  },
];

const name = document.querySelector("#name");
const lastName = document.querySelector("#lastName");
const phone = document.querySelector("#phone");

function fillForm(event) {
  const selectedUser = event.target.value;

  if (selectedUser === "1") {
    name.value = users[0].nombre;
    lastName.value = users[0].apellido;
    phone.value = users[0].teléfono;
  } else if (selectedUser === "2") {
    name.value = users[1].nombre;
    lastName.value = users[1].apellido;
    phone.value = users[1].teléfono;
  } else if (selectedUser === "3") {
    name.value = users[2].nombre;
    lastName.value = users[2].apellido;
    phone.value = users[2].teléfono;
  }
}

form.addEventListener("change", fillForm);
