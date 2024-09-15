import { NgModule } from "@angular/core";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { Route, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { SIGN_UP_SELECTOR } from "./signUp.selector";
import { signupReducer } from "./signUp.reducer";
import { EffectsModule } from "@ngrx/effects";
import { signUpEffect } from "./signUp.effect";

const route: Route[] = [
    { path: '', component: SignUpComponent }
]

@NgModule({
    providers: [],
    declarations: [SignUpComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule.forChild(route),
        StoreModule.forFeature(SIGN_UP_SELECTOR, signupReducer),
        EffectsModule.forFeature(signUpEffect)
    ]
})

export class signUp {
}