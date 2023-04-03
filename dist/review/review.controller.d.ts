import { Review } from './review.entity';
import { ReviewService } from './review.service';
export declare class ReviewController {
    private reviewService;
    constructor(reviewService: ReviewService);
    getAllReview(): Promise<Review[]>;
}
