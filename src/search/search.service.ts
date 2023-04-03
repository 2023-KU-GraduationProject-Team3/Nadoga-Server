import { Injectable } from '@nestjs/common';
import { searchRepository } from './search.repository';

@Injectable()
export class searchService {
  constructor(private searchrepositoy: searchRepository) {}
}
