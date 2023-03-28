import { Book } from 'src/book/book.entity';
import { User } from 'src/user/user.entity';
import { BaseEntity } from 'typeorm';
export declare class Review extends BaseEntity {
    id: string;
    content: string;
    rating: number;
    book: Book;
    user: User;
}
