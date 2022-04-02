import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TodoService } from './todo.service';
import { CreateTodoDto, UpdateTodoDto } from './Dto´s/todo-dto';

@ApiTags('Todos')
@Controller('/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('/')
  @ApiResponse({
    status: 200,
    description: 'Todo list',
  })
  getTodos(): any {
    return this.todoService.getTodos();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'get todo by id',
  })
  getTodo(@Param('id', ParseIntPipe) id: number): any {
    return this.todoService.getTodo(id);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Delete todo by id',
  })
  deleteTodo(@Param('id', ParseIntPipe) id: number): any {
    return this.todoService.deleteTodo(id);
  }

  @Post('')
  @ApiResponse({
    status: 201,
    description: 'Create new todo',
  })
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.createTodo(createTodoDto);
  }

  @Put('/:id')
  @ApiResponse({
    status: 200,
    description: 'Update todo by id',
  })
  updateTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todoService.updateTodo(id, updateTodoDto);
  }
}
