import { Book } from 'src/book/book.entity';
import { User } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

//Wishlist는 한 명의 유저가 여러 개의 책을 담을 수 있기 때문에 OneToMany 관계가 적절

@Entity('wishlist')
export class Wishlist extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Column({ name: 'wishlist_id' })
  id: string;

  @CreateDateColumn({ name: 'whishlist_date', comment: '위시리스트 생성일' })
  whishDate: Date;

  @ManyToOne(() => User, (user) => user.wishlists)
  user: User;

  @OneToMany(() => Book, (book) => book.wishlist)
  books: Book[];
}
