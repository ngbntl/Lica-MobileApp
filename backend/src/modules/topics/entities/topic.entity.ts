import { BaseEntity } from '@modules/shared/base/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Transform } from 'class-transformer';
import { HydratedDocument, Types } from 'mongoose';

export type TopicDocument = HydratedDocument<Topic>;

@Schema({
	timestamps: {
		createdAt: 'create_at',
		updatedAt: 'updated_at',
	},
	toJSON: {
		getters: true,
		virtuals: true,
	},
})
export class Topic extends BaseEntity {
	@Prop({
		unique: true,
		required: true,
	})
	name: string;

	@Prop()
	description: string;
}

export const TopicSchema = SchemaFactory.createForClass(Topic);
