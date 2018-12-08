import { Action } from '@ngrx/store';

export interface State {
    isLoading: boolean;
}
// reducer is a function
// takes state as input
const initialState: State = {
    isLoading: false
};
export function appReducre(state: any = 'Hello World', action: Action) {
    console.log(action.type, state);
    switch (action.type) {
        case 'START_LOADING':
            return state = { val: 'Start Loading', pal: 'Abhinay' };
        case 'STOP_LOADING':
            return state = 'Stop Loading';
        default:
            return state;
    }
}
// export function appReducre(state = initialState, action: Action) {
//     switch (action.type) {
//         case 'START_LOADING':
//             return {
//                 isLoading: true
//             };
//         case 'STOP_LOADING':
//             return {
//                 isLoading: false
//             };
//         default:
//             return state;
//     }
// }
