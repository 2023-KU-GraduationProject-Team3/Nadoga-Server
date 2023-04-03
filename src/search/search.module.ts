import { Module } from '@nestjs/common';
import { CustomTypeOrmModule } from 'src/customTypeOrm.module';
import { searchController } from './search.controller';
import { searchRepository } from './search.repository';
import { searchService } from './search.service';

@Module({
  imports: [CustomTypeOrmModule.forCustomRepository([searchRepository])],
  controllers: [searchController],
  providers: [searchService],
})
export class UserBookModule {}
