import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
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
  getReviewByUserId(@Param('id') user_id: string): Promise<Review> {
    return this.reviewService.getReviewByUserId(user_id);
  }

  @Get('/isbn/:isbn')
  getReviewByIsbn(@Param('isbn') isbn: number): Promise<Review[]> {
    return this.reviewService.getReviewsByIsbn(isbn);
  }

  @Post()
  async create(@Body() createReviewDto: CreateReviewDto): Promise<Review> {
    return this.reviewService.create(createReviewDto);
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
  async getRating(@Param('isbn') isbn: number): Promise<RatingCount[]> {
    return this.reviewService.getRatingCountsByISBN(isbn);
  }
}
