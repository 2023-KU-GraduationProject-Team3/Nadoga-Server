import { CustomRepository } from 'src/customTypeOrm.decorator';
import { Repository } from 'typeorm';
import { Review } from './review.entity';

@CustomRepository(Review)
export class ReviewRepository extends Repository<Review> {
  async getCollab(): Promise<any> {
    return this
      .query(`SELECT r.review_rating , r.book_isbn , r.user_id , u.user_genre , u.user_age , u.user_gender
      FROM review r
      INNER JOIN user u ON r.user_id  = u.id 
      ORDER BY r.create_at  DESC
      LIMIT 10;`);
  }
}
