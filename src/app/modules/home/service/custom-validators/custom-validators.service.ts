import {AbstractControl, ValidationErrors} from '@angular/forms';
import validator from 'validator';

export class CustomValidators {

  // Check If Input IS URL
  static isURL(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    if (value && !validator.isURL(value)) {
      return { notUrl: true };
    }
    return null;
  }
}
