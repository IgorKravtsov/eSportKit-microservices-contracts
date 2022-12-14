import { UserRole } from '../../enums';
import { Id } from '../id.interface';

export interface IJWTPayload {
  id: Id;
  roles: UserRole[];
  selectedOrganizationId: Id;
}
