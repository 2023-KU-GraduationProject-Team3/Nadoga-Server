import { CustomRepository } from 'src/customTypeOrm.decorator';
import { Repository } from 'typeorm';
import { search } from './search.entity';

@CustomRepository(search)
export class searchRepository extends Repository<search> {}
