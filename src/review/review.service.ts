import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/user/user.repository';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './review.entity';
import { ReviewRepository } from './review.repository';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(ReviewRepository)
    private reviewRepository: ReviewRepository,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  getAllReview(): Promise<Review[]> {
    return this.reviewRepository.find();
  }

  async getReview(id: string): Promise<Review> {
    return this.reviewRepository.findOneBy({ id: id });
  }

  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    const review = new Review();

    const user = await this.userRepository.findOne({
      where: { id: createReviewDto.userId },
    });

    review.user = user;
    review.isbn = createReviewDto.isbn;
    review.rating = createReviewDto.rating;
    review.content = createReviewDto.content;

    this.reviewRepository.save(review);

    return review;
  }

  async delete(id: string): Promise<void> {
    await this.reviewRepository.delete(id);
  }

  async getCollab(): Promise<any> {
    return this.reviewRepository.getCollab();
  }
}
