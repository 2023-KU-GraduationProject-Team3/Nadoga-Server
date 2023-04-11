import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateReviewDto {
  @IsUUID()
  userId: string;

  @IsNumber()
  rating: number;

  @IsString()
  content: string;

  @IsNotEmpty()
  isbn: number;
}
