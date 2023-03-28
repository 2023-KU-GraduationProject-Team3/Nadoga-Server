import { Injectable } from '@nestjs/common';
import { researchRepository } from './research.repository';

@Injectable()
export class researchService {
  constructor(private reasrchrepositoy: researchRepository) {}
}
