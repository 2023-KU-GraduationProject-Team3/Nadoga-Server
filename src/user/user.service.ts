import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import CreateUserDto from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { DeleteResult } from 'typeorm';
import { ReviewRepository } from 'src/review/review.repository';
import { SearchRepository } from 'src/search/search.repository';
import { WishlistRepository } from 'src/wishlist/wishlist.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    @InjectRepository(ReviewRepository)
    private reviewRepository: ReviewRepository,
    @InjectRepository(SearchRepository)
    private searchRepository: SearchRepository,
    @InjectRepository(WishlistRepository)
    private wishlistRepository: WishlistRepository
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    return this.userRepository.createUser(createUserDto);
  }

  emailExists(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email: email });
  }

  async findUser(userId: string): Promise<User> {
    return this.userRepository.findOneBy({ id: userId });
  }

  async updateUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async loginUser(loginUserDto: CreateUserDto) {
    const user = await this.userRepository.findOne({
      where: { email: loginUserDto.email, password: loginUserDto.password },
    });

    if (user) {
      return user;
      // 로그인 성공 처리
    } else {
      throw new HttpException(
        '로그인에 실패했습니다.',
        HttpStatus.UNAUTHORIZED,
      );
      // 로그인 실패 처리
    }
  }

  async deleteUserById(userId: string): Promise<User> {
    return this.userRepository.deleteUserById(userId);
  }

  async getStatisticByUserId(userId: string): Promise<any> {

    const reviews = await this.reviewRepository.createQueryBuilder("review")
    .select(["review.isbn", "COUNT(review.id) as count"])
    .where("review.user_id = :userId", { userId })
    .groupBy("review.isbn")
    .getRawMany();
    
    const reviewIsbns = reviews.map(review => ({ review_isbn: review.review_book_isbn }));
    

    const searchs = await this.searchRepository.createQueryBuilder("search")
    .select(["search.isbn", "COUNT(search.id) as count"])
    .where("search.user_id = :userId", { userId })
    .groupBy("search.isbn")
    .getRawMany();
    
    const searchsIsbns = searchs.map(search => ({ search_isbn: search.search_book_isbn }));





    const wishlists = await this.wishlistRepository.createQueryBuilder("wishlist")
    .select(["wishlist.isbn", "COUNT(wishlist.id) as count"])
    .where("wishlist.user_id = :userId", { userId })
    .groupBy("wishlist.isbn")
    .getRawMany();
    
    const wishlistsIsbns = wishlists.map(wishlist => ({ wishlist_isbn: wishlist.wishlist_book_isbn }));




    return {reviewIsbns, searchsIsbns, wishlistsIsbns };

  }
}
