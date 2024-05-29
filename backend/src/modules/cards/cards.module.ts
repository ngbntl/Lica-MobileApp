import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Card, CardSchema } from './entities/card.entity';
import { CardsRepository } from '@repositories/cards.repository';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }]),
	],
	controllers: [CardsController],
	providers: [
		CardsService,
		{
			provide: 'FlashCardsRepositoryInterface',
			useClass: CardsRepository,
		},
	],
})
export class CardsModule {}
