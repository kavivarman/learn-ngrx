import { createAction, props } from "@ngrx/store";
import { User } from "../../model/user.model";

export const INITIATE_SIGNUP = "Initial sign up";
export const SUCCESS_SIGNUP = "Success sign up";

export const signUpInitiateAction = createAction(INITIATE_SIGNUP, props<{ email: string, password: string }>());

export const signUpSuccessAction = createAction(SUCCESS_SIGNUP, props<{ user: User }>());