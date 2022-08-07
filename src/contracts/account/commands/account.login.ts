import { IsEmail, IsNotEmpty } from 'class-validator';

export namespace AccountLogin {
  export const topic = 'account.login.command';

  export class Request {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
  }

  export class Response {
    access_token: string;
  }
}
