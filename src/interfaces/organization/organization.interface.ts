import { SportType, SubscriptionType } from '../../enums';
import { Id } from '../id.interface';

export interface IOrganization {
  _id?: string;
  title: string;
  sportType: SportType;
  subscriptionType: SubscriptionType;
  trainers?: Id[];
  learners?: Id[];
  gyms?: Id[];
  abonements?: Id[];
  trainings?: Id[];
  regions?: Id[];
}
