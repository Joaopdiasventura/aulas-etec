let toDoList = [];
let lastId = 0;

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const toDo = document.getElementById("toDo").value;

  if (toDo.trim().length < 1) {
    alert("DIGITE UMA TAREFA PARA SER REALIZADA");
    document.getElementById("toDo").value = "";
    return;
  }

  toDoList.push({ id: lastId++, title: toDo, complete: false });
  document.getElementById("toDo").value = "";
  render();
});

function render() {
  document.getElementById("toDoList").innerHTML = "";
  for (let i = 0; i < toDoList.length; i++) {
    const div = document.createElement("div");
    const title = document.createElement("h3");
    const completeButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    div.classList.add("card-body");
    title.classList.add(
      "card-title",
      toDoList[i].complete == false ? "nenhum" : "text-muted"
    );
    completeButton.classList.add(
      "btn",
      toDoList[i].complete == false ? "btn-success" : "btn-secondary"
    );
    deleteButton.classList.add("btn", "btn-danger");

    title.innerHTML = toDoList[i].title;

    completeButton.innerHTML =
      toDoList[i].complete == false ? "COMPLETAR" : "RETOMAR";

    deleteButton.innerHTML = "DELETAR";

    completeButton.addEventListener("click", () => {
      if (toDoList[i].complete != true) {
        toDoList[i].complete = true;
        render();
      } else {
        toDoList[i].complete = false;
        render();
      }
    });

    deleteButton.addEventListener("click", () => {
      toDoList = toDoList.filter((item) => {
        return item.id !== toDoList[i].id;
      });
      render();
    });

    div.appendChild(title);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    document.getElementById("toDoList").appendChild(div);
  }
}