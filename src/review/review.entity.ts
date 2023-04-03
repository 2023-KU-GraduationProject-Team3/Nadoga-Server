import { Book } from 'src/book/book.entity';
import { User } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('review')
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'review_content',
    type: 'text',
    comment: '리뷰 내용',
  })
  content: string;

  @Column({
    name: 'review_rating',
    type: 'double',
    comment: '리뷰 평점',
  })
  rating: number;

  @ManyToOne(() => Book, (book) => book.reviews)
  @JoinColumn({ name: 'book_id' })
  book: Book;

  @ManyToOne(() => User, (user) => user.reviews)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
