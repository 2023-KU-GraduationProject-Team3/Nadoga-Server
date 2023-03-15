import { Module } from '@nestjs/common';
import { BookGenreController } from './book_genre.controller';
import { BookGenreService } from './book_genre.service';

@Module({
  controllers: [BookGenreController],
  providers: [BookGenreService],
})
export class BookGenreModule {}
