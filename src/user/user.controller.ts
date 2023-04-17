import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import CreateUserDto from './dto/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
import { DeleteResult } from 'typeorm';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/sign-up')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const emailExists = await this.userService.emailExists(createUserDto.email);

    if (emailExists !== null) {
      throw new ConflictException('이미 존재하는 이메일입니다.');
    }

    return this.userService.createUser(createUserDto);
  }

  @Post('/email-check')
  async emailExists(@Body('email') email: string): Promise<User> {
    return this.userService.emailExists(email);
  }

  @Post('/login')
  async loginUser(@Body() loginUserDto: CreateUserDto): Promise<User> {
    return this.userService.loginUser(loginUserDto);
  }

  @Delete('/:id')
  async deleteUserById(@Param('id') userId: string): Promise<User> {
    return this.userService.deleteUserById(userId);
  }
}
