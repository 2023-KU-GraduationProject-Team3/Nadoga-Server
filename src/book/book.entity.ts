import { Review } from 'src/review/review.entity';
import { search } from 'src/search/search.entity';
import { Wishlist } from 'src/wishlist/wishlist.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('book')
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
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

  @OneToMany(() => search, (search) => search.book)
  search: search[];

  @OneToMany(() => Review, (review) => review.book)
  reviews: Review[];

  @OneToMany(() => Wishlist, (wishlist) => wishlist.book)
  wishlists: Wishlist[];
}
