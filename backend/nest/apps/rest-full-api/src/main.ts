import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('REST Full API')
    .setDescription('The REST Full API description')
    .setVersion('1.0')
    .addTag('rest-full-api')
    .build();
  const documentFactory = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/', app, documentFactory, {
    customSiteTitle: 'REST Full API', jsonDocumentUrl: '/api-json'
  });
  app.useGlobalFilters(
    new HttpExceptionFilter()
  )
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
