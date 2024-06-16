import { BaseEntity } from '@modules/shared/base/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import * as mongoose from 'mongoose';
import { Collection } from '@modules/collections/entities/collection.entity';

export type TopicDocument = mongoose.HydratedDocument<Topic>;

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

	@Prop({ type: [{ type: mongoose.Schema.Types.String, ref: 'Collection' }] })
	collections: Collection[];
}

export const TopicSchema = SchemaFactory.createForClass(Topic);
