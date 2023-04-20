import { CustomRepository } from 'src/customTypeOrm.decorator';
import { Repository } from 'typeorm';
import { Search } from './search.entity';

@CustomRepository(Search)
export class SearchRepository extends Repository<Search> {}
