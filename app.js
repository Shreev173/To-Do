//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Functions

const addTodo = (e) => {
  //Prevent form from submitting
  e.preventDefault();
  //   console.log("Hello");

  //TODO div

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;

  newTodo.classList.add("todo-item");

  todoDiv.appendChild(newTodo);

  //checked

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //deleted

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.append(trashButton);
  //append to list

  todoList.appendChild(todoDiv);

  //clear todo input value
  todoInput.value = "";
};

const deleteCheck = (e) => {
  // console.log(e.target);

  const item = e.target;

  //delete

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;

    // todo.remove();
    //animation
    todo.classList.add("fall");
    todo.addEventListener("transitioned", function () {
      todo.remove();
    });
  }

  //check

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
};

//Event listeners

todoButton.addEventListener("click", addTodo);

todoList.addEventListener("click", deleteCheck);
