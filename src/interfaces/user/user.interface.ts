export enum UserRole {
  Learner = 'learner',
  Trainer = 'trainer',
  Admin = 'admin'
}

export enum LanguageType {
  Russian = 'rus',
  Ukrainian = 'ukr',
  English = 'eng'
}

export interface IUser {
  _id?: string;
  role: UserRole;
  passwordHash: string;
  name: string;
  lastName: string;
  organizations: string[];
  lang: LanguageType;
  level?: string;
  selectedOrganization?: string;
  // abonements: string[]
  // learnerAbonements: LearnerAbonement[]
  // characteristics: Characteristic[]
  trainers?: string[];
  // gyms: Gym[]
}