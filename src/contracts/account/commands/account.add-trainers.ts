import { IsArray, IsString } from 'class-validator';
import { Id } from '../../../interfaces';

export namespace AccountAddTrainers {
  export const topic = 'account.add-trainers.command';

  export class Request {
    @IsString()
    id: string;

    @IsArray()
    @IsString({ each: true })
    trainerIds: Id[];
  }

  export class Response {}
}
