import { UserRole } from '../../enums';
import { Id } from '../id.interface';

export interface IRoleInfo {
  organizationId: Id;
  roles: UserRole[];
}
