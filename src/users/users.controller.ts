import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AddUser } from 'src/interfaces/users.interface';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  /**
   * All Routes
   * 1) GET /users or GET /users?role=value
   * 2) GET /users/interns
   * 3) GET /users/:id
   * 4) POST /users
   * 5) PATCH /users/:id
   * 6) DELETE /users/:id
   */
  @Get() // 1) Route
  async findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    try {
      return await this.userService.findAll(role);
    } catch (error) {
      throw new BadRequestException('Something bad happened', {
        cause: new Error(),
        description: 'Some error description',
      });
    }
  }
  //   @Get('interns') // 2) Route
  //   findAllInterns() {
  //     return [];
  //   }
  // Note Static Routes always before the dynamic Routes because order does matter
  //   @Get(':id') // 3) Route
  //   findOne(@Param('id', ParseIntPipe) id: number) { // Use of ParseIntPipe pipe
  //     return this.userService.findOne(+id);
  //     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
  //   }
  @Get(':id') // 3) Route
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }), // Use of ParseIntPipe pipe with different status
    )
    id: number,
  ) {
    return this.userService.findOne(id); // no need of inary plus +id here
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
  }
  @Post() // 4) Route
  //   create(@Body() user: AddUser) {
  create(@Body(ValidationPipe) createUserDto: CreateUserDTO) {
    //Using dto instead of AddUser interface
    return this.userService.create(createUserDto);
  }
  @Patch(':id') // 5) Route
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }
  @Delete(':id') // 6) Route
  delete(@Param('id') id: number) {
    return this.userService.delete(+id);
  }
}
