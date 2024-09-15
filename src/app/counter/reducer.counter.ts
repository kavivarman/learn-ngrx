import { createReducer, on } from "@ngrx/store";
import { initialState } from "./state.counter";
import { decrement, increment, reset, customIncrement, ChangeAppName } from "./action.counter";

const _counterReducer = createReducer(initialState, on(increment, (state) => {
    return {
        ...state,
        counter: state.counter + 1
    };
}
), on(decrement, (state) => {
    return {
        ...state,
        counter: state.counter - 1
    };
}), on(reset, (state) => {
    return {
        ...state,
        counter: 0
    };
}), on(customIncrement, (state, action)=>{
    return {
        ...state,
        counter: state.counter+ action.value
    }
}), on(ChangeAppName, (state, action)=>{
    return {
        ...state,
        appName: action.name
    }
}));


export function counterReducer(state:any, action:any) {
    return _counterReducer(state, action);
}