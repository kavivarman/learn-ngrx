import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICounterState } from "./state.counter";

const getCounterSelector = createFeatureSelector<ICounterState>('count');

export const getCount = createSelector(getCounterSelector, (state) => {
    return state.counter
});

export const getAppName = createSelector(getCounterSelector, (state) => {
    return state.appName
});