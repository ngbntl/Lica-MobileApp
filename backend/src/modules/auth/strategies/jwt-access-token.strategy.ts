import { UsersService } from '@modules/users/users.service';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TokenPayload } from '../interfaces/token.interface';

@Injectable()
export class JwtAccessTokenStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly users_service: UsersService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: 'access_token_secret',
		});
	}

	async validate(payload: TokenPayload) {
		return await this.users_service.findOne(payload.user_id);
	}
}
