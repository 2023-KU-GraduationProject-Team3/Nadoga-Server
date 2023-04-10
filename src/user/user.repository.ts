import { CustomRepository } from 'src/customTypeOrm.decorator';
import { Repository } from 'typeorm';
import CreateUserDto from './dto/create-user.dto';
import { User } from './user.entity';

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
}
