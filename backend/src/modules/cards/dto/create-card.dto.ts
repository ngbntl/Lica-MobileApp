import { Topic } from '@modules/topics/entities/topic.entity';
import { User } from '@modules/users/entities/user.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCardDto {
	@IsNotEmpty()
	vocabulary: string;

	@IsNotEmpty()
	definition: string;

	@IsOptional()
	pronunciation: string;

	@IsNotEmpty()
	user?: User;

	@IsNotEmpty()
	topic?: Topic;
}
