import { Repository } from 'typeorm';
import { Review } from './review.entity';
export declare class ReviewRepository extends Repository<Review> {
    getAllReview(): Promise<Review[]>;
}
