import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApplicationAuthGuard } from './auth/guards/application-auth.guard';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { DatabaseModule } from './database/database.module';
import { Connection } from 'typeorm';
import { HttpExceptionFilter } from './common/exception-filters/http-exception.filter';
import { APP_GUARD, APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { LoggerModule } from './common/logger/logger.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }), // .env를 애플리케이선 전역에서 사용하기 위함
    DatabaseModule,
    LoggerModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ApplicationAuthGuard,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
