import { Book } from 'src/book/book.entity';
import { User } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('research')
export class research extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'book_id' })
  bookId: string;

  @ManyToOne(() => User, (user) => user.research)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Book, (book) => book.research)
  @JoinColumn({ name: 'book_id' })
  book: Book;

}
