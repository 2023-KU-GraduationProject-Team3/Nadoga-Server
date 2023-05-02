import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { GENDER } from '../user.entity';

export default class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;   

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(GENDER)
  gender: GENDER;

  @IsNumber()
  age: number;

  @IsString()
  genre: string;

}
