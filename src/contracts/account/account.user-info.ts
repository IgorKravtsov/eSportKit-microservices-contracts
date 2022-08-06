import { IsString } from 'class-validator';
import { IUser } from 'interfaces';

export namespace AccountGetInfo {
  export const topic = 'account.user-info.query';

  export class Request {
    @IsString()
    id: string;
  }

  export class Response {
    user: IUser;
  }
}