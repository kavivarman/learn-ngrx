import { AuthService } from "../services/Auth.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./action.auth";
import { catchError, exhaustMap, map, of } from "rxjs";
import { Injectable } from "@angular/core";
import { User } from "../../model/user.model";
import { Store } from "@ngrx/store";
import { IAppState } from "../app.state";
import { setErrorMessageAction, showSpinnerAction } from "../shared/action.loadingSpinner";

@Injectable({
    providedIn: 'root'
})

export class AuthEffects {
    constructor(private action$: Actions, private authService: AuthService, private store: Store<IAppState>) {

    }

    Login$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authService.login(action.email, action.password).pipe(
                    map((data) => {
                        this.store.dispatch(showSpinnerAction({ showSpinner: false }));
                        this.store.dispatch(setErrorMessageAction({ errorMessage: null }));
                        const user = this.authService.formatUser(data);
                        return loginSuccess({ user });
                    }),
                    catchError((errorMessage) => {
                        const message = this.authService.formatErrorResponse(errorMessage.error.error.message);
                        this.store.dispatch(showSpinnerAction({ showSpinner: false }));
                        return of(setErrorMessageAction({ errorMessage: message }));
                    })
                );
            })
        );
    });
}