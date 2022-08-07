import { IsString } from 'class-validator';

export namespace AccountChangedEmailEvent {
  export const topic = 'account.changed-email.event';

  export class Request {
    @IsString()
    userId: string;

    @IsString()
    email: string;

    @IsString()
    varificationCode: string;
  }
}
