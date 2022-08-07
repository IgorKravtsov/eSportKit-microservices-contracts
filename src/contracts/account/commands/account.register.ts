import { ArrayMinSize, IsArray, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { LanguageType } from '../../../enums';
import { ITrainerInfo } from '../../../interfaces';

export namespace AccountRegister {
  export const topic = 'account.register.command';

  export class Request {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsString()
    @IsOptional()
    middleName?: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsArray()
    @ArrayMinSize(1)
    @IsString({ each: true })
    organizations: string[];

    @IsEnum(LanguageType)
    lang: LanguageType;

    @IsString()
    @IsOptional()
    level?: string;

    @IsString()
    @IsOptional()
    selectedOrganization?: string;

    @IsArray()
    // @IsString({ each: true })
    @IsOptional()
    trainers?: ITrainerInfo[];
  }

  export class Response {}
}
