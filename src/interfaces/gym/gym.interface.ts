import { Id } from '../id.interface';
import { ITrainerInfo } from '../user';

export interface IGym {
  _id?: Id;
  title: string;
  address: string;
  img?: string;
  createdAt: string;
  createdBy: string;
  trainers: ITrainerInfo[];
}
