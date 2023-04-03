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
exports.User = exports.GENDER = void 0;
var GENDER;
(function (GENDER) {
    GENDER[GENDER["MEN"] = 0] = "MEN";
    GENDER[GENDER["WOMEN"] = 1] = "WOMEN";
    GENDER[GENDER["UNKNOWN"] = 2] = "UNKNOWN";
})(GENDER = exports.GENDER || (exports.GENDER = {}));
const review_entity_1 = require("../review/review.entity");
const search_entity_1 = require("../search/search.entity");
const wishlist_entity_1 = require("../wishlist/wishlist.entity");
const typeorm_1 = require("typeorm");
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_email',
        type: 'varchar',
        length: 25,
        comment: '유저 이메일',
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_password',
        type: 'varchar',
        length: 255,
        comment: '유저 비밀번호',
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_name',
        type: 'varchar',
        length: 255,
        comment: '유저 이름',
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_gender',
        type: 'enum',
        enum: GENDER,
        comment: '유저 성별(MEN, WOMEN)',
    }),
    __metadata("design:type", Number)
], User.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_age',
        type: 'int',
        comment: '유저 나이',
    }),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_genre',
        type: 'varchar',
        length: 30,
        comment: '유저가 선호하는 장르',
    }),
    __metadata("design:type", String)
], User.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'create_at', comment: '생성일' }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'update_at', comment: '수정일' }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => search_entity_1.search, (search) => search.user),
    __metadata("design:type", Array)
], User.prototype, "search", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => wishlist_entity_1.Wishlist, (wishlist) => wishlist.user),
    __metadata("design:type", Array)
], User.prototype, "wishlists", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => review_entity_1.Review, (review) => review.book),
    __metadata("design:type", Array)
], User.prototype, "reviews", void 0);
User = __decorate([
    (0, typeorm_1.Entity)('user'),
    (0, typeorm_1.Unique)(['email'])
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map