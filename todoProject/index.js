import {qs, qsa, bindTouch} from './utilities.js'
let tpDplist = [];
function saveTodos(toDo){
    console.log('save', toDo)
}

export default class Todo {


    constructor(){
        bindTouch('#newTodoButton', this.addNewTodo.bind(this));
    }
    listTodos(){
        console.log();
    }
    saveTodos(){

    }
    addNewTodo(){
        //get todo text
        const todoText = qs('#newTodo');
        //save to do datastore
        saveTodos(todoText.value);
        //list Todos
        this.listTodos();
        
    }
    removeTodo(id){

    }
    completeTodo(id){

    }


}/*import ToDos from './todo.js';

const list = document.getElementById('todoList');
const myToDos = new ToDos(list, 'todo');*/