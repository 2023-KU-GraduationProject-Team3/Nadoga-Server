import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { WishlistService } from './wishlist.service';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post()
  async create(@Body() createWishlistDto: CreateWishlistDto) {
    return this.wishlistService.create(createWishlistDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.wishlistService.delete(id);
  }
}
