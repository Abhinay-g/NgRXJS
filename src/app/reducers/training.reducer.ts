import { Action } from '@ngrx/store';
import { Exercise } from '../AppModel/training.model';
import { TrainingState } from '../models/training.model';
import { TrainingActions, SET_AVAILABLETRAINING, SET_COMPLETEDTRAINING, START_TRAINING, STOP_TRAINING } from '../actions/training.actions';

const initialState: TrainingState = {
    availableTraining: [],
    finishedTraining: [],
    activeTraining: null
};

export function trainingReducer(state = initialState, action: TrainingActions) {
    // console.log(state, action);

    switch (action.type) {
        case SET_AVAILABLETRAINING:
            console.log('spread . .. ', state);
            console.log('payload . . .', action.payload);
            console.log('**', { ...state, availableTraining: action.payload });

            return { ...state, availableTraining: action.payload };
        case SET_COMPLETEDTRAINING:
            return { ...state, finishedTraining: action.payload };
        case START_TRAINING:
            return { ...state, activeTraining: action.payload };
        case STOP_TRAINING:
            return { ...state, activeTraining: null };
        default:
            return state;
    }

}

export const getavailableTraining = (state: TrainingState) => state.availableTraining;
export const getfinishedTraining = (state: TrainingState) => state.finishedTraining;
export const getactiveTraining = (state: TrainingState) => state.activeTraining;

