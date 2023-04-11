import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './review.entity';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Get('/')
  getAllReview(): Promise<Review[]> {
    return this.reviewService.getAllReview();
  }

  @Get('/:id')
  getReview(@Param('id') id: string): Promise<Review> {
    return this.reviewService.getReview(id);
  }

  @Post()
  async create(@Body() createReviewDto: CreateReviewDto): Promise<Review> {
    return this.reviewService.create(createReviewDto);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.reviewService.delete(id);
  }
}
