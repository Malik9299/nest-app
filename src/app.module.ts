import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TodosModule } from './todos/todos.module';
import { Todo } from './todos/todo.entity';
import path, { join } from 'path';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { MyLoggerModule } from './my-logger/my-logger.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DATABASE'),
        // entities: [Todo],
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TodosModule,
    UsersModule,
    DatabaseModule,
    EmployeesModule,
    ThrottlerModule.forRoot([
      // {
      //   ttl: 60000, // time to live 60 seconds
      //   limit: 3,
      // }, // means 3 requests in 1 minute
      // Some Other settings
      {
        name: 'short',
        ttl: 60000, // time to live 1 seconds
        limit: 3,
      }, // means 3 requests in 1 second for same client not for total clients
      // {
      //   name: 'long',
      //   ttl: 60000, // time to live 1 seconds
      //   limit: 100,
      // },
      // means 100 requests in 1 minute for same client not for total clients
      // // Above to objects means no more than 3 request in 1 second and no more than 100 requests in 1 minute
    ]),
    MyLoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
