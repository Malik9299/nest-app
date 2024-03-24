import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersMiddleware } from './users.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {
  //   configure(consumer: MiddlewareConsumer) {
  //     consumer.apply(UsersMiddleware).forRoutes({
  //       path: 'users',
  //       method: RequestMethod.POST,
  //     });
  //   }
}
