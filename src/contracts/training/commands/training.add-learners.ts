import { IsArray, IsString } from 'class-validator';
import { Id } from '../../../interfaces';

export namespace TrainingAddLearners {
  export const topic = 'training.add-learners.command';

  export class Request {
    @IsArray()
    // @IsString()
    newLearners: Id[];

    @IsString()
    trainingId: Id;
  }

  export class Response {}
}
