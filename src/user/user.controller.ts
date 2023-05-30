import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
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

  @Get('/')
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get('/user-info/:id')
  async getUserInfo(@Param('id') userId: string): Promise<any> {
    return this.userService.getUserInfo(userId);
  }

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
  @Patch('/update-up/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() createUserDto: CreateUserDto,
  ): Promise<User> {
    const user = await this.userService.findUser(id);

    if (!user) {
      throw new NotFoundException('해당 유저가 존재하지않습니다.');
    }
    const updatedUser = Object.assign(user, createUserDto);

    // 업데이트된 유저 정보를 저장합니다.
    return this.userService.updateUser(updatedUser);
  }

  @Post('/login')
  async loginUser(@Body() loginUserDto: CreateUserDto): Promise<User> {
    if (loginUserDto.email === undefined) {
      throw new ConflictException('이메일을 입력해주세요.');
    }
    if (loginUserDto.password === undefined) {
      throw new ConflictException('비밀번호를 입력해주세요.');
    }
    return this.userService.loginUser(loginUserDto);
  }

  @Delete('/:id')
  async deleteUserById(@Param('id') userId: string): Promise<User> {
    return this.userService.deleteUserById(userId);
  }
}
