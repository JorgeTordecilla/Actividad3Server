import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { TodoModule } from './todo.module';
const PORT = process.env.PORT || 4000;
async function bootstrap() {
  const app = await NestFactory.create(TodoModule);
  const config = new DocumentBuilder()
    .setTitle('Servidor manejo de TODO´s')
    .setDescription(
      `Actividad 3 - Arquitectura Cliente Servidor
    
    Ariel Fernández Gualdrón
      Código: 100075326
    Cristhell Orozco Padilla
      Código 100075634
    Jorge Iván Tordecilla Ruíz
      Código 100075145
    `,
    )
    .setVersion('1.0')
    .addTag('Todos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //solo pasan los datos que estan definidos en el DTO
      forbidNonWhitelisted: true, //envia una alerta a la API que esta enviando valores extra
    }),
  );
  app.enableCors();
  await app.listen(PORT);
}
bootstrap();
