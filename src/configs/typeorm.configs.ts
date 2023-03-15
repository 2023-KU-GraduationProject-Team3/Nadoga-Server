import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  // 여기 mysql에 맞게 다시 적기 -병현
  // type: 'mysql',
  // host: 'localhost',
  // port: 5432,
  // username: 'postgres',
  // password: 'password',
  // database: 'postgres',
  // entities: [__dirname + '/../**/*.entity.{js,ts}'],
  // synchronize: true,
  // migrations: [],
  // subscribers: [],
};
