import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './review.entity';
import { RatingCount, ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Get('/')
  getAllReview(): Promise<Review[]> {
    return this.reviewService.getAllReview();
  }

  @Get('/id/:id')
  getReviewByUserId(@Param('id') user_id: string): Promise<Review[]> {
    return this.reviewService.getReviewsByUserId(user_id);
  }

  @Get('/isbn/:isbn')
  getReviewByIsbn(@Param('isbn') isbn: number): Promise<Review[]> {
    return this.reviewService.getReviewsByIsbn(isbn);
  }

  @Post()
  async create(@Body() createReviewDto: CreateReviewDto): Promise<Review> {
    return this.reviewService.create(createReviewDto);
  }
  //업데이트 추가
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateReviewDto: CreateReviewDto,
  ): Promise<Review> {
    return this.reviewService.update(id, updateReviewDto);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.reviewService.delete(id);
  }

  @Get('/algorithm/collab')
  async getCollab(): Promise<any[]> {
    const result = await this.reviewService.getCollab();
    return result;
  }
  @Get('algorithm/:isbn')
  async getRating(
    @Param('isbn') isbn: number,
  ): Promise<{ totalAverage: number; ratingCounts: RatingCount[] }> {
    return this.reviewService.getRatingCountsByISBN(isbn);
  }

  @Get('/rank/:id')
  async getRank(@Param('id') id: string): Promise<void> {
    return this.reviewService.getRankByUserId(id);
  }
}
