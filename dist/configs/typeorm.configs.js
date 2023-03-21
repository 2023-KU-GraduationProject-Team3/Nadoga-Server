"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeORMConfig = void 0;
exports.typeORMConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'min9211301',
    database: 'nadoga',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    migrations: [],
    subscribers: [],
};
//# sourceMappingURL=typeorm.configs.js.map