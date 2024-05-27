import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { UsersModule } from '@modules/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtAccessTokenStrategy } from './strategies/jwt-access-token.strategy';

@Module({
	imports: [UsersModule, PassportModule, JwtModule.register({})],
	controllers: [AuthController],
	providers: [AuthService, LocalStrategy, JwtAccessTokenStrategy],
})
export class AuthModule {}
