import { Review } from 'src/review/review.entity';
import { research } from 'src/research/research.entity';
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
    research: research[];
    reviews: Review[];
    wishlist: Wishlist;
}
