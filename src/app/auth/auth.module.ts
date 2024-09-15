import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { AUTH_STATE_NAME } from "./selector.auth";
import { AuthReducer } from "./reducer.auth";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./effects.auth";

const routes: Route[] = [
    { path: '', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
];
@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes),
        EffectsModule.forFeature([AuthEffects]),
        StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer)]
})
export class AuthModule { }