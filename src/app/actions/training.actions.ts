import { Action } from "@ngrx/store";
import { Exercise } from "../AppModel/training.model";

export const SET_AVAILABLETRAINING = "[TRAINING] SET AVAILABLETRAINING";
export const SET_COMPLETEDTRAINING = "[TRAINING] SET COMPLETEDTRAINING";
export const START_TRAINING = "[TRAINING] START TRAINING";
export const STOP_TRAINING = "[TRAINING] STOP TRAINING";

export class AvaiableTraining implements Action {
  readonly type = SET_AVAILABLETRAINING;

  constructor(public payload: Exercise) {}
}
export class CompletedTraining implements Action {
  readonly type = SET_COMPLETEDTRAINING;

  constructor(public payload: Exercise) {}
}
export class StartTraining implements Action {
  readonly type = START_TRAINING;

  constructor(public payload: Exercise) {}
}
export class StopTraining implements Action {
  readonly type = STOP_TRAINING;

  constructor(public payload: Exercise) {}
}

export type TrainingActions =
  | AvaiableTraining
  | CompletedTraining
  | StartTraining
  | StopTraining;
