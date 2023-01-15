import "./style.css";
import "./src/css/index.css";
import "./src/sass/index.scss";

const btn = document.querySelector(".add-todo");
const input = document.querySelector(".todo-input");
const todoParent = document.querySelector(".todo-list");
const todos = [];

// function
const showTodos = (data) => {
  const displayTodo = data.map((todo) => {
    return ` <li
              class="todo pl-[5px] input-wrapper w-full flex justify-center items-center"
            >
              <span class="todo-name w-[83%]">${todo}</span>
              <button
                class="add-todo h-full w-[17%] bg-cyan-500 flex justify-center items-center"
              >
                <img
                  src="./plus-solid.svg"
                  class="add-icon btn-delete w-[2rem] h-[2rem]"
                />
              </button>
            </li>`;
  });
  const todoHtml = displayTodo.join("");
  todoParent.innerHTML = todoHtml;
};
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
