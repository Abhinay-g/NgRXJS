import { AuthActions, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from '../actions/auth.actions';
import { AuthenticatedState } from '../models/auth.model';



const initialState: AuthenticatedState = {
    isAuthenticated: false
};

// const newState = (state, newData) => {
//     return Object.assign({}, state, newData);
// };


/// Reducer function
export function authReducer(state = initialState, action: AuthActions) {
    console.log(action.type, state);

    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                isAuthenticated: true
            };

        case SET_UNAUTHENTICATED:
            return {
                isAuthenticated: false
            };
        default:
            return state;

    }
}

export const getIsAuth = (state: AuthenticatedState) => (state.isAuthenticated);
