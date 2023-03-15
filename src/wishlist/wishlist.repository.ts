import { CustomRepository } from 'src/customTypeOrm.decorator';
import { Repository } from 'typeorm';
import { Wishlist } from './wishlist.entity';

@CustomRepository(Wishlist)
export class WishlistRepository extends Repository<Wishlist> {}
