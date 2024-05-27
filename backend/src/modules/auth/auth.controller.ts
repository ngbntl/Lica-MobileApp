import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';

import { SignUpDto } from './dto/sign-up.dto';
import { RequestWithUser } from 'src/types/requests.type';

@Controller('auth')
export class AuthController {
	constructor(private readonly auth_service: AuthService) {}

	@Post('sign-up')
	async signUp(@Body() sign_up_dto: SignUpDto) {
		return await this.auth_service.signUp(sign_up_dto);
	}

	@UseGuards(LocalAuthGuard)
	@Post('sign-in')
	async signIn(@Req() request: RequestWithUser) {
		const { user } = request;
		return await this.auth_service.signIn(user.id.toString());
	}
}
