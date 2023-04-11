import { Module } from '@nestjs/common';
import { CustomTypeOrmModule } from 'src/customTypeOrm.module';
import { ReviewController } from './review.controller';
import { ReviewRepository } from './review.repository';
import { ReviewService } from './review.service';
import { UserRepository } from 'src/user/user.repository';

@Module({
  imports: [
    CustomTypeOrmModule.forCustomRepository([ReviewRepository]),
    CustomTypeOrmModule.forCustomRepository([UserRepository]),
  ],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
