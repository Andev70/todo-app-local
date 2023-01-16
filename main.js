import "./style.css";
import "./src/css/index.css";
import "./src/sass/index.scss";
import deleteSingleTodo from "./public/index.js";
import showTodos from "./public/task.js";
const btn = document.querySelector(".add-todo");
const input = document.querySelector(".todo-input");
const todoParent = document.querySelector(".todo-list");
const todos = [];

// function

if (!JSON.parse(localStorage.getItem("todos"))) {
  localStorage.setItem("todos", JSON.stringify(todos));
} else {
  const arr = JSON.parse(localStorage.getItem("todos"));
  showTodos(arr);
}
const addTodo = () => {
  const value = input.value;
  const TodoData = JSON.parse(localStorage.getItem("todos"));
  TodoData.push(value);
  localStorage.setItem("todos", JSON.stringify(TodoData));
  const modifiedData = JSON.parse(localStorage.getItem("todos"));
  showTodos(modifiedData);
};

btn.addEventListener("click", addTodo);

document.addEventListener("click", deleteSingleTodo);
