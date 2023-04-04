import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
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
