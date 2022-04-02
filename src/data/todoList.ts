import { ITodo } from './ITodo';

export let baseContadorId = 1;
const todo1: ITodo = {
  id: baseContadorId,
  title: 'Mi primer Todo',
  completed: false,
};
baseContadorId += 1;
const todo2: ITodo = {
  id: baseContadorId,
  title: 'Comprar la leche',
  completed: false,
};

export const todoList: ITodo[] = [todo1, todo2];
