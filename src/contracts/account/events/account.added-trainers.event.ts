import { IsArray, IsString } from 'class-validator';

export namespace AccountAddedTrainersEvent {
  export const topic = 'account.added-trainers.event';

  export class Request {
    @IsString()
    userId: string;

    @IsArray()
    @IsString({ each: true })
    newTrainerIds: string[];
  }
}
