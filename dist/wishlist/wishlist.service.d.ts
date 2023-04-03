import { BookRepository } from 'src/book/book.repository';
import { UserRepository } from 'src/user/user.repository';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { Wishlist } from './wishlist.entity';
import { WishlistRepository } from './wishlist.repository';
export declare class WishlistService {
    private wishlistRepository;
    private userRepository;
    private bookRepository;
    constructor(wishlistRepository: WishlistRepository, userRepository: UserRepository, bookRepository: BookRepository);
    create(createWishlistDto: CreateWishlistDto): Promise<Wishlist>;
    delete(id: number): Promise<void>;
}
