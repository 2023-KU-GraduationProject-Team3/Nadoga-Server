import { Module } from '@nestjs/common';
import { CustomTypeOrmModule } from 'src/customTypeOrm.module';
import { ReviewRepository } from 'src/review/review.repository';
import { SearchRepository } from 'src/search/search.repository';
import { WishlistRepository } from 'src/wishlist/wishlist.repository';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [CustomTypeOrmModule.forCustomRepository([UserRepository]),
            CustomTypeOrmModule.forCustomRepository([SearchRepository]),
            CustomTypeOrmModule.forCustomRepository([WishlistRepository]),
            CustomTypeOrmModule.forCustomRepository([ReviewRepository]),
],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
