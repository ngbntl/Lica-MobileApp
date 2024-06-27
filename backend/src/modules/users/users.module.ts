import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { User, UserSchemaFactory } from './entities/user.entity';
import { UsersRepository } from '@repositories/users.repository';
import { UserRolesModule } from '@modules/user-roles/user-roles.module';
import { Card, CardSchema } from '@modules/cards/entities/card.entity';
import { Collection } from 'mongoose';
import { CollectionSchema } from '@modules/collections/entities/collection.entity';

@Module({
	imports: [
		UserRolesModule,
		MongooseModule.forFeatureAsync([
			{
				name: User.name,
				useFactory: UserSchemaFactory,
				inject: [getModelToken(Card.name), getModelToken(Collection.name)],
				imports: [
					MongooseModule.forFeature([
						{ name: Card.name, schema: CardSchema },
						{ name: Collection.name, schema: CollectionSchema },
					]),
				],
			},
		]),
	],
	controllers: [UsersController],
	providers: [
		UsersService,
		{ provide: 'UsersRepositoryInterface', useClass: UsersRepository },
	],
	exports: [UsersService],
})
export class UsersModule {}
