/*
Proceso 1
    1.- Cuando arranque la pag debo pintar el listado de tareas
    2.- Escuchar un evento sobre las tareas pintadas

Proceso 2
    2.- Una vez que la usuaria ha clickado
        2-1 Recoger en cual elemento ha hecho click
        2-2 Modificar los datos (estado de la tarea)
        2-3 Vovler a pintar mis tareas
        2-4 Escuchar evento
*/
const ulElement = document.querySelector(".js-list");
const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

function paintTasks() {
  let html = "";
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    if (task.completed === true) {
      className = "crossout";
      checked = "checked";
    } else {
      className = "";
      checked = "";
    }
    html += `<li>`;
    html += `<input type="checkbox" value="${i}" />`;
    html += `${task.name} </li>`;
  }
  ulElement.innerHTML = html;
  listenClick();
}

function listenClick() {
  const checkboxElements = document.querySelectorAll(".js-checkbox");
  for (let i = 0; i < checkboxElements.length; i++) {
    checkboxElements[i].addEventListener("change", hadlerCheck);
  }
}

function hadlerCheck(evt) {
    console.log(evt.target.value);
    const clicked = evt.target.value
    tasks[clicked].completed = !tasks[clicked].completed;
    paintTasks();
}

paintTasks();
