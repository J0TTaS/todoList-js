

import './styles.css';

// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';
import { Todo, TodoList }  from './classes'; // No hace falta poner ./classes/index.js
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach( todo => crearTodoHtml( todo ) ); // versión larga del forEach
todoList.todos.forEach( crearTodoHtml ); // versión corta del forEach
