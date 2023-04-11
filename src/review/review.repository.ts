import { CustomRepository } from 'src/customTypeOrm.decorator';
import { Repository } from 'typeorm';
import { Review } from './review.entity';

@CustomRepository(Review)
export class ReviewRepository extends Repository<Review> {
  async getCollab(): Promise<any> {
    const result = await this
      .query(`SELECT r.review_rating, r.book_isbn, r.user_id, u.user_genre, u.user_age, u.user_gender, r.create_at
      FROM review r
      INNER JOIN user u ON r.user_id = u.id
      INNER JOIN (
        SELECT r2.user_id, MAX(r2.create_at) AS max_create_at
        FROM review r2
        GROUP BY r2.user_id
        ORDER BY max_create_at DESC
        LIMIT 10
      ) rmax ON r.user_id = rmax.user_id AND r.create_at = rmax.max_create_at
      ORDER BY u.id, r.create_at DESC;`);

  
    console.log(result); // 결과값 출력
  
    return result;
  }
}
