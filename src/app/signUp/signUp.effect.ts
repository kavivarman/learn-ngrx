import { Injectable } from "@angular/core";
import { SignUpService } from "../services/SignUp.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { signUpInitiateAction, signUpSuccessAction } from "./signUp.action";
import { catchError, exhaustMap, map, of } from "rxjs";
import { AuthService } from "../services/Auth.service";
import { setErrorMessageAction, showSpinnerAction } from "../shared/action.loadingSpinner";
import { IAppState } from "../app.state";
import { Store } from "@ngrx/store";

@Injectable({
    providedIn: 'root'
})

export class signUpEffect {
    constructor(private signupService: SignUpService, private action$: Actions, private authService: AuthService, private store: Store<IAppState>) {
    }

    signUp$ = createEffect(() =>
        this.action$.pipe(
            ofType(signUpInitiateAction),
            exhaustMap((action) => {
                return this.signupService.signUp(action.email, action.password).pipe(
                    map(data => {
                        this.store.dispatch(showSpinnerAction({ showSpinner: false }));
                        this.store.dispatch(setErrorMessageAction({ errorMessage: null }));
                        const user = this.authService.formatUser(data);
                        return signUpSuccessAction({ user: user });
                    }),
                    catchError((errorResponse) => {
                        const message = this.authService.formatErrorResponse(errorResponse.error.error.message);
                        this.store.dispatch(showSpinnerAction({ showSpinner: false }));
                        return of(setErrorMessageAction({ errorMessage: message }));
                    })
                );
            })
        )
    )
}