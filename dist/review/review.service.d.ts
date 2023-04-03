import { Review } from './review.entity';
import { ReviewRepository } from './review.repository';
export declare class ReviewService {
    private reviewRepository;
    constructor(reviewRepository: ReviewRepository);
    getAllReview(): Promise<Review[]>;
}
