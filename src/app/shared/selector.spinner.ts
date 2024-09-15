import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ISpinnerState } from "./state.loadingSpinner";

export const spinnerSelector = createFeatureSelector<ISpinnerState>('showSpinner');

export const getSpinner = createSelector(spinnerSelector, (status) => {
    return status.showSpinner;
});

export const getErrorMessage = createSelector(spinnerSelector, (status) => {
    return status.errorMessage;
});