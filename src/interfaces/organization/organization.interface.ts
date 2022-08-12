import { SportType, SubscriptionType } from '../../enums';

export interface IOrganization {
  title: string;
  sportType: SportType;
  subscriptionType: SubscriptionType;
  trainers?: string[];
  learners?: string[];
  gyms?: string[];
  abonements?: string[];
  trainings?: string[];
}
