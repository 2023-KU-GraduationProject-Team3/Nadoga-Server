"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBookModule = void 0;
const common_1 = require("@nestjs/common");
const customTypeOrm_module_1 = require("../customTypeOrm.module");
const user_book_controller_1 = require("./user_book.controller");
const user_book_repository_1 = require("./user_book.repository");
const user_book_service_1 = require("./user_book.service");
let UserBookModule = class UserBookModule {
};
UserBookModule = __decorate([
    (0, common_1.Module)({
        imports: [customTypeOrm_module_1.CustomTypeOrmModule.forCustomRepository([user_book_repository_1.UserBookRepository])],
        controllers: [user_book_controller_1.UserBookController],
        providers: [user_book_service_1.UserBookService],
    })
], UserBookModule);
exports.UserBookModule = UserBookModule;
//# sourceMappingURL=user_book.module.js.map