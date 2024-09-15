export interface ICounterState {
    counter: number,
    appName: string
}

export const initialState: ICounterState = {
    counter: 0,
    appName: "Kavi App"
}