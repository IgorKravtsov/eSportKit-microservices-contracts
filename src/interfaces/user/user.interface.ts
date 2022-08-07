import { LanguageType, UserRole } from '../../enums';
import { Id } from '../id.interface';
import { ISession } from './user.session.interface';
import { ITrainerInfo } from './user.trainer-info.interface';
import { IUserVerification } from './user.verification.interface';

export interface IUser {
  _id?: Id;
  email: string;
  passwordHash: string;
  name: string;
  lastName: string;
  middleName?: string;
  role: UserRole;
  organizations: string[];
  lang?: LanguageType;
  level?: string;
  selectedOrganization?: Id;
  trainers?: ITrainerInfo[];
  registeredAt: Date;
  lastVisitedAt?: Date;
  verification: IUserVerification;
  session?: ISession;
  // abonements: string[]
  // learnerAbonements: LearnerAbonement[]
  // characteristics: Characteristic[]
  // gyms: Gym[]
}
