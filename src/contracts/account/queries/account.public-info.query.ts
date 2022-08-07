import { IsString } from 'class-validator';
import { IUserPublicInfo } from '../../../interfaces';

export namespace AccountPublicInfo {
  export const topic = 'account.public-info.query';

  export class Request {
    @IsString()
    id: string;
  }

  export class Response {
    profile: IUserPublicInfo;
  }
}
