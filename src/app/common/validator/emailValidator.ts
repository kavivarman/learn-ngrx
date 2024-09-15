import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.value != null && control.value != '') {
            const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
            const isValid = emailPattern.test(control.value);
            if (!isValid) {
                return { inValidEmail: true }
            }
            return null;
        }
        return null;
    }
}