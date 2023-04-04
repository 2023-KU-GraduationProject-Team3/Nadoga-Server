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
    console.log('서비스 실행');

    return this.userRepository.createUser(createUserDto);
  }

  async emailExists(email: string) {
    if (this.userRepository.findOneByEmail(email)) {
      return true;
    }
    return false;
  }
}
