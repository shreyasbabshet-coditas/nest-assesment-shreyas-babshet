import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IJob } from '../interfaces';
import { Model, ObjectId, ObjectId } from 'mongoose';
import { CreateJobDto } from '../dto/jobs.dto';

@Injectable()
export class JobsService {

    constructor(@InjectModel('jobs') private readonly jobsModel: Model<IJob[]>) { }

    async create(createJobPayload: CreateJobDto) {
        const jobPayload = {
            ...createJobPayload,
            interested: [],
            archive: false
        }
        return await this.jobsModel.create(jobPayload);
    }

    async getAll(): Promise<IJob[]> {
        return await this.jobsModel.find();
    }

    async updateInterest(id: ObjectId, userId: string) {
        return await this.jobsModel.findOneAndUpdate({ _id: id }, { $push: { interests: userId } },);
    }

}
