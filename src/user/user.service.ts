import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import CreateUserDto from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { DeleteResult } from 'typeorm';
import { ReviewRepository } from 'src/review/review.repository';
import { SearchRepository } from 'src/search/search.repository';
import { WishlistRepository } from 'src/wishlist/wishlist.repository';
import axios from 'axios';

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
    private wishlistRepository: WishlistRepository,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

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
    let jsonData = {
      review_statistic: {
        genre0: 0,
        genre1: 0,
        genre2: 0,
        genre3: 0,
        genre4: 0,
        genre5: 0,
        genre6: 0,
        genre7: 0,
        genre8: 0,
        genre9: 0,
      },
      search_statistic: {
        genre0: 0,
        genre1: 0,
        genre2: 0,
        genre3: 0,
        genre4: 0,
        genre5: 0,
        genre6: 0,
        genre7: 0,
        genre8: 0,
        genre9: 0,
      },
      wishlist_statistic: {
        genre0: 0,
        genre1: 0,
        genre2: 0,
        genre3: 0,
        genre4: 0,
        genre5: 0,
        genre6: 0,
        genre7: 0,
        genre8: 0,
        genre9: 0,
      },
    };

    const reviews = await this.reviewRepository
      .createQueryBuilder('review')
      .select(['review.isbn', 'COUNT(review.id) as count'])
      .where('review.user_id = :userId', { userId })
      .groupBy('review.isbn')
      .getRawMany();

    reviews.map(
      async (review) =>
        await this.userRepository
          .getGenreFromLibraryAPI(review.review_book_isbn)
          .then((res) => {
            console.log(res);
            switch (res) {
              case '0':
                jsonData.review_statistic.genre0 += 1;
                break;
              case '1':
                jsonData.review_statistic.genre1 += 1;
                break;
              case '2':
                jsonData.review_statistic.genre2 += 1;
                break;
              case '3':
                jsonData.review_statistic.genre3 += 1;
                break;
              case '4':
                jsonData.review_statistic.genre4 += 1;
                break;
              case '5':
                jsonData.review_statistic.genre5 += 1;
                break;
              case '6':
                jsonData.review_statistic.genre6 += 1;
                break;
              case '7':
                jsonData.review_statistic.genre7 += 1;
                break;
              case '8':
                jsonData.review_statistic.genre8 += 1;
                break;
              case '9':
                jsonData.review_statistic.genre9 += 1;
                break;
            }
          }),
    );

    const searchs = await this.searchRepository
      .createQueryBuilder('search')
      .select(['search.isbn', 'COUNT(search.id) as count'])
      .where('search.user_id = :userId', { userId })
      .groupBy('search.isbn')
      .getRawMany();

    searchs.map(
      async (search) =>
        await this.userRepository
          .getGenreFromLibraryAPI(search.search_book_isbn)
          .then((res) => {
            console.log(res);

            switch (res) {
              case '0':
                jsonData.search_statistic.genre0 += 1;
                break;
              case '1':
                jsonData.search_statistic.genre1 += 1;
                break;
              case '2':
                jsonData.search_statistic.genre2 += 1;
                break;
              case '3':
                jsonData.search_statistic.genre3 += 1;
                break;
              case '4':
                jsonData.search_statistic.genre4 += 1;
                break;
              case '5':
                jsonData.search_statistic.genre5 += 1;
                break;
              case '6':
                jsonData.search_statistic.genre6 += 1;
                break;
              case '7':
                jsonData.search_statistic.genre7 += 1;
                break;
              case '8':
                jsonData.search_statistic.genre8 += 1;
                break;
              case '9':
                jsonData.search_statistic.genre9 += 1;
                break;
            }
          }),
    );

    const wishlists = await this.wishlistRepository
      .createQueryBuilder('wishlist')
      .select(['wishlist.isbn', 'COUNT(wishlist.id) as count'])
      .where('wishlist.user_id = :userId', { userId })
      .groupBy('wishlist.isbn')
      .getRawMany();

    wishlists.map(
      async (wishlist) =>
        await this.userRepository
          .getGenreFromLibraryAPI(wishlist.wishlist_book_isbn)
          .then((res) => {
            switch (res) {
              case '0':
                jsonData.wishlist_statistic.genre0 += 1;
                break;
              case '1':
                jsonData.wishlist_statistic.genre1 += 1;
                break;
              case '2':
                jsonData.wishlist_statistic.genre2 += 1;
                break;
              case '3':
                jsonData.wishlist_statistic.genre3 += 1;
                break;
              case '4':
                jsonData.wishlist_statistic.genre4 += 1;
                break;
              case '5':
                jsonData.wishlist_statistic.genre5 += 1;
                break;
              case '6':
                jsonData.wishlist_statistic.genre6 += 1;
                break;
              case '7':
                jsonData.wishlist_statistic.genre7 += 1;
                break;
              case '8':
                jsonData.wishlist_statistic.genre8 += 1;
                break;
              case '9':
                jsonData.wishlist_statistic.genre9 += 1;
                break;
            }
          }),
    );

    return jsonData;
  }
}
