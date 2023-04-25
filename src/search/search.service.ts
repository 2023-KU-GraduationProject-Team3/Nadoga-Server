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
    return this.searchRepositoy.find({ where: { user: { id: userId } } });
  }

  async createSearchById(createSearchDto: CreateSearchDto): Promise<Search> {
    const search = new Search();

    const user = await this.userRepository.findOne({
      where: { id: createSearchDto.userId },
    });

    search.user = user;
    search.isbn = createSearchDto.isbn;

    this.searchRepositoy.save(search);

    return search;
  }

  async deleteSearchById(id: string): Promise<void> {
    await this.searchRepositoy.delete(id);
  }
}
