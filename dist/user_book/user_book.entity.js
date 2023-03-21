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
exports.UserBook = void 0;
const book_entity_1 = require("../book/book.entity");
const user_entity_1 = require("../user/user.entity");
const typeorm_1 = require("typeorm");
let UserBook = class UserBook extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserBook.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id' }),
    __metadata("design:type", String)
], UserBook.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'book_id' }),
    __metadata("design:type", String)
], UserBook.prototype, "bookId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'loan_date',
        type: 'date',
        comment: '대출 일',
    }),
    __metadata("design:type", Date)
], UserBook.prototype, "loanDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'return_date',
        type: 'date',
        comment: '반납 일',
    }),
    __metadata("design:type", Date)
], UserBook.prototype, "returnDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.userBooks),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], UserBook.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => book_entity_1.Book, (book) => book.userBooks),
    (0, typeorm_1.JoinColumn)({ name: 'book_id' }),
    __metadata("design:type", book_entity_1.Book)
], UserBook.prototype, "book", void 0);
UserBook = __decorate([
    (0, typeorm_1.Entity)('user_book')
], UserBook);
exports.UserBook = UserBook;
//# sourceMappingURL=user_book.entity.js.map