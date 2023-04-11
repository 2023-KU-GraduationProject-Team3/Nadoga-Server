import { CustomRepository } from 'src/customTypeOrm.decorator';
import { Repository } from 'typeorm';
import { Review } from './review.entity';

@CustomRepository(Review)
export class ReviewRepository extends Repository<Review> {
  async getCollab(): Promise<any> {
    return this.query(`SELECT r.rating, r.book_isbn, r.user_id, u.genre, u.age, u.gender, r.createdAt
    FROM review r
    INNER JOIN user u ON r.user_id = u.id
    WHERE r.createdAt IN (
      SELECT r2.createdAt
      FROM review r2
      WHERE r2.user_id = r.user_id
      ORDER BY r2.createdAt DESC
      LIMIT 10
    )
    ORDER BY u.id, r.createdAt DESC;`);
  }
}
