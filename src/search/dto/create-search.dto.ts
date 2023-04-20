import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateSearchDto {
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  isbn: number;
}
