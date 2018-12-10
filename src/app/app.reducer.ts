import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './reducers/auth.reducer';
import * as fromTraining from './reducers/training.reducer';
import { AuthenticatedState } from './models/auth.model';
import { TrainingState } from './models/training.model';

export interface State {
    auth: AuthenticatedState;
    training: TrainingState;
}

export const reducers: ActionReducerMap<State> = {
    auth: fromAuth.authReducer,
    training: fromTraining.trainingReducer
};

export const getAuthState = createFeatureSelector<AuthenticatedState>('auth');
export const getIsAuthenticated = createSelector(getAuthState, fromAuth.getIsAuth);

export const getTrainingState = createFeatureSelector<TrainingState>('training');
export const getAvailableTraining = createSelector(getTrainingState, fromTraining.getavailableTraining);
export const getCompletedTraining = createSelector(getTrainingState, fromTraining.getfinishedTraining);
export const getActiveTraining = createSelector(getTrainingState, fromTraining.getactiveTraining);
