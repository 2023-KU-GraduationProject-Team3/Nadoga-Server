"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const customTypeOrm_decorator_1 = require("../customTypeOrm.decorator");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async createUser(createUserDto) {
        const user = new user_entity_1.User();
        user.email = createUserDto.email;
        user.password = createUserDto.password;
        user.name = createUserDto.name;
        user.genre = createUserDto.genre;
        user.age = createUserDto.age;
        user.gender = createUserDto.gender;
        user.region = createUserDto.region;
        await user.save();
        return user;
    }
    async findOneByEmail(email) {
        return this.findOneBy({ email: email });
    }
};
UserRepository = __decorate([
    (0, customTypeOrm_decorator_1.CustomRepository)(user_entity_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map