import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'jsonwebtoken';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(payload: JwtPayload) {
    const { email } = payload;
    const user = await this.userService.findByEmail(email);
    return user;
  }

  async login(user: any) {
    const payload: JwtPayload = { email: user.email };
    const accessToken = this.jwtService.sign(payload);
    return {
      access_token: accessToken,
    };
  }
}
