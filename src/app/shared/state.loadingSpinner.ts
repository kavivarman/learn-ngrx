export interface ISpinnerState {
    showSpinner: boolean;
    errorMessage: string | null;
}

export const initialState: ISpinnerState = {
    showSpinner: false,
    errorMessage: null
}