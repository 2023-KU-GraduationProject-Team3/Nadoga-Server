import { CustomRepository } from 'src/customTypeOrm.decorator';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@CustomRepository(Book)
export class BookRepository extends Repository<Book> {}
