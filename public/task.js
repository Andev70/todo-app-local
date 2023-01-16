const showTodos = (data) => {
  const todoParent = document.querySelector(".todo-list");
  const displayTodo = data.map((todo) => {
    return ` <li
              class="todo pl-[5px] input-wrapper w-full flex justify-center items-center"
            >
              <article class="todo-name ">${todo}</article>
                            <button
                class=" update h-full  flex justify-center items-center"
              >
                <img
                  src="./Edit.svg"
                  class="add-icon update-icon w-[1.5rem] h-[1.5rem]"
                />
              </button>
             
              <button
                class="add-todo btn-del h-full flex justify-center items-center"
              >
                <img
                  src="./icons8-trash-can.svg"
                  class="add-icon btn-delete "
                />
              </button>

              
            </li>`;
  });
  const todoHtml = displayTodo.join("");
  todoParent.innerHTML = todoHtml;
};

export default showTodos;
