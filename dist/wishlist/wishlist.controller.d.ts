import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { WishlistService } from './wishlist.service';
export declare class WishlistController {
    private readonly wishlistService;
    constructor(wishlistService: WishlistService);
    create(createWishlistDto: CreateWishlistDto): Promise<import("./wishlist.entity").Wishlist>;
    delete(id: string): Promise<void>;
}
