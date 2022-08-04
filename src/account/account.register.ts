import { ArrayMinSize, IsArray, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export namespace AccountRegister {
  export const topic = 'account.register.command';

  export class Request {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsArray()
    @ArrayMinSize(1)
    @IsString({ each: true })
    organizations: number[];
  }

  export class Response {}
}
