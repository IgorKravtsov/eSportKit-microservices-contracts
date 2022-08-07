import { UserRole } from '../../enums';

export interface IJWTPayload {
  id: string;
  role: UserRole;
}
