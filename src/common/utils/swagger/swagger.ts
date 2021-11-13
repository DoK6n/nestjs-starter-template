import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: NestExpressApplication) {
  const options = new DocumentBuilder()
    .setTitle('nestjs-startkit')
    .setDescription('NestJS API Documentation')
    .setContact('Dok6n', 'https://github.com/Dok6n', 'ehrbs2018@gmail.com')
    .setVersion('1.0')
    .addApiKey(
      {
        type: 'apiKey',
        description: 'Example: 484263dq-88cq-4c4r-bqw5-1234cse53e4f',
        name: 'uid',
        in: 'header',
      },
      'uid',
    )
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-docs', app, document);
}
