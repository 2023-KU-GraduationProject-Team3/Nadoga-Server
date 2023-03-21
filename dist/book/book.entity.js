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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const review_entity_1 = require("../review/review.entity");
const user_book_entity_1 = require("../user_book/user_book.entity");
const wishlist_entity_1 = require("../wishlist/wishlist.entity");
const typeorm_1 = require("typeorm");
let Book = class Book extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Book.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'book_name',
        type: 'varchar',
        length: 255,
        comment: '도서 이름',
    }),
    __metadata("design:type", String)
], Book.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'book_author',
        type: 'varchar',
        length: 255,
        comment: '도서 저자',
    }),
    __metadata("design:type", String)
], Book.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'book_publisher',
        type: 'varchar',
        length: 255,
        comment: '출판사',
    }),
    __metadata("design:type", String)
], Book.prototype, "publisher", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'book_publication_date',
        type: 'date',
        comment: '출판일',
    }),
    __metadata("design:type", Date)
], Book.prototype, "publicationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'book_image_url',
        type: 'text',
        comment: '책 이미지 URL',
    }),
    __metadata("design:type", String)
], Book.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'book_description',
        type: 'text',
        comment: '책 설명',
    }),
    __metadata("design:type", String)
], Book.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'book_genre',
        type: 'varchar',
        length: 30,
        comment: '도서의 장르',
    }),
    __metadata("design:type", String)
], Book.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_book_entity_1.UserBook, userBook => userBook.book),
    __metadata("design:type", Array)
], Book.prototype, "userBooks", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => review_entity_1.Review, review => review.book),
    __metadata("design:type", Array)
], Book.prototype, "reviews", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => wishlist_entity_1.Wishlist, wishlist => wishlist.books),
    __metadata("design:type", wishlist_entity_1.Wishlist)
], Book.prototype, "wishlist", void 0);
Book = __decorate([
    (0, typeorm_1.Entity)('book')
], Book);
exports.Book = Book;
//# sourceMappingURL=book.entity.js.map