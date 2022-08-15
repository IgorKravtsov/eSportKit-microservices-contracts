import { Id } from '../id.interface';
import { IGymOwner } from './gym-owner.interface';

export interface IGym {
  _id?: Id;

  title: string;
  address: string;
  imgUrl?: string;

  createdAt: string;
  createdBy: string;

  owners: IGymOwner[];
}
