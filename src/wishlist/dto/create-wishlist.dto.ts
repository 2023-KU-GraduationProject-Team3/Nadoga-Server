import { IsDate, IsUUID } from 'class-validator';

export class CreateWishlistDto {
  @IsUUID()
  readonly userId: string;

  @IsUUID()
  readonly bookId: string;

  @IsDate()
  readonly createdAt: Date;
}
