import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilters } from './all-exceptions.filters';

async function bootstrap() {
  // If you want to loger on app level
  // But we will apply on employee controller
  // const app = await NestFactory.create(AppModule, {
  //   bufferLogs: true,
  // });
  // app.useLogger(app.get(MyLoggerService));
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilters(httpAdapter));
  app.enableCors(); // This making this api as a public API means can access anyone
  app.setGlobalPrefix('api');
  await app.listen(18000);
}
bootstrap();
