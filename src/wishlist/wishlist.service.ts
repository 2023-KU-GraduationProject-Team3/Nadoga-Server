import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookRepository } from 'src/book/book.repository';
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
    @InjectRepository(BookRepository)
    private bookRepository: BookRepository,
  ) {}
  async create(createWishlistDto: CreateWishlistDto): Promise<Wishlist> {
    const wishlist = new Wishlist();
    wishlist.whishDate = createWishlistDto.createdAt;

    const user = await this.userRepository.findOne({
      where: { id: createWishlistDto.userId },
    });
    wishlist.user = user;

    const book = await this.bookRepository.findOne({
      where: { id: createWishlistDto.bookId },
    });
    wishlist.book = book;
    return this.wishlistRepository.save(wishlist);
  }

  async delete(id: number): Promise<void> {
    await this.wishlistRepository.delete(id);
  }
}
