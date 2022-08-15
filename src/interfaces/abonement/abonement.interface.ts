import { Id } from '../id.interface';

export interface IAbonement {
  _id?: string;
  amountDays?: number;
  amountTrainings?: number;
  price: number;
  createdBy: Id;
  gyms: Id[];
  organizationId: Id;
}
