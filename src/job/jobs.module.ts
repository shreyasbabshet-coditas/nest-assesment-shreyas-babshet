import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsService } from './jobs/jobs.service';
import { JobsController } from './jobs/jobs.controller';
import { JobsModal } from './models/jobs.model';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'jobs', schema: JobsModal }])],
    controllers: [JobsController],
    providers: [JobsService],
})
export class JobsModule { }
