import { CustomRepository } from 'src/customTypeOrm.decorator';
import { Repository } from 'typeorm';
import { research } from './research.entity';

@CustomRepository(research)
export class researchRepository extends Repository<research> {}
