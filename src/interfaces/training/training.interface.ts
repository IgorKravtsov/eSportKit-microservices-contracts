import { Id } from '../id.interface';
import { ITrainingLearnerInfo } from './training.training-learner-info';

export interface ITraining {
  _id?: Id;
  trainingDateTime: Date;
  trainingType?: string;
  title: string;
  learners?: ITrainingLearnerInfo[];
  trainers?: Id[];
  createdBy: Id;
  gymId: Id;
  organizationId: Id;
  description?: string;
  createdAt: Date;
}
