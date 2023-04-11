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

  @Post()
  async create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.create(createReviewDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.reviewService.delete(id);
  }
}
