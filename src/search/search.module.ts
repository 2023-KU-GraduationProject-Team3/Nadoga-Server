import { Module } from '@nestjs/common';
import { CustomTypeOrmModule } from 'src/customTypeOrm.module';
import { searchController } from './search.controller';
import { SearchRepository } from './search.repository';
import { searchService } from './search.service';
import { UserRepository } from 'src/user/user.repository';

@Module({
  imports: [
    CustomTypeOrmModule.forCustomRepository([SearchRepository]),
    CustomTypeOrmModule.forCustomRepository([UserRepository]),
  ],
  controllers: [searchController],
  providers: [searchService],
})
export class SearchModule {}
