import { Id } from '../id.interface';

export interface ITraining {
  _id?: Id;
  title: string;
  description?: string;
  trainingDateTime: Date;
  gymId: Id;
  learners?: Id[];
  trainers?: Id[];
  createdBy: Id;
}
