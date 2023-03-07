import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { GenreModule } from './review/genre/genre.module';
import { UserGenreModule } from './user_genre/user_genre.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { UserBookModule } from './user_book/user_book.module';
import { GenreModule } from './genre/genre.module';
import { BookGenreModule } from './book_genre/book_genre.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [UserModule, BookModule, GenreModule, UserGenreModule, WishlistModule, UserBookModule, BookGenreModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
