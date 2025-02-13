import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,    // Automatically transform query params into the correct type (string to number)
      whitelist: true,    // Automatically removes properties not in the DTO
      forbidNonWhitelisted: true, // Returns error if non-whitelisted properties are passed
    })
  );

  await app.listen(3000);
}
bootstrap();
