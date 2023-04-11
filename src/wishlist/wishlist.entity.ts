import { User } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('wishlist')
export class Wishlist extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'whislist_date', comment: '위시리스트 생성일' })
  whishDate: Date;

  @ManyToOne(() => User, (user) => user.wishlists)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
