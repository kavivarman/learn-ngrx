import { User } from "../../model/user.model"

export interface IAuthState {
    user: User | null;
}

export const initialState: IAuthState = {
    user: null
}