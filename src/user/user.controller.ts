import {
  Body,
  ConflictException,
  Controller,
  Post,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import CreateUserDto from './dto/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/sign-up')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const emailExists = await this.userService.emailExists(createUserDto.email);

    if (emailExists) {
      throw new ConflictException('이미 존재하는 이메일 입니다.');
    }

    return this.userService.createUser(createUserDto);
  }


}
