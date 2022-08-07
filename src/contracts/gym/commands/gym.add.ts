import { IsArray, IsOptional, IsString } from 'class-validator';
import { Id } from '../../../interfaces';

export namespace GymAdd {
  export const topic = 'gym.add.command';

  export class Request {
    @IsString()
    title: string;

    @IsString()
    address: string;

    @IsString()
    @IsOptional()
    img?: string;

    @IsArray()
    @IsOptional()
    // @IsString({ each: true })
    trainerIds?: Id[];
  }

  export class Response {
    id: string;
  }
}
