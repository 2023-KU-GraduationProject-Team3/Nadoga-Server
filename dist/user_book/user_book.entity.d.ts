import { Book } from 'src/book/book.entity';
import { User } from 'src/user/user.entity';
import { BaseEntity } from 'typeorm';
export declare class UserBook extends BaseEntity {
    id: string;
    userId: string;
    bookId: string;
    loanDate: Date;
    returnDate: Date;
    user: User;
    book: Book;
}
