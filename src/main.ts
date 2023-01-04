import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as passport from 'passport';

import { AppModule } from './app.module';
import { NewrelicInterceptor } from './interceptors/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.use(
    session({
      secret: 'keyboard',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.useGlobalInterceptors(new NewrelicInterceptor());
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(Number(process.env.APP_PORT) as unknown as number);
}
bootstrap();
