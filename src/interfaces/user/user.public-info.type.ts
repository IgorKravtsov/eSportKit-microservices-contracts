import { IUser } from './user.interface';

export type IUserPublicInfo = Pick<IUser, '_id' | 'email' | 'name' | 'lastName' | 'middleName' | 'level' | 'role'>;
