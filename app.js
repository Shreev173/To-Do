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
  newTodo.innerText = "Hey";

  newTodo.classList.add("todo-item");

  todoDiv.append(newTodo);

  //checked

  const completedButton = document.createElement("button");
  completedButton.innerHtml = '<i class = "fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.append(completedButton);

  //deleted

  const trashButton = document.createElement("button");
  trashButton.innerHtml = '<i class = "fas fa-trash"></i>';
  trashButton.classList.add("complete-btn");
  todoDiv.append(trashButton);
  //append to list

  todoList.append(todoDiv);
};

//Event listeners

todoButton.addEventListener("click", addTodo);
