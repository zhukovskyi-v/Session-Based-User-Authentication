import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule, MongooseModuleFactoryOptions } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (...args): Promise<MongooseModuleFactoryOptions> => {
        console.log('configService', args);
        const opt: MongooseModuleFactoryOptions = {
          uri: 'mongodb+srv://root:root@cluster0.4m9bqjz.mongodb.net/?retryWrites=true&w=majority',
          dbName: 'lohh',
        } as MongooseModuleFactoryOptions;
        return opt;
      },
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
