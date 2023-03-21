export declare enum GENDER {
    MEN = 0,
    WOMEN = 1,
    UNKNOWN = 2
}
import { UserBook } from 'src/user_book/user_book.entity';
import { Wishlist } from 'src/wishlist/wishlist.entity';
import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: string;
    email: string;
    password: string;
    name: string;
    gender: GENDER;
    age: number;
    genre: string;
    createdAt: Date;
    updatedAt: Date;
    userBooks: UserBook[];
    wishlists: Wishlist[];
}
