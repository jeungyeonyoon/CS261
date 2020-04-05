const todoItems = [];

function addTodo(text){
    const todo = {

    }
}

const todoList = document.querySelector('.todo-list');
list.insertAdjacentHTML('beforeend', `
<li class="todo-item" data-key="${todo.id}">
  <input id="${todo.id}" type="checkbox"/>
  <label for="${todo.id}" class="tick js-tick"></label>
  <span>${todo.text}</span>
  <button class="delete-todo js-delete-todo">
    <svg></use></svg>
  </button>
</li>
`);

function todoDone(key){
    const index= todoItems.findIndex(item => item.id == Number(key));
    todoItems[index].checked = !todoItems[index].checked;

    const item = document.querySelector("[data-key='${key}']");
    if (todoItems[index].checked){
        item.classList.add('done');
    } else{
        item.classList.remove('done');
    }
}

function deleteTodo(key){
    //todoItems = todoItems.filter(item => item.id ! == Number(key));
    const item = document.querySelector("[data-key='${key}']");
    item.remove();

    const list = document.querySelector('.todo-list');
    


}

const form = document.querySelector()