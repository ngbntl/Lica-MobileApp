import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { DatabaseConfig } from './configs/configuration.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config_service = app.get(ConfigService);
  const logger = new Logger(bootstrap.name);
  const database_env = config_service.get<DatabaseConfig>('database');
  logger.debug(database_env);
  logger.debug(`typeof PORT: ${typeof config_service.get('PORT')}`);

  await app.listen(3333);
}
bootstrap();
