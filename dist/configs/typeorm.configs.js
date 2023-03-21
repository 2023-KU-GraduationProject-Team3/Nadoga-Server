"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeORMConfig = void 0;
exports.typeORMConfig = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'nadoga',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    migrations: [],
    subscribers: [],
};
//# sourceMappingURL=typeorm.configs.js.map