import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';

type Result = {
  id: number;
  title: string;
};

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() dto: CreateTodoDto) {
    return this.todosService.create(dto);
  }
  @Get()
  fetchAll() {
    return this.todosService.fetch();
  }
  @Get(':id')
  findOneById(@Param() params: any): any {
    return this.todosService.findOneById(params.id);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() dto: CreateTodoDto) {
    return this.todosService.update(id, dto);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.todosService.delete(id);
  }
}
