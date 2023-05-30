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

  async getUserInfo(userid: string): Promise<any> {
    return this.userRepository.findOneBy({ id: userid });
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
}
