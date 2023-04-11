import { Module } from '@nestjs/common';
import { CustomTypeOrmModule } from 'src/customTypeOrm.module';
import { UserRepository } from 'src/user/user.repository';
import { WishlistController } from './wishlist.controller';
import { WishlistRepository } from './wishlist.repository';
import { WishlistService } from './wishlist.service';

@Module({
  imports: [
    CustomTypeOrmModule.forCustomRepository([WishlistRepository]),
    CustomTypeOrmModule.forCustomRepository([UserRepository]),
  ],
  controllers: [WishlistController],
  providers: [WishlistService],
})
export class WishlistModule {}
