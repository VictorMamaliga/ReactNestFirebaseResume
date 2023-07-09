import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// const express = require('express');
// const projectsRouter = require('./routes/projectsRouter'); // adjusted path to the router
// const app = express();

// app.use(express.json());
// app.use('/projects', projectsRouter);

// app.listen(3000, () => console.log('Server started on port 3000'));


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
