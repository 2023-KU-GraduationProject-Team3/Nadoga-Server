"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeORMConfig = void 0;
exports.typeORMConfig = {
    type: 'mysql',
    host: 'nadoga-db.cu4pyfmlcefs.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    username: 'root',
    password: 'min9211301',
    database: 'nadogaDB',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: false,
    migrations: [],
    subscribers: [],
};
//# sourceMappingURL=typeorm.configs.js.map