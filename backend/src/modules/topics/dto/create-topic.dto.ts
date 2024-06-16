import { IsNotEmpty, IsOptional } from 'class-validator';
import { Collection } from 'mongoose';

export class CreateTopicDto {
	@IsNotEmpty()
	name: string;

	@IsOptional()
	description: string;

	@IsOptional()
	collection?: any[];
}
