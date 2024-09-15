import { createReducer, on } from "@ngrx/store";
import { initialState } from "../shared/state.loadingSpinner";
import { setErrorMessageAction, showSpinnerAction } from "./action.loadingSpinner";


const _spinnerReducer = createReducer(initialState, on(showSpinnerAction, (state, action) => {
    return {
        ...state,
        showSpinner: action.showSpinner,
    }
}),
    on(setErrorMessageAction, (state, action) => {
        return {
            ...state,
            errorMessage: action.errorMessage
        }
    }));

export function spinnerReducer(state: any, action: any) {
    return _spinnerReducer(state, action);
}