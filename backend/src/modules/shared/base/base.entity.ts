import { Prop } from '@nestjs/mongoose';

export class BaseEntity {
	id?: string;

	@Prop({ default: null })
	deleted_at: Date;
}
