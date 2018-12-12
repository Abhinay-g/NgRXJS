import { Exercise } from "../AppModel/training.model";
export interface TrainingState {
  availableTraining: Exercise;
  finishedTraining: Exercise;
  activeTraining: Exercise;
}
