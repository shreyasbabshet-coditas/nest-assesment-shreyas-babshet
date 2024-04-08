import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { userModel } from './models/user.model';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'users', schema: userModel }])],
    controllers: [UserController],
    providers: [UserService],
})
export class userModule { }
