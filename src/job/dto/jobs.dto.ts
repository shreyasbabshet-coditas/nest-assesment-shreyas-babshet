export class CreateJobDto {
    title: string;
    description: string;
    location: string;
    deadline: Date;
    contact: number;
    email: string;
    archive?: boolean;
}

export class UpdateInterestDto {
    userId: string;
}