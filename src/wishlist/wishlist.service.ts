import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/user/user.repository';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { Wishlist } from './wishlist.entity';
import { WishlistRepository } from './wishlist.repository';

@Injectable()
export class WishlistService {
  constructor(
    @InjectRepository(WishlistRepository)
    private wishlistRepository: WishlistRepository,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}
  async create(createWishlistDto: CreateWishlistDto): Promise<Wishlist> {
    const wishlist = new Wishlist();

    const user = await this.userRepository.findOne({
      where: { id: createWishlistDto.userId },
    });
    wishlist.user = user;
    wishlist.isbn = createWishlistDto.isbn;

    return this.wishlistRepository.save(wishlist);
  }

  async delete(id: string): Promise<void> {
    await this.wishlistRepository.delete(id);
  }
}
