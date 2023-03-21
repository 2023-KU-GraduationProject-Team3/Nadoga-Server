"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBookRepository = void 0;
const customTypeOrm_decorator_1 = require("../customTypeOrm.decorator");
const typeorm_1 = require("typeorm");
const user_book_entity_1 = require("./user_book.entity");
let UserBookRepository = class UserBookRepository extends typeorm_1.Repository {
};
UserBookRepository = __decorate([
    (0, customTypeOrm_decorator_1.CustomRepository)(user_book_entity_1.UserBook)
], UserBookRepository);
exports.UserBookRepository = UserBookRepository;
//# sourceMappingURL=user_book.repository.js.map