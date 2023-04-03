import { Review } from 'src/review/review.entity';
import { search } from 'src/search/search.entity';
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
    search: search[];
    reviews: Review[];
    wishlists: Wishlist[];
}
