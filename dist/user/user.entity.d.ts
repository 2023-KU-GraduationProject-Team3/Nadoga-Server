export declare enum GENDER {
    MEN = 0,
    WOMEN = 1,
    UNKNOWN = 2
}
import { Review } from 'src/review/review.entity';
import { research } from 'src/research/research.entity';
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
    research: research[];
    wishlists: Wishlist[];
    reviews: Review[];
}
