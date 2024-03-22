import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}
  async create(dto: CreateTodoDto) {
    const todo = this.todoRepository.create(dto);
    return this.todoRepository.save(todo);
  }
  async fetch() {
    return this.todoRepository.find();
  }
  finMany() {
    return this.todoRepository.find({ where: { id: 1 } });
  }
  async findOneById(id: number) {
    return this.todoRepository.findOne({ where: { id: id } });
  }
  async update(id: number, dto: CreateTodoDto) {
    const todo = await this.todoRepository.findOne({ where: { id: id } });
    Object.assign(todo, dto);
    return this.todoRepository.save(todo);
  }
  async delete(id: number) {
    const todo = await this.todoRepository.findOne({ where: { id: id } });
    // Object.assign(todo, dto);
    return this.todoRepository.remove(todo);
  }
}
