import { IsArray, IsDateString, IsOptional, IsString } from 'class-validator';
import { Id } from '../../../interfaces';

export namespace TrainingCreate {
  export const topic = 'training.create.command';

  export class Request {
    @IsString()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsDateString()
    trainingDateTime: Date;

    @IsString()
    gymId: Id;

    @IsOptional()
    @IsArray()
    learners?: Id[];

    @IsOptional()
    @IsArray()
    trainers?: Id[];

    @IsString()
    createdBy: string;
  }

  export class Response {
    id: Id;
  }
}
