import { createAction, props } from "@ngrx/store";

export const SHOW_SPINNER = 'Show loading spinner';
export const SET_ERROR_MESSAGE = 'Set an error message';

export const showSpinnerAction = createAction(SHOW_SPINNER, props<{ showSpinner: boolean }>());
export const setErrorMessageAction = createAction(SET_ERROR_MESSAGE, props<{ errorMessage: string| null }>());