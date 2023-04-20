import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { searchService } from './search.service';
import { Search } from './search.entity';
import { CreateSearchDto } from './dto/create-search.dto';

@Controller('search')
export class searchController {
  constructor(private searchService: searchService) {}

  @Get('/')
  getAllSearch(): Promise<Search[]> {
    return this.searchService.getAllSearch();
  }

  @Get('/:id')
  getSearchByUserId(@Param('id') id: string): Promise<Search> {
    return this.searchService.getSearchByUserId(id);
  }

  @Post()
  async createSearch(
    @Body() createSearchDto: CreateSearchDto,
  ): Promise<Search> {
    return this.searchService.createSearchById(createSearchDto);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.searchService.deleteSearchById(id);
  }
}
