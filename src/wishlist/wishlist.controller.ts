import { Body, Controller, Delete, Param, Post, Get } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { WishlistService } from './wishlist.service';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Get('/:id')
  async getWishlistByUserId(@Param('id') id: string) {
    return this.wishlistService.getWishlistByUserId(id);
  }

  @Post()
  async create(@Body() createWishlistDto: CreateWishlistDto) {
    return this.wishlistService.create(createWishlistDto);
  }

  @Delete('/:id/:isbn')
  async delete(@Param('id') id: string, @Param('isbn') isbn: number) {
    return this.wishlistService.delete(id, isbn);
  }

  // async delete(@Param('id') id: string): Promise<void> {
  //   await this.wishlistService.delete(id);
  // }
}
