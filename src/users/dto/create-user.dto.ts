import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['ADMIN', 'ENGINEER', 'INTERN'], { message: 'Valid Role Required' })
  role: 'ADMIN' | 'ENGINEER' | 'INTERN';
}
