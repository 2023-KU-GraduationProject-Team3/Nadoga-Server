import { Module } from '@nestjs/common';
import { CustomTypeOrmModule } from 'src/customTypeOrm.module';
import { searchController } from './search.controller';
import { SearchRepository } from './search.repository';
import { searchService } from './search.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [CustomTypeOrmModule.forCustomRepository([SearchRepository]),UserModule],
  controllers: [searchController],
  providers: [searchService],
})
export class SearchModule {}
