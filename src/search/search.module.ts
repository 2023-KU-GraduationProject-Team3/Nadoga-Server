import { Module } from '@nestjs/common';
import { CustomTypeOrmModule } from 'src/customTypeOrm.module';
import { searchController } from './search.controller';
import { SearchRepository } from './search.repository';
import { searchService } from './search.service';

@Module({
  imports: [CustomTypeOrmModule.forCustomRepository([SearchRepository])],
  controllers: [searchController],
  providers: [searchService],
})
export class SearchModule {}
