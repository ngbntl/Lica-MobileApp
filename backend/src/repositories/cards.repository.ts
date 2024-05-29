import { Card, CardDocument } from '@modules/cards/entities/card.entity';
import { CardsRepositoryInterface } from '@modules/cards/interfaces/cards.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepositoryAbstract } from './base/base.abstract.repository';

@Injectable()
export class CardsRepository
	extends BaseRepositoryAbstract<CardDocument>
	implements CardsRepositoryInterface
{
	constructor(
		@InjectModel(Card.name)
		private readonly card_model: Model<CardDocument>,
	) {
		super(card_model);
	}
}
