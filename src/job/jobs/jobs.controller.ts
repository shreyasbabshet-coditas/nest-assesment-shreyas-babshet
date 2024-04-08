import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateJobDto, UpdateInterestDto } from '../dto/jobs.dto';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {

    constructor(private readonly jobsService: JobsService) { }

    @Get()
    async getAllJobs() {
        return await this.jobsService.getAll();
    }

    @Post()
    async createNew(@Body() createJobDto: CreateJobDto) {
        return await this.jobsService.create(createJobDto);
    }

    @Patch('showInterest/:id')
    async showInterest(@Param('id') id, @Body() updateInterest: UpdateInterestDto) {
        return await this.jobsService.updateInterest(id, updateInterest.userId)
    }
}
