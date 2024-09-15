import { ParseSourceFile } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from '../../app.state';
import { loginStart } from '../action.auth';
import { showSpinnerAction } from '../../shared/action.loadingSpinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private store: Store<IAppState>) {

  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

  onLogin() {

    if (this.loginForm.valid) {
      const email = this.loginForm.value.userName;
      const password = this.loginForm.value.password;
      this.store.dispatch(showSpinnerAction({ showSpinner: true }));
      this.store.dispatch(loginStart({ email: email, password: password }));

    }
  }

  validatePassword(): any {
    let validatePassword = this.loginForm.get('password');

    if (validatePassword?.touched && validatePassword.hasError('required')) {
      return "Password field is required";
    }
    else if (validatePassword?.touched && validatePassword.hasError('minlength')) {
      return "Password should be atleast of 5 characters";
    }
  }
}
