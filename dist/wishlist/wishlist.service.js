"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const book_repository_1 = require("../book/book.repository");
const user_repository_1 = require("../user/user.repository");
const wishlist_entity_1 = require("./wishlist.entity");
const wishlist_repository_1 = require("./wishlist.repository");
let WishlistService = class WishlistService {
    constructor(wishlistRepository, userRepository, bookRepository) {
        this.wishlistRepository = wishlistRepository;
        this.userRepository = userRepository;
        this.bookRepository = bookRepository;
    }
    async create(createWishlistDto) {
        const wishlist = new wishlist_entity_1.Wishlist();
        wishlist.whishDate = createWishlistDto.createdAt;
        const user = await this.userRepository.findOne({
            where: { id: createWishlistDto.userId },
        });
        wishlist.user = user;
        const book = await this.bookRepository.findOne({
            where: { id: createWishlistDto.bookId },
        });
        wishlist.book = book;
        return this.wishlistRepository.save(wishlist);
    }
    async delete(id) {
        await this.wishlistRepository.delete(id);
    }
};
WishlistService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wishlist_repository_1.WishlistRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(user_repository_1.UserRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(book_repository_1.BookRepository)),
    __metadata("design:paramtypes", [wishlist_repository_1.WishlistRepository,
        user_repository_1.UserRepository,
        book_repository_1.BookRepository])
], WishlistService);
exports.WishlistService = WishlistService;
//# sourceMappingURL=wishlist.service.js.map