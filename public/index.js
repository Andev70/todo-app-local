// del todos
import showTodos from "./task.js";

const deleteSingleTodo = (e) => {
  const target = e.target;
  if (target.classList.contains("btn-del")) {
    const todoText = target.parentElement.querySelector(".todo-name").innerHTML;

    const todoArr = JSON.parse(localStorage.getItem("todos"));
    const filtered = [];
    todoArr.forEach((todo) => {
      if (todo !== todoText) {
        filtered.push(todo);
      }
    });
    localStorage.setItem("todos", JSON.stringify(filtered));
    const show = JSON.parse(localStorage.getItem("todos"));
    showTodos(show);
  }
};

export default deleteSingleTodo;
