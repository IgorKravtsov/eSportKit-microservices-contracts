import { IsString } from 'class-validator';
import { Id } from '../../../interfaces';

export namespace TrainingAddOneLearner {
  export const topic = 'training.add-one-learner.command';

  export class Request {
    @IsString()
    newLearner: Id;

    @IsString()
    trainingId: Id;
  }

  export class Response {}
}
