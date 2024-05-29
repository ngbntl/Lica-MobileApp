import { Module } from '@nestjs/common';
import { CollectionsService } from './collection.service';
import { CollectionController } from './collection.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Collection, CollectionSchema } from './entities/collection.entity';
import { CollectionRepository } from '@repositories/collection.repository';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Collection.name, schema: CollectionSchema },
		]),
	],
	controllers: [CollectionController],
	providers: [
		CollectionsService,
		{
			provide: 'CollectionRepositoryInterface',
			useClass: CollectionRepository,
		},
	],
})
export class CollectionsModule {}
