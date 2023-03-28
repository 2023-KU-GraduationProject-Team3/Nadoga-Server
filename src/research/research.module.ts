import { Module } from '@nestjs/common';
import { CustomTypeOrmModule } from 'src/customTypeOrm.module';
import { researchController } from './research.controller';
import { researchRepository } from './research.repository';
import { researchService } from './research.service';

@Module({
  imports: [CustomTypeOrmModule.forCustomRepository([researchRepository])],
  controllers: [researchController],
  providers: [researchService],
})
export class UserBookModule {}
