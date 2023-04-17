import { CustomRepository } from 'src/customTypeOrm.decorator';
import { DeleteResult, Repository } from 'typeorm';
import CreateUserDto from './dto/create-user.dto';
import { User } from './user.entity';
import { NotFoundException } from '@nestjs/common';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.name = createUserDto.name;
    user.genre = createUserDto.genre;
    user.age = createUserDto.age;
    user.gender = createUserDto.gender;
    await user.save();
    return user;
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.findOneBy({ email: email });
  }

  async findOneByEmail_PW(email: string, password: string): Promise<User> {
    return this.findOneBy({ email: email, password: password });
  }

  async deleteUserById(userId: string): Promise<User> {
    const result = await this.findOneBy({ id: userId });
    result.remove();

    if (result == null) {
      throw new NotFoundException();
    }
    return result;
  }
}
