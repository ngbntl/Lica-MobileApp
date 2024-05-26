import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	SerializeOptions,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import MongooseClassSerializerInterceptor from 'src/interceptors/mongoose-class-serializer.interceptor';
import { User } from './entities/user.entity';

@UseInterceptors(MongooseClassSerializerInterceptor(User))
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}
	@Get()
	findAll() {
		return this.usersService.findAll();
	}
	@Post()
	create(@Body() create_user_dto: CreateUserDto) {
		return this.usersService.create(create_user_dto);
	}
}
