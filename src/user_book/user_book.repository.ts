import { CustomRepository } from 'src/customTypeOrm.decorator';
import { Repository } from 'typeorm';
import { UserBook } from './user_book.entity';

@CustomRepository(UserBook)
export class UserBookRepository extends Repository<UserBook> {}
