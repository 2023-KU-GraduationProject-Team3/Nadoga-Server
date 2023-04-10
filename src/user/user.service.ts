import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import CreateUserDto from './dto/create-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    return this.userRepository.createUser(createUserDto);
  }

  async emailExists(email: string): Promise<boolean> {
    const user = await this.userRepository.findOneByEmail(email);

    if (user) {
      return true;
      // 사용자가 존재하는 경우 처리
    } else {
      return false;
      // 사용자가 존재하지 않는 경우 처리
    }
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
}
