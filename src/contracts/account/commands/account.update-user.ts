import { IsArray, IsEmail, IsOptional, IsString } from 'class-validator';
import { LanguageType, UserRole } from '../../../enums';
import { ITrainerInfo, IUser } from '../../../interfaces';

export namespace AccountRegister {
  export const topic = 'account.update-user.command';

  export class Request implements Partial<IUser> {
    // _id?: string | undefined;
    @IsOptional()
    @IsEmail()
    email?: string;
    // passwordHash: string;
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    lastName?: string;

    @IsOptional()
    @IsString()
    middleName?: string;

    @IsString()
    @IsOptional()
    role?: UserRole;

    @IsOptional()
    @IsArray()
    organizations?: string[];

    @IsOptional()
    @IsString()
    lang?: LanguageType;

    @IsOptional()
    @IsString()
    level?: string;

    @IsOptional()
    @IsString()
    selectedOrganization?: string;

    @IsOptional()
    trainers?: ITrainerInfo[];

    // registeredAt: Date;
    // lastVisitedAt?: Date;
    // verification: IUserVerification;
    // session?: ISession;
  }

  export class Response {}
}
