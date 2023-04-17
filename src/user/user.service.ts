import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import CreateUserDto from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    return this.userRepository.createUser(createUserDto);
  }

  emailExists(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email: email });
  }

  async loginUser(loginUserDto: CreateUserDto) {
    const user = await this.userRepository.findOneByEmail_PW(
      loginUserDto.email,
      loginUserDto.password,
    );

    if (user) {
      return user;
      // 로그인 성공 처리
    } else {
      throw new HttpException(
        '로그인에 실패했습니다.',
        HttpStatus.UNAUTHORIZED,
      );
      // 로그인 실패 처리
    }
  }

  async deleteUser(userId: string) {
    return this.userRepository.deleteUser(userId);
  }
}
