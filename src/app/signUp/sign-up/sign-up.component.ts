import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../common/validator/emailValidator';
import { passwordValidator } from '../../common/validator/passwordValidator';
import { Store } from '@ngrx/store';
import { IAppState } from '../../app.state';
import { signUpInitiateAction } from '../signUp.action';
import { showSpinnerAction } from '../../shared/action.loadingSpinner';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private store: Store<IAppState>) {

  }

  signUp: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, emailValidator()]),
    password: new FormControl('', [Validators.required, passwordValidator()])
  });

  onSingUp() {
    const email = this.signUp.value.email;
    const password = this.signUp.value.password;
    this.store.dispatch(showSpinnerAction({ showSpinner: true }));
    this.store.dispatch(signUpInitiateAction({ email: email, password: password }));
  }

  clearSignup() {
    this.signUp.reset();
  }
}
