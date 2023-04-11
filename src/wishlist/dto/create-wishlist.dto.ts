import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateWishlistDto {
  @IsUUID()
  readonly userId: string;

  @IsNotEmpty()
  isbn: number;
}
