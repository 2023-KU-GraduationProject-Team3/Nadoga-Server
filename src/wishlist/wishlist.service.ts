import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/book/book.entity';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { Wishlist } from './wishlist.entity';
import { WishlistRepository } from './wishlist.repository';

@Injectable()
export class WishlistService {
  constructor(
    @InjectRepository(Wishlist)
    private wishlistRepository: Repository<Wishlist>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
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
}
