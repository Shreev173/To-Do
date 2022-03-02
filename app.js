//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

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

const filterTodo = (e) => {
  const todos = todoList.childNodes;
  // console.log(todos);

  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;

      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;

      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }

        break;
    }
  });
};

// const saveLocalTodos = (todo) => {
//   //sth in there

//   let todos;

//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos.JSON.parse(localStorage.getItem("todos"));
//   }

//   todos.push(todo);
// };

//Event listeners

todoButton.addEventListener("click", addTodo);

todoList.addEventListener("click", deleteCheck);

filterOption.addEventListener("click", filterTodo);
