import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
import { JobsModule } from './job/jobs.module';
import { userModule } from './user/user.module';

@Module({
  imports: [JobsModule, userModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
