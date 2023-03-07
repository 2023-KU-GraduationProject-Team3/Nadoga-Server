import { Module } from '@nestjs/common';
import { UserGenreController } from './user_genre.controller';
import { UserGenreService } from './user_genre.service';

@Module({
  controllers: [UserGenreController],
  providers: [UserGenreService]
})
export class UserGenreModule {}
