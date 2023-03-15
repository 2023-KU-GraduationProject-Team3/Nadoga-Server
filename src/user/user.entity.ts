enum GENDER {
  MEN = 'MEN',
  WOMEN = 'WOMEN',
}
import { UserBook } from 'src/user_book/user_book.entity';
import { Wishlist } from 'src/wishlist/wishlist.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
@Unique(['uesr_email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Column({ name: 'user_id' })
  id: string;

  @Column({
    name: 'user_email',
    type: 'varchar',
    length: 25,
    comment: '유저 이메일',
  })
  email: string;

  @Column({
    name: 'user_password',
    type: 'varchar',
    length: 255,
    comment: '유저 비밀번호',
  })
  password: string;

  @Column({
    name: 'user_name',
    type: 'varchar',
    length: 255,
    comment: '유저 이름',
  })
  name: string;
  @Column({
    name: 'user_gender',
    type: 'enum',
    enum: GENDER,
    comment: '유저 성별(MEN, WOMEN)',
  })
  gender: string;

  @Column({
    name: 'user_genre',
    type: 'varchar',
    length: 30,
    comment: '유저가 선호하는 장르',
  })
  genre: string;

  @CreateDateColumn({ name: 'create_at', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
  updatedAt: Date;

  @OneToMany(() => UserBook, (userBook) => userBook.user)
  userBooks: UserBook[];

  @OneToMany(() => Wishlist, (wishlist) => wishlist.user)
  wishlists: Wishlist[];
}
