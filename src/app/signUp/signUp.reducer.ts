import { createReducer, on } from "@ngrx/store";
import { initialState } from "./signup.state";
import { signUpSuccessAction } from "./signUp.action";

export const _signupReducer = createReducer(initialState, on(signUpSuccessAction, (state, action) => {
    return {
        ...state,
        user: action.user
    }
}));

export function signupReducer(state: any, action: any) {
    return _signupReducer(state, action);
}