import { Inject, Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from 'src/services/base/base.abstract.service';
import { Card } from './entities/card.entity';
import { CardsRepositoryInterface } from './interfaces/cards.interface';

@Injectable()
export class CardsService extends BaseServiceAbstract<Card> {
	constructor(
		@Inject('FlashCardsRepositoryInterface')
		private readonly cards_repository: CardsRepositoryInterface,
	) {
		super(cards_repository);
	}
}
