import { UserRole } from '../../enums';
import { Id } from '../id.interface';

export interface RoleInfo {
  organizationId: Id;
  roles: UserRole[];
}
