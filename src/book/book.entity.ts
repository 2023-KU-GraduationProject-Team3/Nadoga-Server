import { Review } from 'src/review/review.entity';
import { UserBook } from 'src/user_book/user_book.entity';
import { Wishlist } from 'src/wishlist/wishlist.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('book')
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Column({ name: 'book_id' })
  id: string;

  @Column({
    name: 'book_name',
    type: 'varchar',
    length: 255,
    comment: '도서 이름',
  })
  name: string;

  @Column({
    name: 'book_author',
    type: 'varchar',
    length: 255,
    comment: '도서 저자',
  })
  author: string;

  @Column({
    name: 'book_publisher',
    type: 'varchar',
    length: 255,
    comment: '출판사',
  })
  publisher: string;

  @Column({
    name: 'book_publication_date',
    type: 'date',
    comment: '출판일',
  })
  publicationDate: Date;

  @Column({
    name: 'book_image_url',
    type: 'text',
    comment: '책 이미지 URL',
  })
  imageUrl: string;

  @Column({
    name: 'book_description',
    type: 'text',
    comment: '책 설명',
  })
  description: string;

  @Column({
    name: 'book_genre',
    type: 'varchar',
    length: 30,
    comment: '도서의 장르',
  })
  genre: string;

  @OneToMany(() => UserBook, (userBook) => userBook.book)
  userBooks: UserBook[];

  @OneToMany(() => Review, (review) => review.book)
  reviews: Review[];

  @ManyToOne(() => Wishlist, (wishlist) => wishlist.books)
  wishlist: Wishlist;
}
