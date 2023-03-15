import { Module } from '@nestjs/common';
import { UserBookController } from './user_book.controller';
import { UserBookService } from './user_book.service';

@Module({
  controllers: [UserBookController],
  providers: [UserBookService],
})
export class UserBookModule {}
