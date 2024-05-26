import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DatabaseConfig } from './configs/configuration.config';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const config_service = app.get(ConfigService);
	const logger = new Logger(bootstrap.name);

	app.useGlobalPipes(new ValidationPipe());
	await app.listen(config_service.get('PORT'), () => {
		logger.log(`Server started on port ${config_service.get('PORT')}`);
	});
}
bootstrap();
