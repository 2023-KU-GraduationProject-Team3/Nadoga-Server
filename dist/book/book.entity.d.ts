import { Review } from 'src/review/review.entity';
import { UserBook } from 'src/user_book/user_book.entity';
import { Wishlist } from 'src/wishlist/wishlist.entity';
import { BaseEntity } from 'typeorm';
export declare class Book extends BaseEntity {
    id: string;
    name: string;
    author: string;
    publisher: string;
    publicationDate: Date;
    imageUrl: string;
    description: string;
    genre: string;
    userBooks: UserBook[];
    reviews: Review[];
    wishlist: Wishlist;
}
