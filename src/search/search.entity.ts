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
export class search extends BaseEntity {
  //만약 한 명의 사용자가 여러 권의 책을 가질 수 있고, 한 권의 책이 여러 명의 사용자에게 속할 수 있다면, many-to-many 관계를 사용하는 것이 적절하다.
  //ManyToMany → @OneToMany, @ManyToOne 이렇게 풀어내고 연결 테이블용 user_book을 생성
  //연결 테이블이 단순히 연결만 하고 끝나지 않는다. 조인 테이블 자체에 대출시간 등 추가 데이터가 많이 들어갈 수 있다.
  // 하지만, 매핑 정보만 넣는 것이 가능하고, 추가 정보를 넣는 것 자체가 불가능하다.
  //그리고 중간 테이블이 숨겨져 있기 때문에 예상하지 못하는 쿼리들이 나간다.
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'book_id' })
  bookId: string;

  @ManyToOne(() => User, (user) => user.search)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Book, (book) => book.search)
  @JoinColumn({ name: 'book_id' })
  book: Book;

}
