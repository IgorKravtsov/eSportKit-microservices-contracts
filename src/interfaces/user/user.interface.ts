import { LanguageType } from '../../enums';
import { Id } from '../id.interface';
import { ILearnerInfo } from './user.learner-info.interface';
import { RoleInfo } from './user.role-info.interface';
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
  bio?: string;
  roles: RoleInfo[];
  organizations: Id[];
  prefferedLang: LanguageType;
  // level?: string;
  selectedOrganizationId: Id;
  trainers?: ITrainerInfo[];
  learners?: ILearnerInfo[];
  registeredAt: Date;
  lastVisitedAt: Date;
  verification: IUserVerification;
  session?: ISession[];
  abonements?: Id[];
  gyms?: Id[];
  currentRegion?: Id;
}
