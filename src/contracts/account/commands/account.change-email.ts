import { IsString } from 'class-validator';

export namespace AccountChangeEmail {
  export const topic = 'account.change-email.command';

  export class Request {
    @IsString()
    id: string;

    @IsString()
    email: string;
  }

  export class Response {}
}
