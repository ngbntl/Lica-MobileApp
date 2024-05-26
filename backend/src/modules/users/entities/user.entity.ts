import { BaseEntity } from '@modules/shared/base/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Model } from 'mongoose';
import { UserRole } from '@modules/user-roles/entities/user-role.entity';
import { CardDocument } from '@modules/cards/entities/card.entity';
import { NextFunction } from 'express';
import { Mode } from 'fs';
import { CollectionDocument } from '@modules/collection/entities/collection.entity';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
export type UserDocument = HydratedDocument<User>;

export enum GENDER {
	Male = 'MALE',
	Female = 'FEMALE',
	Other = 'OTHER',
}
@Schema({
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	},
	toJSON: {
		getters: true,
		virtuals: true,
	},
})
export class User extends BaseEntity {
	@Prop({
		required: true,
		minlength: 2,
		maxlength: 60,
		set: (first_name: string) => {
			return first_name.trim();
		},
	})
	first_name: string;

	@Prop({
		required: true,
		minlength: 2,
		maxlength: 60,
		set: (last_name: string) => {
			return last_name.trim();
		},
	})
	last_name: string;

	@Prop({
		required: true,
		unique: true,
		match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
	})
	email: string;

	@Prop({
		match: /^([+]\d{2})?\d{10}$/,
		get: (phone_number: string) => {
			if (!phone_number) {
				return;
			}
			const last_three_digits = phone_number.slice(phone_number.length - 4);
			return `****-***-${last_three_digits}`;
		},
	})
	phone_number: string;

	@Prop({
		required: true,
		unique: true,
	})
	username: string;

	@Prop({
		required: true,
		select: false,
	})
	password: string;

	@Prop({
		default:
			'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
	})
	avatar: string;

	@Prop()
	date_of_birth: Date;

	@Prop({
		enum: GENDER,
	})
	gender: string;

	@Prop({ default: 0 })
	point: number;

	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: UserRole.name,
	})
	role: UserRole;

	@Prop()
	headline: string;

	@Prop()
	friendly_id: number;

	@Prop({
		default: 'cus_mock_id',
	})
	@Exclude()
	stripe_customer_id: string;

	// @Prop({
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: UserRole.name,
	// })
	// @Type(() => UserRole)
	// @Transform((value) => value.obj.role?.name, { toClassOnly: true })
	// role: UserRole;

	@Expose({ name: 'full_name' })
	get fullName(): string {
		return `${this.first_name} ${this.last_name}`;
	}
}

export const UserSchema = SchemaFactory.createForClass(User);

export const UserSchemaFactory = (
	card_model: Model<CardDocument>,
	collection_model: Model<CollectionDocument>,
) => {
	const user_schema = UserSchema;

	user_schema.pre('findOneAndDelete', async function (next: NextFunction) {
		const user = await this.model.findOne(this.getFilter());
		await Promise.all([
			card_model
				.deleteMany({
					user: user._id,
				})
				.exec(),
			collection_model
				.deleteMany({
					user: user._id,
				})
				.exec(),
		]);
		return next();
	});
	return user_schema;
};
