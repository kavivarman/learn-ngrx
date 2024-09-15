import { User } from "../../model/user.model";

export interface ISingUpState {
    user: User | null
}

export const initialState: ISingUpState = {
    user: null
}