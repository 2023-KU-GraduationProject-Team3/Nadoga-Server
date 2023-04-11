import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateWishlistDto {
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  isbn: number;
}
