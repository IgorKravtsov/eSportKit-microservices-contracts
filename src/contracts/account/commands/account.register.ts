import { ArrayMinSize, IsArray, IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { LanguageType } from '../../../enums';
import { Id, ITrainerInfo } from '../../../interfaces';

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

    @IsString()
    @IsOptional()
    bio?: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsArray()
    @ArrayMinSize(1)
    @IsString({ each: true })
    organizations: Id[];

    @IsEnum(LanguageType)
    prefferedLang: LanguageType;

    @IsString()
    selectedOrganizationId: Id;

    @IsDate()
    registeredAt: Date;

    @IsArray()
    // @IsString({ each: true })
    @IsOptional()
    trainers?: ITrainerInfo[];

    @IsString()
    @IsOptional()
    currentRegion?: Id;

    @IsString()
    @IsOptional()
    avatarImg?: string;
  }

  export class Response {}
}
