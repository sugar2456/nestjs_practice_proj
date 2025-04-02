import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';
import { CatModule } from './cat/cat.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [CatModule],
  controllers: [AppController, CatController],
  providers: [AppService, CatService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'cat', method: RequestMethod.POST })
      .forRoutes(CatController);
  }
}
