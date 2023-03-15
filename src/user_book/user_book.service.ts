import { Injectable } from '@nestjs/common';
import { UserBookRepository } from './user_book.repository';

@Injectable()
export class UserBookService {
  constructor(private userBookRepository: UserBookRepository) {}
}
