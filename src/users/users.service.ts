import { Injectable } from '@nestjs/common';
import { AddUser, FetchUser } from 'src/interfaces/users.interface';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';
// https://docs.nestjs.com/providers
@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'user 1',
      email: 'user1@gmail.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'user 2',
      email: 'user2@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'user 3',
      email: 'user3@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'user 4',
      email: 'user4@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 5,
      name: 'user 5',
      email: 'user5@gmail.com',
      role: 'ADMIN',
    },
  ];
  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const roleUsers = this.users.filter((user) => user.role === role);
      if (roleUsers.length === 0)
        throw new NotFoundException('No user agaist role');
      return roleUsers;
    }
    return this.users;
  }
  findOne(id: number) {
    const user = this.users.find((user) => user.id == id);
    if (!user) throw new NotFoundException('User Not Found');
    return user;
  }
  create(createUserDTO: CreateUserDTO) {
    // Important
    // const userAscendingArray = [...this.users].sort((a, b) => a.id - b.id); // returns the ascending array
    // const userDescendingArray = [...this.users].sort((a, b) => b.id - a.id); // returns the descending array
    // const usersLength = userDescendingArray[0].id;
    // return usersLength;
    const usersLength = this.users.length;
    const newUser = {
      id: usersLength + 1,
      ...createUserDTO,
    };
    this.users.push(newUser);
    return this.users;
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id == id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });
    return this.findOne(id);
  }
  delete(id: number) {
    const removedUser = this.findOne(id);
    // return this.users.filter((user) => user.id !== removedUser.id);
    return removedUser;
  }
}
