"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistModule = void 0;
const common_1 = require("@nestjs/common");
const book_repository_1 = require("../book/book.repository");
const customTypeOrm_module_1 = require("../customTypeOrm.module");
const user_repository_1 = require("../user/user.repository");
const wishlist_controller_1 = require("./wishlist.controller");
const wishlist_repository_1 = require("./wishlist.repository");
const wishlist_service_1 = require("./wishlist.service");
let WishlistModule = class WishlistModule {
};
WishlistModule = __decorate([
    (0, common_1.Module)({
        imports: [
            customTypeOrm_module_1.CustomTypeOrmModule.forCustomRepository([wishlist_repository_1.WishlistRepository]),
            customTypeOrm_module_1.CustomTypeOrmModule.forCustomRepository([user_repository_1.UserRepository]),
            customTypeOrm_module_1.CustomTypeOrmModule.forCustomRepository([book_repository_1.BookRepository]),
        ],
        controllers: [wishlist_controller_1.WishlistController],
        providers: [wishlist_service_1.WishlistService],
    })
], WishlistModule);
exports.WishlistModule = WishlistModule;
//# sourceMappingURL=wishlist.module.js.map