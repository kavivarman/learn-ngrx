import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const password = control.value;
        if (password != '' && password != null) {
            const hasUpperCase = /[A-Z]+/.test(password);

            const hasLowerCase = /[a-z]+/.test(password);

            const hasNumeric = /[0-9]+/.test(password);

            const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

            return !passwordValid ? { passwordStrength: true } : null;
        }
        return null;
    }
}