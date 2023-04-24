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

  async getWishlistByUserId(id: string) {
    // get wishlist data with user id ORDER BY created_at DESC LIMIT 12
    return this.wishlistRepository.find({
      where: { user: { id: id } },
      order: { createdAt: 'DESC' },
      take: 12,
    });
  }

  async getIsWishlist(id: string, isbn: number) {
    // get wishlist data with user id and isbn
    const result = await this.wishlistRepository.findOne({
      where: { user: { id: id }, isbn: isbn },
    });
    if (result) {
      return true;
    } else {
      return false;
    }
  }

  async create(createWishlistDto: CreateWishlistDto): Promise<Wishlist> {
    const wishlist = new Wishlist();

    const user = await this.userRepository.findOne({
      where: { id: createWishlistDto.userId },
    });
    wishlist.user = user;
    wishlist.isbn = createWishlistDto.isbn;

    return this.wishlistRepository.save(wishlist);
  }

  async delete(id: string, isbn: number): Promise<void> {
    await this.wishlistRepository.delete({ user: { id: id }, isbn: isbn });
  }

  // async delete(id: string): Promise<void> {
  //   await this.wishlistRepository.delete(id);
  // }
}
