import { BaseEntity } from '@modules/shared/base/base.entity';
import { Topic } from '@modules/topics/entities/topic.entity';
import { User } from '@modules/users/entities/user.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type CardDocument = mongoose.HydratedDocument<Card>;
@Schema({
	collection: 'cards',
})
export class Card extends BaseEntity {
	@Prop({ required: true })
	vocabulary: string;

	@Prop({})
	image: string;

	@Prop({ required: true })
	definition: string;

	@Prop({})
	meaning: string;

	@Prop()
	pronunciation?: string;

	@Prop({ default: [], type: [String] })
	examples: string[];

	@Prop({ default: false })
	is_public: boolean;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
	user: User;

	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' }] })
	topics: Topic[];
}

export const CardSchema = SchemaFactory.createForClass(Card);
