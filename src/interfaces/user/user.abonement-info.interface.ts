import { Id } from '../id.interface';

export interface IAbonementInfo {
  abonementId: Id;
  trainingLeft?: number;
  daysLeft?: number;
}
