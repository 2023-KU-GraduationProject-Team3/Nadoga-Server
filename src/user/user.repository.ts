import { CustomRepository } from 'src/customTypeOrm.decorator';
import { DeleteResult, Repository } from 'typeorm';
import CreateUserDto from './dto/create-user.dto';
import { User } from './user.entity';
import { NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { xml2json } from 'xml-js';

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

  async deleteUserById(userId: string): Promise<User> {
    const result = await this.findOneBy({ id: userId });
    result.remove();

    if (result == null) {
      throw new NotFoundException();
    }
    return result;
  }

  async getGenreFromLibraryAPI(isbn: number): Promise<string> {
    const libraryUrl =
      'http://data4library.kr/api/srchDtlList?authKey=32bb82a55e2ccb6dd8baec16309bed7ecc2985e9a07e83dc18b5037179636d55&isbn13=' +
      String(isbn) +
      '&loaninfoYN=Y';

    const postData = { url: libraryUrl };

    const url = 'http://43.200.106.28:4000/library';

    try {
      const response = await axios.post(url, postData);
      const xmlData = response.data;

      const jsonData = xml2json(xmlData, { compact: true, spaces: 4 });
      const parsedData = JSON.parse(jsonData);

      const genreValue = parsedData.response.detail.book.class_no._cdata;

      return String(genreValue[0]);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
