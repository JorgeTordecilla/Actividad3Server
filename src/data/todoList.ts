import { ITodo } from './ITodo';

export let baseContadorId = 1;
const todo1: ITodo = {
  id: baseContadorId,
  title: 'Calificar esta actividad en 5',
  completed: false,
};
baseContadorId += 1;
const todo2: ITodo = {
  id: baseContadorId,
  title: 'Felicitar a mis estudiantes',
  completed: false,
};

export const todoList: ITodo[] = [todo1, todo2];
