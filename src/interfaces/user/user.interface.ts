import { LanguageType, UserRole } from '../../enums';

export interface IUser {
  _id?: string;
  email: string;
  passwordHash: string;
  name: string;
  lastName: string;
  middleName?: string;
  role: UserRole;
  organizations: string[];
  lang?: LanguageType;
  level?: string;
  selectedOrganization?: string;
  // abonements: string[]
  // learnerAbonements: LearnerAbonement[]
  // characteristics: Characteristic[]
  trainers?: string[];
  // gyms: Gym[]
}
