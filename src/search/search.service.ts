import { Injectable } from '@nestjs/common';
import { SearchRepository } from './search.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Search } from './search.entity';
import { CreateSearchDto } from './dto/create-search.dto';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class searchService {
  constructor(
    @InjectRepository(SearchRepository)
    private searchRepositoy: SearchRepository,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  getAllSearch(): Promise<Search[]> {
    return this.searchRepositoy.find();
  }

  async getSearchByUserId(userId: string): Promise<Search[]> {
    // const search = await this.searchRepositoy
    //   .createQueryBuilder('search')
    //   .leftJoinAndSelect('search.user', 'user')
    //   .where('search.user = :userId', { userId })
    //   .getMany();

    // get search with user id ORDER BY createdAt DESC
    const search = await this.searchRepositoy.find({
      where: { user: { id: userId } },
      order: { createdAt: 'DESC' },
    });

    return search;
  }

  async searchExists(user_id: string, book_isbn: number): Promise<boolean> {
    const search = await this.searchRepositoy.findOneBy({
      user: { id: user_id },
      isbn: book_isbn,
    });
    return search != null;
  }

  async createSearchById(createSearchDto: CreateSearchDto): Promise<Search> {
    const search = new Search();

    const user = await this.userRepository.findOne({
      where: { id: createSearchDto.userId },
    });

    const searchExists = await this.searchExists(
      createSearchDto.userId,
      createSearchDto.isbn,
    );

    if (searchExists) {
      return null;
    }

    search.user = user;
    search.isbn = createSearchDto.isbn;

    await search.save();

    return search;
  }

  async deleteSearch(user_id: string, book_isbn: number): Promise<void> {
    await this.searchRepositoy.delete({
      user: { id: user_id },
      isbn: book_isbn,
    });
  }
}
