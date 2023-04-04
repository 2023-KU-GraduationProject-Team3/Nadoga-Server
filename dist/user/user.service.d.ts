import CreateUserDto from './dto/create-user.dto';
import { UserRepository } from './user.repository';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    createUser(createUserDto: CreateUserDto): Promise<import("./user.entity").User>;
    emailExists(email: string): Promise<boolean>;
}
