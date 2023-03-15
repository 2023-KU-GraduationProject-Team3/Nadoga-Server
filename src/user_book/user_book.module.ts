import { Module } from '@nestjs/common';
import { CustomTypeOrmModule } from 'src/customTypeOrm.module';
import { UserBookController } from './user_book.controller';
import { UserBookRepository } from './user_book.repository';
import { UserBookService } from './user_book.service';

@Module({
  imports: [CustomTypeOrmModule.forCustomRepository([UserBookRepository])],
  controllers: [UserBookController],
  providers: [UserBookService],
})
export class UserBookModule {}
