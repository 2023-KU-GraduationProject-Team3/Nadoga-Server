import { GENDER } from '../user.entity';
export default class CreateUserDto {
    email: string;
    readonly password: string;
    name: string;
    gender: GENDER;
    age: number;
    genre: string;
    region: string;
}
