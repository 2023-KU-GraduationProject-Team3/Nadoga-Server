import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { UserGenreModule } from './user_genre/user_genre.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { UserBookModule } from './user_book/user_book.module';
import { GenreModule } from './genre/genre.module';
import { BookGenreModule } from './book_genre/book_genre.module';
import { ReviewModule } from './review/review.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.configs';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    UserModule,
    BookModule,
    GenreModule,
    UserGenreModule,
    WishlistModule,
    UserBookModule,
    BookGenreModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
