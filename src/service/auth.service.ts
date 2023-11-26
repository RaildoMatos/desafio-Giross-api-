// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async validateUser(username: string, password: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { username, password },
    });

    if (!user) {
      return null;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...result } = user;
    return result;
  }

  async login(user: { username: string; password: string }) {
    const validatedUser = await this.validateUser(user.username, user.password);

    if (!validatedUser) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { username: validatedUser.username, sub: validatedUser.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
