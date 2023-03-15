import { Module } from '@nestjs/common';
import { CustomTypeOrmModule } from 'src/customTypeOrm.module';
import { ReviewController } from './review.controller';
import { ReviewRepository } from './review.repository';
import { ReviewService } from './review.service';

@Module({
  imports: [CustomTypeOrmModule.forCustomRepository([ReviewRepository])],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
