import { IsArray, IsString } from 'class-validator';
import { Id } from '../../../interfaces';

export namespace TrainingAddTrainers {
  export const topic = 'training.add-trainers.command';

  export class Request {
    @IsArray()
    // @IsString()
    newTrainers: Id[];

    @IsString()
    trainingId: Id;
  }

  export class Response {}
}
