import './styles.css';
import {TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

// const newTodo = new Todo('Aprender JavaScript');

// todoList.todos[0].imprimirClase();

// console.log('todos', todoList.todos);


