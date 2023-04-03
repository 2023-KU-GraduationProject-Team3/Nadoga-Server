import { Injectable } from '@nestjs/common';
import { Review } from './review.entity';
import { ReviewRepository } from './review.repository';

@Injectable()
export class ReviewService {
  constructor(private reviewRepository: ReviewRepository) {}

  getAllReview(): Promise<Review[]> {
    return this.reviewRepository.getAllReview();
  }
}
