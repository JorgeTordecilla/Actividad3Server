import { Injectable } from '@nestjs/common';
import { todoList, baseContadorId } from './data/todoList';
import { CreateTodoDto, UpdateTodoDto } from './Dto´s/todo-dto';

let todos = todoList;
let contadorId = baseContadorId;

@Injectable()
export class TodoService {
  getTodos() {
    return todos;
  }
  getTodo(id: number) {
    return todos.find((todo) => todo.id === id);
  }

  deleteTodo(id: number) {
    todos = todos.filter((todo) => todo.id !== id);
    return todos;
  }

  createTodo(createTodo: CreateTodoDto) {
    contadorId += 1;
    const newTodo = {
      id: contadorId,
      ...createTodo,
    };
    todos.push(newTodo);
    return newTodo;
  }

  updateTodo(id: number, updateTodoDto: UpdateTodoDto) {
    todos = todos.map((todo) =>
      todo.id !== id
        ? todo
        : {
            ...todo,
            ...updateTodoDto,
          },
    );
    return todos;
  }
}
