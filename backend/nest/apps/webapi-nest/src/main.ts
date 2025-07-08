/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { HttpExceptionFilter } from './cars/exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(
    new HttpExceptionFilter()
  )
  const config = new DocumentBuilder()
    .setTitle('Web API Nest')
    .setDescription('The Web API Nest API description')
    .setVersion('1.0')
    .addTag('webapi-nest')
    .build();
  const documentFactory = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/', app, documentFactory, {
    customSiteTitle: 'Web API Nest', jsonDocumentUrl: '/api-json'
  })

  // const globalPrefix = 'api';

  //app.setGlobalPrefix(globalPrefix);

  const port = process.env.PORT || 3000;
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/`
  );
}

bootstrap();
