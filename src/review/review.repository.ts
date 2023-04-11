import { CustomRepository } from 'src/customTypeOrm.decorator';
import { Repository } from 'typeorm';
import { Review } from './review.entity';

@CustomRepository(Review)
export class ReviewRepository extends Repository<Review> {
  async getCollab(): Promise<any> {
    return this.query(`SELECT * from user`);
  }
}
