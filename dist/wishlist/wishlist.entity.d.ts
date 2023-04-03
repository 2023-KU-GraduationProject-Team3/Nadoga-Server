import { Book } from 'src/book/book.entity';
import { User } from 'src/user/user.entity';
import { BaseEntity } from 'typeorm';
export declare class Wishlist extends BaseEntity {
    id: string;
    whishDate: Date;
    user: User;
    book: Book;
}
