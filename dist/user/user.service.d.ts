import CreateUserDto from './dto/create-user.dto';
import { UserRepository } from './user.repository';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    getByEmail(email: string): Promise<import("./user.entity").User>;
    create(userData: CreateUserDto): Promise<import("./user.entity").User>;
}
