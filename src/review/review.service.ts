import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/user/user.repository';
import { getConnection } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './review.entity';
import { ReviewRepository } from './review.repository';

export interface RatingCount {
  rating: number;
  num: number;
}

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

  async getReviewByUserId(id: string): Promise<Review> {
    return this.reviewRepository.findOneBy({ id: id });
  }

  async getReviewByIsbn(isbn: number): Promise<Review> {
    return this.reviewRepository.findOneBy({ isbn: isbn });
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

  async getRatingCountsByISBN(isbn: number): Promise<RatingCount[]> {

    // 해당 ISBN에 대한 리뷰 정보를 가져옴
    const reviews = await this.reviewRepository.find({ where: { isbn } });

    // rating 값의 등장 횟수를 카운트하는 객체
    const ratingCounts: { [rating: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    // 리뷰 정보를 순회하면서 rating 값의 등장 횟수를 카운트
    reviews.forEach((review) => {
      const rating = review.rating;
      if (rating >= 1 && rating <= 5) {
        ratingCounts[rating]++;
      }
    });

    // rating 값과 해당 rating을 준 사용자의 수(num)를 저장하는 객체 생성
    const ratingCountsArray: RatingCount[] = Object.entries(ratingCounts).map(([rating, num]) => ({
      rating: parseInt(rating),
      num,
    }));

    return ratingCountsArray;
  }
}
