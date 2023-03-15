import { Module } from '@nestjs/common';
import { CustomTypeOrmModule } from 'src/customTypeOrm.module';
import { BookController } from './book.controller';
import { BookRepository } from './book.repository';
import { BookService } from './book.service';

@Module({
  imports: [CustomTypeOrmModule.forCustomRepository([BookRepository])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
