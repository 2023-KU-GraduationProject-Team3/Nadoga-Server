import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getReviewsByUserId(userId: string): Promise<Review[]> {
    return this.reviewRepository.find({ where: { user: { id: userId } } });
  }

  async getReviewsByIsbn(isbn: number): Promise<Review[]> {
    const reviews = await this.reviewRepository
      .createQueryBuilder('review')
      .leftJoinAndSelect('review.user', 'user')
      .where('review.isbn = :isbn', { isbn })
      .getMany();
    return reviews;
  }

    //업데이트 추가
  async update(id: string, updateReviewDto: CreateReviewDto): Promise<Review> {
    const review = await this.reviewRepository.findOne({ where: { id } });
  
    if (!review) {
      throw new NotFoundException(`Review  ${id} not found`);
    }
  
    const { rating, content } = updateReviewDto;
  
    review.rating = rating !== undefined ? rating : review.rating;
    review.content = content !== undefined ? content : review.content;
  
    return this.reviewRepository.save(review);
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

    await review.save();

    return review;
  }

  async delete(id: string): Promise<void> {
    await this.reviewRepository.delete(id);
  }

  async getCollab(): Promise<any> {
    return this.reviewRepository.getCollab();
  }

  async getRatingCountsByISBN(
    isbn: number,
  ): Promise<{ totalAverage: number; ratingCounts: RatingCount[] }> {
    const reviews = await this.reviewRepository.find({ where: { isbn } });

    const ratingCounts: { [rating: number]: number } = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    let totalSum = 0;
    const reviewCount = reviews.length;
    reviews.forEach((review) => {
      const rating = Math.round(review.rating); // 반올림해서 1,2,3,4,5로 변환
      if (rating >= 1 && rating <= 5) {
        ratingCounts[rating]++;
        totalSum += rating;
      }
    });

    const ratingCountsArray: RatingCount[] = Object.entries(ratingCounts).map(
      ([rating, num]) => ({
        rating: Number(rating),
        num,
      }),
    );

    const totalAverage = totalSum / reviewCount;

    return { totalAverage, ratingCounts: ratingCountsArray };
  }
}
